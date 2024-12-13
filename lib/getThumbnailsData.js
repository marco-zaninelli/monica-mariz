import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Markdown file paths
const publicProjectsPath = "/public/posts";
const publicArtPath = "/public/paintings";

export function getThumbnailsData (folder) {
    // Identify folder and absolute path
    const directoryPath = path.join(process.cwd(), "posts", folder);
    const isArtFolder = folder === "art";

    // Return empty array if folder does not exist
    if (!fs.existsSync(directoryPath)) {
        console.error(`The folder /posts/"${folder}" does not exist.`);
        return [];
    }

    // Remove extension from file name
    const slugs = fs.readdirSync(directoryPath).map((fileName) => fileName.replace(/\.md$/, ""));

    // Process Markdown file
    const data = slugs.map((slug) => {
        // Get Markdown file path and image folder path
        const markdownPath = path.join(directoryPath, `${slug}.md`);
        const cleanSlug = slug.replace(/^\d+-/, "");
        const imageFolder = isArtFolder
            ? publicArtPath
            : path.join(process.cwd(), publicProjectsPath, cleanSlug);

        // Check if Markdown file exists
        if (!fs.existsSync(markdownPath)) {
            console.error(`Markdown file for slug "${slug}" does not exist.`);
            return null;
        }

        // Get Markdown file data
        const fileContents = fs.readFileSync(markdownPath, "utf-8");
        const {data} = matter(fileContents);

        let imagesInFolder = null;
        let thumbnailImage = null;

        if (!isArtFolder) {
            // Check if image folder exists and get Thumbnail path
            if (!fs.existsSync(imageFolder)) {
                console.warn(`Image folder "${imageFolder}" does not exist.`);
                return null;
            }

            imagesInFolder = fs.readdirSync(imageFolder);
            thumbnailImage = imagesInFolder.find((file) => file.startsWith("Thumbnail"));
        }

        return {
            ...data,
            title: data.title,
            slug: slug,
            src: isArtFolder ? data.src : `/posts/${cleanSlug}/${thumbnailImage}`,
            alt: isArtFolder ? data.alt : thumbnailImage ? thumbnailImage.replace(path.extname(thumbnailImage), "") : "No Thumbnail",
            link: isArtFolder ? "" : `/progetti/${cleanSlug}`
        };
    });

    // Filter out null entries (e.g., missing markdown or thumbnail)
    return data.filter((item) => item !== null);
}
