    import ProjectElement from "@/components/homepage/ProjectElement";
    import FourCardsDisplay from "@/components/homepage/FourCardsDisplay";
    import TitleAndButtonLayout from "@/components/layouts/TitleAndButtonLayout";

    export default function ProjectS ({data}) {
        return (

            <TitleAndButtonLayout title={"ULTIMI PROGETTI"} buttonText={"Altri progetti"} buttonLink={"/progetti"}>
                <FourCardsDisplay>
                    {data.map((post, index) => (
                        <ProjectElement
                            key={post.slug}
                            imgSrc={post.src}
                            imgAlt={post.alt}
                            heading={post.title}
                            link={post.link}
                        />
                    ))}
                </FourCardsDisplay>
            </TitleAndButtonLayout>
        );
    }