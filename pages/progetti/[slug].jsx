import React from "react";
import {getPostBySlug} from "@/lib/getPostBySlug";
import Image from "next/image";
import MasonryGrid from "@/components/masonry-grid/MasonryGrid";
import Head from "next/head";
import {getSlug} from "@/lib/getSlug";

export async function getStaticPaths () {
    const slugs = getSlug();
    return {
        paths: slugs.map((slug) => ({params: {slug}})),
        fallback: false
    };
}

export async function getStaticProps ({params}) {
    const post = getPostBySlug(params.slug);
    return {props: {post}};
}

export default function Post ({post}) {
    if (!post || !post.meta) {
        return <p>Error: Post data is not available.</p>;
    }

    const {title, description, headerImage, category, location, imageContent, textContent} = post.meta;

    console.log(textContent);
    const textItems = textContent.map((line) => ({ type: "text", content: line }))

    console.log(textItems);

    return (
        <>
            <Head>
                <title>Project | {title || "Untitled"}</title>
                <meta name="description" content={description || "No description available"} />
                <meta property="og:title" content={`Project | ${title}`} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={headerImage || "/default-image.jpg"} />
            </Head>
            <main className="relative mt-24 md:mt-32 lg:mt-40">
                <div className="flex flex-col items-start max-w-screen-lg mx-auto px-2 md:px-4 lg:px-6">
                    <h2 className="font-bold uppercase">{title}</h2>
                    <p>{description || "Description not provided."}</p>
                    <p className="mb-0">
                        <span className="font-bold">Tipo Progetto: </span>
                        {category?.length ? category.join(", ") : "N/A"}
                    </p>
                    <p className="mt-0">
                        <span className="font-bold">Dove: </span>
                        {location || "N/A"}
                    </p>
                    {headerImage && (
                        <Image
                            src={headerImage}
                            alt={title || "Header Image"}
                            className="w-full max-h-96 object-cover rounded-xl"
                            width={1000}
                            height={400}
                        />
                    )}
                </div>
                <div className="max-w-screen-2xl mx-auto">
                    <MasonryGrid images={imageContent} text={textItems} />
                </div>
            </main>
        </>
    );
}
