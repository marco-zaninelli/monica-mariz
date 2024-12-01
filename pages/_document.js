import {Html, Head, Main, NextScript} from "next/document";
import {initializeGoogleTagManager} from "@/lib/googleTagManager";
import {useEffect} from "react";

export default function Document () {
    useEffect(() => {
        initializeGoogleTagManager("GTM-KFSZ877F");
    }, []);

    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            {/* TODO:: GOOGLE ANALYTICS IMPLEMENTATION */}
            </Head>
            <body className="antialiased">
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}
