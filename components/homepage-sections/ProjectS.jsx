import ProjectElement from "@/components/homepage/ProjectElement";
import {useEffect, useState} from "react";
import sanityClient from "@/lib/sanityClient";
import FourCardsDisplay from "@/components/homepage/FourCardsDisplay";
import TitleAndButtonLayout from "@/components/layouts/TitleAndButtonLayout";
import {GET_LATEST_PROJECTS} from "@/lib/queries";

export default function ProjectS () {
    const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
        sanityClient
            .fetch(GET_LATEST_PROJECTS)
            .then((data) => setLatestPosts(data))
            .catch(console.error);
    }, []);

    return (

        <TitleAndButtonLayout title={"ULTIMI PROGETTI"} buttonText={"Altri progetti"} buttonLink={"/progetti"}>
            <FourCardsDisplay>
                {latestPosts.map((post, index) => (
                    <ProjectElement
                        key={post.slug.current}
                        imgSrc={post.thumbnail.asset.url}
                        imgAlt={post.thumbnail.alt || `Image ${index + 1}`}
                        heading={post.title}
                        link={`/progetti/${post.slug.current}`}
                    />
                ))}
            </FourCardsDisplay>
        </TitleAndButtonLayout>
    );
}