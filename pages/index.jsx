import Head from "next/head";
import HeroS from "@/components/homepage-sections/HeroS";
import ServiceS from "@/components/homepage-sections/ServiceS";
import GoalsS from "@/components/homepage-sections/GoalsS";
import ArticleS from "@/components/homepage-sections/ArticleS";
import ProjectS from "@/components/homepage-sections/ProjectS";
import PaintingS from "@/components/homepage-sections/PaintingS";

export async function getStaticProps () {
    const {getThumbnailsData} = await import("@/lib/getThumbnailsData");

    // Fetch the projects and art data
    const allProjects = getThumbnailsData("projects") || [];
    const allArtPosts = getThumbnailsData("art") || [];

    // Slice the data as needed
    const projects = allProjects.slice(0, 4);
    const art = allArtPosts.slice(0, 4);

    // Return both datasets in props
    return {props: {projects, art}};
}

export default function Home ({projects, art}) {

    return (
        <>
            <Head>
                <title>Monica Mariz</title>
                <meta
                    name="description"
                    content="Monica Mariz: Esperta in Design d'interni, Home Staging, Fotografia e Arte in Trentino-Altoadige. Trasforma la tua casa con stile e innovazione."
                />
                <link rel="canonical" href="https://www.monicamariz.it" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Monica Mariz | Homepage" />
                <meta
                    property="og:description"
                    content="Monica Mariz: Esperta in Design d'interni, Home Staging, Fotografia e Arte in Trentino-Altoadige. Trasforma la tua casa con stile e innovazione."
                />
                {/* TODO:: Add image URL for social sharing */}
                {/*<meta property="og:image" content="URL to image for social sharing" />*/}
                <meta property="og:url" content="https://www.monicamariz.it" />
            </Head>
            <main>
                <HeroS />
                <ProjectS data={projects} />
                <GoalsS />
                <ServiceS />
                <ArticleS />
                <PaintingS data={art} />
            </main>
        </>
    );
}
