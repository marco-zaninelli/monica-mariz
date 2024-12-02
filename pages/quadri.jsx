import PageHeading from "@/components/PageHeading";
import Head from "next/head";

export default function Quadri () {
    return (
        <>
            <Head>
                <title>Monica Mariz | Quadri</title>
            </Head>
            <main>
                <PageHeading
                    heading={"QUADRI"}
                    description={"Ogni pezzo racconta una storia unica, riflettendo creatività ed espressione personale."}
                />
            </main>
        </>
    );
}