import React from 'react';
import GridStructure from "@/components/grid/GridStructure";
import { useRouter } from 'next/router';

const LinkGrid = ({ data, isLoading }) => {
    const router = useRouter();

    const handleImageClick = (image) => {
        if (image.link) {
            router.push(image.link);
        }
    };

    return <GridStructure data={data} onImageClick={handleImageClick} isLoading={isLoading} />;
};

export default LinkGrid;
