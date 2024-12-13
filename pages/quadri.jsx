import PageHeading from "@/components/PageHeading";
import {getThumbnailsData} from "@/lib/getThumbnailsData";
import ModalGrid from "@/components/grid/ModalGrid";
import Head from "next/head";


export async function getStaticProps () {
    const paintingsData = getThumbnailsData("art");
    return {props: {paintingsData}};
}

export default function Quadri ({paintingsData}) {
    if (!paintingsData) {
        return <p>Error: Data is not available.</p>;
    }

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
                <ModalGrid data={paintingsData} />
            </main>
        </>
    );
}
