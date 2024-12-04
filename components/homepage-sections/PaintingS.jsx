import React, { useEffect, useState } from 'react';
import sanityClient from "@/lib/sanityClient";
import {GET_LATEST_PAINTINGS} from "@/lib/queries";
import TitleAndButtonLayout from "@/components/layouts/TitleAndButtonLayout";
import PaintingModal from "@/components/PaintingModal";
import FourCardsDisplay from "@/components/homepage/FourCardsDisplay";
import ProjectElement from "@/components/homepage/ProjectElement";

export default function PaintingS () {
    const [latestPaintings, setLatestPaintings] = useState([]);
    const [selectedPainting, setSelectedPainting] = useState(null);
    const [toggleModal, setToggleModal] = useState(false);

    useEffect(() => {
        sanityClient
            .fetch(GET_LATEST_PAINTINGS)
            .then((data) => setLatestPaintings(data))
            .catch(console.error);
    }, []);

    function handleModalOpen(painting){
        setSelectedPainting(painting);
        setToggleModal(true);
    }

    function handleModalClose(){
        setToggleModal(false);
        setSelectedPainting(null);
    }

    return (
        <TitleAndButtonLayout title={"ARTE SU TELA"} buttonText={"Altri quadri"} buttonLink={"/quadri"}>
            <FourCardsDisplay>
                {latestPaintings.map((painting, index) => (
                    <ProjectElement
                        key={painting.slug.current}
                        imgSrc={painting.thumbnail.asset.url}
                        imgAlt={painting.thumbnail.alt || `Image ${index + 1}`}
                        heading={painting.title}
                        onClick={() => handleModalOpen(painting)}
                    />
                ))}
            </FourCardsDisplay>
            {toggleModal && selectedPainting && (
                <PaintingModal painting={selectedPainting} onClose={handleModalClose} />
            )}
        </TitleAndButtonLayout>
    );
}
