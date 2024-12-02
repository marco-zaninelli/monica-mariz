import React, { Suspense } from 'react';
import Head from "next/head";
import dynamic from 'next/dynamic';
import favIco from "@/public/favicon.ico";

// Dynamically import sections with fallbacks during loading
const HeroS = dynamic(() => import('@/components/homepage-sections/HeroS'), { suspense: true });
const ProjectS = dynamic(() => import('@/components/homepage-sections/ProjectS'), { suspense: true });
const ArticleS = dynamic(() => import('@/components/homepage-sections/ArticleS'), { suspense: true });
const GoalsS = dynamic(() => import('@/components/homepage-sections/GoalsS'), { suspense: true });
const PaintingS = dynamic(() => import('@/components/homepage-sections/PaintingS'), { suspense: true });
const ServiceS = dynamic(() => import('@/components/homepage-sections/ServiceS'), { suspense: true });

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
                {/* TODO:: ADD IMAGE URL */}
                <meta property="og:image" content="URL to image for social sharing" />
                <meta property="og:url" content="https://www.monicamariz.it" />
            </Head>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <HeroS />
                    <ProjectS />
                    <GoalsS />
                    <ServiceS />
                    <ArticleS />
                    <PaintingS />
                </Suspense>
            </main>
        </>
    );
}
