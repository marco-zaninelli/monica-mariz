import React, { useState } from "react";
import GridStructure from "@/components/grid/GridStructure";
import PaintingModal from "@/components/PaintingModal";

const ModalGrid = ({ data }) => {
    const [selectedPainting, setSelectedPainting] = useState(null);
    const [toggleModal, setToggleModal] = useState(false);

    // Function to open the modal with the selected painting's data
    function handleModalOpen(painting) {
        setSelectedPainting(painting);
        setToggleModal(true);
    }

    // Function to close the modal and clear the selected painting
    function handleModalClose() {
        setToggleModal(false);
        setSelectedPainting(null);
    }

    return (
        <>
            <GridStructure
                data={data}
                onImageClick={(painting) => handleModalOpen(painting)}
            />
            {toggleModal && selectedPainting && (
                <PaintingModal
                    painting={selectedPainting}
                    onClose={handleModalClose}
                />
            )}
        </>
    );
};

export default ModalGrid;
