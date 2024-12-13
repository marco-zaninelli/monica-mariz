import TitleAndButtonLayout from "@/components/layouts/TitleAndButtonLayout";
import PaintingModal from "@/components/PaintingModal";
import FourCardsDisplay from "@/components/homepage/FourCardsDisplay";
import ProjectElement from "@/components/homepage/ProjectElement";
import {useState} from "react"

export default function PaintingS ({data}) {
    const [selectedPainting, setSelectedPainting] = useState(null);
    const [toggleModal, setToggleModal] = useState(false);

    function handleModalOpen (painting) {
        setSelectedPainting(painting);
        setToggleModal(true);
    }

    function handleModalClose () {
        setToggleModal(false);
        setSelectedPainting(null);
    }

    return (
        <TitleAndButtonLayout title={"ARTE SU TELA"} buttonText={"Altri quadri"} buttonLink={"/quadri"}>
            <FourCardsDisplay>
                {data.map((painting, index) => (
                    <ProjectElement
                        key={painting.slug}
                        imgSrc={painting.src}
                        imgAlt={painting.alt}
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
