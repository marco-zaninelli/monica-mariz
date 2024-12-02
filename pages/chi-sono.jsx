import PageHeading from "@/components/PageHeading";
import Head from "next/head";

export default function ChiSono () {
    return (
        <>
            <Head>
                <title>Monica Mariz | Chi Sono</title>
            </Head>
            <main>
                <PageHeading
                    heading={"CHI SONO"}
                    description={"Dall'arte alla progettazione d'interni, un viaggio creativo fatto di eleganza, dettagli e passione"}
                />
            </main>
        </>
    );
}