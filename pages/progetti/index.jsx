import {useState, useEffect} from "react";
import PageHeading from "@/components/PageHeading";
import LinkGrid from "@/components/grid/LinkGrid";
import Head from "next/head";
import {getThumbnailsData} from "@/lib/getThumbnailsData";

export async function getStaticProps () {
    const data = getThumbnailsData("projects");
    return {props: {data}};
}

export default function Progetti ({data}) {
    const [selectedCategory, setSelectedCategory] = useState("Tutti");
    const [filteredData, setFilteredData] = useState(data);
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        // Extract unique categories from the data
        const uniqueCategories = [
            "Tutti",
            ...new Set(data.flatMap((item) => item.category || []))
        ];
        setCategories(uniqueCategories);
    }, [data]);

    const filterByCategory = (category) => {
        setSelectedCategory(category);
        if (category === "Tutti") {
            setFilteredData(data);
        } else {
            setFilteredData(
                data.filter((item) => item.category && item.category.includes(category))
            );
        }
    };

    const buttonBaseStyle =
        "mx-2 px-2 py-0 border-b border-transparent text-secondary transition-all duration-300";
    const buttonActive = "font-bold border-b-secondary";
    const buttonHover = "hover:border-b-secondary";

    return (
        <>
            <Head>
                <title>Monica Mariz | Progetti</title>
                <meta
                    name="description"
                    content="Scopri i miei progetti di interior design: arredamento, allestimento e restyling per spazi unici e personalizzati. Creatività e funzionalità al centro."
                />
                <link rel="canonical" href="https://www.monicamariz.it/progetti" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Monica Mariz | Progetti" />
                <meta
                    property="og:description"
                    content="Scopri i miei progetti di interior design: arredamento, allestimento e restyling per spazi unici e personalizzati. Creatività e funzionalità al centro."
                />
                <meta property="og:url" content="https://www.monicamariz.it/progetti" />
            </Head>
            <main>
                <PageHeading
                    heading={"PROGETTI"}
                    description={
                        "Esplora l'unicità in ogni progetto. Ogni spazio racconta una storia unica attraverso arte, design e originalità."
                    }
                />
                <div className="text-center my-4 sticky top-0 py-2 bg-primary z-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`${buttonBaseStyle} ${
                                selectedCategory === category ? buttonActive : buttonHover
                            }`}
                            onClick={() => filterByCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <LinkGrid data={filteredData} />
            </main>
        </>
    );
}
