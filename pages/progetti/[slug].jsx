import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import sanityClient from "@/lib/sanityClient";
import Image from "next/image";
import {GET_PROJECT_PAGE_DATA_BY_SLUG} from "@/lib/queries";
import MasonryGrid from "@/components/masonry-grid/MasonryGrid";
import Head from "next/head";

const ProjectPage = () => {
    const router = useRouter();
    const [singlePost, setSinglePost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [content, setContent] = useState([]);

    useEffect(() => {
        if (router.isReady && router.query.slug) {
            const {slug} = router.query;
            sanityClient.fetch(GET_PROJECT_PAGE_DATA_BY_SLUG, {slug})
                .then((data) => {
                    if (data?.length) {
                        setSinglePost(data[0]);
                        prepareContent(data[0]);
                    } else {
                        console.warn("No data found");
                    }
                })
                .catch((error) => console.error("Error fetching data:", error))
                .finally(() => setLoading(false));
        }
    }, [router.isReady, router.query.slug]);

    const prepareContent = (post) => {
        const textContent = [];
        const imageContent = [];

        // Prepare text content
        if (post.textContent) {
            textContent.push(...post.textContent.map(text => ({
                type: "text",
                content: text
            })));
        }

        // Prepare image content
        if (post.imageContent) {
            imageContent.push(...post.imageContent.map(img => {
                const match = img.asset._id.match(/x(\d+)-/);
                const height = match ? parseInt(match[1], 10) : null;

                return {
                    type: "image",
                    src: img.asset.url,
                    alt: img.alt || img.asset.originalFilename.split(".")[0],
                    height: height
                };
            }));
        }

        content.image = imageContent;
        content.text = textContent;
    };

    if (loading) return <div className={"w-screen h-screen"}></div>;

    return (
        <>
            <Head>
                <title>Project | {singlePost?.title}</title>
                <meta name="description" content={singlePost?.description} />
                <link rel="canonical" href={`https://www.monicamariz.it/${singlePost?.slug}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content={`Project | ${singlePost?.title}`} />
                <meta property="og:description" content={singlePost?.description} />
                <meta property="og:image" content={singlePost.headerImage.asset.url} />
                <meta property="og:url" content={`https://www.monicamariz.it/${singlePost?.slug}`} />
            </Head>
            <main className="relative mt-24 md:mt-32 lg:mt-40">
                <div className="flex flex-col items-start max-w-screen-lg mx-auto px-2 md:px-4 lg:px-6">
                    <h2 className="font-bold uppercase">{singlePost.title}</h2>
                    <p>{singlePost.description}</p>
                    <p className="mb-0">
                        <span className="font-bold">Tipo Progetto: </span>
                        {singlePost.categories?.length ? (
                            singlePost.categories.map((category, index) => (
                                <React.Fragment key={category._id}>
                                    <span>{category.title}</span>
                                    {index < singlePost.categories.length - 1 && ", "}
                                </React.Fragment>
                            ))
                        ) : "N/A"}
                    </p>
                    <p className="mt-0">
                        <span className="font-bold">Dove: </span>
                        {singlePost.location || "N/A"}
                    </p>
                    <Image
                        src={singlePost.headerImage.asset.url}
                        alt={singlePost.title || "Header Image"}
                        className="w-full max-h-96 object-cover rounded-xl"
                        width={1000}
                        height={400}
                    />
                </div>
                <div className="max-w-screen-2xl mx-auto">
                    <MasonryGrid images={content.image} text={content.text} />
                </div>
            </main>
        </>
    );
};

export default ProjectPage;
