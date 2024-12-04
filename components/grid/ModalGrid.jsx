import React, { useState } from "react";
import GridStructure from "@/components/grid/GridStructure";
import PaintingModal from "@/components/PaintingModal";

const ModalGrid = ({ data, isLoading }) => {
    const [selectedPainting, setSelectedPainting] = useState(null);
    const [toggleModal, setToggleModal] = useState(false);

    function handleModalOpen(painting) {
        setSelectedPainting(painting); // Pass the painting object to selectedPainting
        setToggleModal(true);
    }

    function handleModalClose() {
        setToggleModal(false);
        setSelectedPainting(null);
    }

    return (
        <>
            <GridStructure
                data={data || { images: [] }} // Ensure data has a default structure
                onImageClick={(painting) => handleModalOpen(painting)} // Pass clicked painting
                isLoading={isLoading}
            />
            {toggleModal && selectedPainting && (
                <PaintingModal
                    painting={selectedPainting} // Pass the selected painting object
                    onClose={handleModalClose}
                />
            )}
        </>
    );
};

export default ModalGrid;
