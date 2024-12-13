import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), 'posts', 'projects');

export function getSlug() {
    return fs.readdirSync(postsDirectory).map((fileName) => {
        const cleanName = fileName.replace(/^\d+-/, "").replace(/\.md$/, "");
        return cleanName;
    });
}
