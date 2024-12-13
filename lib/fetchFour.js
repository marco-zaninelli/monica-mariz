// lib/getPaintingStaticProps.js
import { getThumbnailsData } from "@/lib/getThumbnailsData";

export async function getStaticProps() {
    const latestPaintings = getThumbnailsData("art") || [];
    const data = latestPaintings.slice(0, 4);

    return { props: { data } };
}
