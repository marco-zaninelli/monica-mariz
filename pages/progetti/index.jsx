import PageHeading from "@/components/PageHeading";
import {useEffect, useState} from "react";
import sanityClient from "@/lib/sanityClient";
import LinkGrid from "@/components/grid/LinkGrid";
import {GET_PROJECTS_DATA} from "@/lib/queries";
import Head from "next/head";

export default function Progetti () {
    const [post, setPost] = useState(null);
    const [categories, setCategories] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        sanityClient
            .fetch(GET_PROJECTS_DATA)
            .then((data) => {
                setPost(data);
                setFilteredPosts(data);
                setIsLoading(false);

                const usedCategories = new Set(
                    data.flatMap(post => post.categories?.map(cat => cat.title)).filter(Boolean)
                );
                setCategories(Array.from(usedCategories));
            })
            .catch(console.error);
    }, []);

    const filterByCategory = (category) => {
        setSelectedCategory(category);

        window.scrollTo({
            top: 350,
            behavior: "smooth"
        });

        if (category === "all") {
            setFilteredPosts(post);
        } else {
            setFilteredPosts(post.filter(post => post.categories?.some(cat => cat.title === category)));
        }
    };

    const data = {
        images: filteredPosts.map(post => ({
            src: post.thumbnail.asset.url,
            alt: post.thumbnail.asset.originalFilename.split(".")[0],
            link: `/progetti/${post.slug.current}`,
            title: post.title
        }))
    };

    const buttonBaseStyle = 'mx-2 px-2 py-0 border-b border-transparent text-secondary transition-all duration-300';
    const buttonActive = 'font-bold'
    const buttonHover = 'hover:border-b-secondary'

    return (
        <>
            <Head>
                <title>Monica Mariz | Progetti</title>
            </Head>
            <main>
                <PageHeading
                    heading={"PROGETTI"}
                    description={"Esplora l'unicità in ogni progetto. Ogni spazio racconta una storia unica attraverso arte, design e originalità."}
                />
                {categories.length > 1 && (
                    <div className="mb-4  sticky top-0 bg-primary z-10 w-full text-center">
                        <button
                            onClick={() => filterByCategory("all")}
                            className={`${buttonBaseStyle} ${selectedCategory === "all" ? buttonActive : buttonHover}`}>
                            Tutti
                        </button>
                        {categories.map((category) => (
                            <button key={category}
                                    onClick={() => filterByCategory(category)}
                                    className={`${buttonBaseStyle} ${selectedCategory === category ? buttonActive : buttonHover}`}>
                                {category}
                            </button>
                        ))}
                    </div>
                )}
                <LinkGrid data={data} isLoading={isLoading} />
            </main>
        </>
    );
}