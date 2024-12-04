import PageHeading from "@/components/PageHeading";
import Head from "next/head";
import sanityClient from "@/lib/sanityClient";
import React, { useEffect, useState } from "react";
import ModalGrid from "@/components/grid/ModalGrid";
import { GET_PAINTINGS_DATA } from "@/lib/queries";

export default function Quadri() {
    const [paintingsData, setPaintingsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(GET_PAINTINGS_DATA)
            .then((data) => {
                const transformedData = {
                    images: data.map((painting) => ({
                        src: painting.thumbnail?.asset?.url || "",
                        alt: painting.thumbnail?.asset?.originalFilename?.split(".")[0] || "Untitled",
                        title: painting.title || "No Title",
                        slug: painting.slug || "",
                    })),
                };
                setPaintingsData(transformedData);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching paintings data:", err);
                setError("Unable to load paintings data. Please try again later.");
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <Head>
                <title>Monica Mariz | Quadri</title>
                <meta
                    name="description"
                    content="Scopri dipinti artistici unici con colori vibranti e design intricati. Opere originali, arte su misura e commissioni disponibili."
                />
                <link rel="canonical" href="https://www.monicamariz.it/quadri" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Monica Mariz | Quadri" />
                <meta
                    property="og:description"
                    content="Scopri dipinti artistici unici con colori vibranti e design intricati. Opere originali, arte su misura e commissioni disponibili."
                />
                {/* TODO:: Add image URL for social sharing */}
                {/*<meta property="og:image" content="URL to image for social sharing" />*/}
                <meta property="og:url" content="https://www.monicamariz.it/quadri" />
            </Head>
            <main>
                <PageHeading
                    heading="QUADRI"
                    description="Ogni pezzo racconta una storia unica, riflettendo creatività ed espressione personale."
                />
                {error ? (
                    <div className="error-message">{error}</div>
                ) : (
                    <ModalGrid data={paintingsData} isLoading={isLoading} />
                )}
            </main>
        </>
    );
}
