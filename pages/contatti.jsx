import PageHeading from "@/components/PageHeading";
import Head from "next/head";

export default function Contatti () {
    return (
        <>
            <Head>
                <title>Monica Mariz | Contatti</title>
            </Head>
            <main>
                <PageHeading
                    heading={"CONTATTI"}
                    description={"Vuoi fare due chiacchiere? Usa il modulo sotto o scrivimi via email o social. Ti risponderò presto!"}
                />
            </main>
        </>
    );
}