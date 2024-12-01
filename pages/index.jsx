import Head from "next/head";
import HeroS from "@/components/homepage-sections/HeroS";
import ProjectS from "@/components/homepage-sections/ProjectS";
import ArticleS from "@/components/homepage-sections/ArticleS";
import GoalsS from "@/components/homepage-sections/GoalsS";
import PaintingS from "@/components/homepage-sections/PaintingS";
import ServiceS from "@/components/homepage-sections/ServiceS";

import favIco from "@/public/favicon.ico"


export default function Home () {
    return (
        <>
            <Head>
                <title>Monica Mariz</title>
                <meta name="description" content="Monica Mariz: Esperta in Design d'interni, Home Staging, Fotografia e Arte in Trentino-Altoadige. Trasforma la tua casa con stile e innovazione." />
                <link rel="canonical" href="https://www.monicamariz.it" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Monica Mariz | Homepage" />
                <meta property="og:description" content="Monica Mariz: Esperta in Design d'interni, Home Staging, Fotografia e Arte in Trentino-Altoadige. Trasforma la tua casa con stile e innovazione." />
                <meta property="og:image" content="URL to image for social sharing" />
                <meta property="og:url" content="https://www.monicamariz.it" />
                <link rel="icon" href={favIco} />
            </Head>
            <main>
                <HeroS />
                <ProjectS />
                <GoalsS />
                <ServiceS />
                <ArticleS />
                <PaintingS />
            </main>
        </>
    );
}