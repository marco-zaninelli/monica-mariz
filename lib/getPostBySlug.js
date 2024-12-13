import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import sizeOf from 'image-size';

// Directories for markdown files and public posts
const postsDirectory = path.join(process.cwd(), 'posts', 'projects');
const publicPostsDirectory = '/posts';

/**
 * Fetches post data by its slug.
 * @param {string} slug - Slug identifier for the post.
 * @returns {object} - Post data including metadata, images, and text content.
 */
export function getPostBySlug(slug) {
    // Find the markdown file matching the slug (ignoring numeric prefixes)
    const matchingFile = fs
        .readdirSync(postsDirectory)
        .find((file) => file.replace(/^\d+-/, "").replace(/\.md$/, "") === slug);

    if (!matchingFile) throw new Error(`Markdown file for slug "${slug}" does not exist.`);

    // Read the markdown file and parse its content
    const fullPath = path.join(postsDirectory, matchingFile);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Paths and variables for images and content
    const cleanSlug = matchingFile.replace(/\.md$/, "").replace(/^\d+-/, "");
    const imageFolder = path.join(process.cwd(), "public", "posts", cleanSlug);
    let allImages = [];
    let headerImage = null;

    // Process images if the folder exists
    if (fs.existsSync(imageFolder)) {
        allImages = fs.readdirSync(imageFolder);
        headerImage = allImages.find((file) => file.startsWith("Header"));
        allImages = allImages.filter((file) => !file.startsWith("Header"));
    }

    // Map image metadata
    const imageContent = allImages.map((image) => {
        const imagePath = path.join(imageFolder, image);
        const dimensions = fs.existsSync(imagePath) ? sizeOf(imagePath) : { height: null };
        return {
            type: "image",
            src: `${publicPostsDirectory}/${cleanSlug}/${image}`,
            alt: path.basename(image, path.extname(image)),
            height: dimensions.height,
        };
    });

    // Split markdown content into lines
    const textContent = content
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line);

    // Return structured post data
    return {
        slug: cleanSlug,
        meta: {
            ...data,
            headerImage: headerImage
                ? `${publicPostsDirectory}/${cleanSlug}/${headerImage}`
                : null,
            imageContent
        },
    };
}
