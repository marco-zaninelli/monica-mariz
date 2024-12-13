import { useEffect, useState } from 'react';
import { MasonrySortingHelper } from './MasonrySortingHelper';
import Image from 'next/image';

const MasonryGrid = ({ images, text }) => {
    const [columns, setColumns] = useState(3);

    useEffect(() => {
        const updateLayout = () => {
            const screenWidth = window.innerWidth;
            setColumns(screenWidth <= 768 ? 2 : 3);
        };
        updateLayout();
        window.addEventListener('resize', updateLayout);
        return () => window.removeEventListener('resize', updateLayout);
    }, []);

    const columnsItems = MasonrySortingHelper(images, text, columns);

    return (
        <div className="max-w-screen-xl mx-auto flex flex-row lg:gap-6 lg:p-6 md:gap-4 md:p-4 gap-2 p-2">
            {columnsItems.map((column, colIndex) => (
                <div key={colIndex} className="flex-1 flex flex-col lg:gap-6 md:gap-4 gap-2">
                    {column.map((item, itemIndex) => {
                        if (item.type === 'text') {
                            return (
                                <p key={itemIndex} className="text-center px-4 py-8">
                                    {item.content}
                                </p>
                            );
                        }
                        if (item.type === 'image') {
                            return (
                                <Image
                                    key={itemIndex}
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full object-cover rounded-xl"
                                    width={400}
                                    height={600}
                                />
                            );
                        }
                        return <p key={itemIndex}>Invalid item type</p>;
                    })}
                </div>
            ))}
        </div>
    );
};

export default MasonryGrid;
