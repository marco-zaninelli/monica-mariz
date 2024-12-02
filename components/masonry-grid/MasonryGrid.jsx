import { useEffect, useState } from 'react';
import { MasonrySortingHelper } from './MasonrySortingHelper';
import Image from 'next/image';

const MasonryGrid = ({ images, text }) => {
    const [columns, setColumns] = useState(3);

    // Dynamically adjust the number of columns based on screen width
    useEffect(() => {
        const updateLayout = () => {
            const screenWidth = window.innerWidth;
            const columnCount = screenWidth <= 768 ? 2 : 3;
            setColumns(columnCount);
        };
        updateLayout();

        // Event listener for window resize
        window.addEventListener('resize', updateLayout);

        // Cleanup: remove event listener on component unmount
        return () => window.removeEventListener('resize', updateLayout);
    }, []);

    // Use MasonrySortingHelper to sort items into columns
    const columnsItems = MasonrySortingHelper(images, text, columns);

    return (
        <div className="max-w-screen-xl mx-auto flex flex-row lg:gap-6 lg:p-6 md:gap-4 md:p-4 gap-2 p-2">
            {columnsItems.map((column, columnIndex, index) => (
                <div key={index} className="flex flex-col lg:gap-6 md:gap-4 gap-2">
                    {column.map((item, index) => {
                        if (item.type === 'text') {
                            return (
                                <p
                                    key={index}
                                    className="m-0 px-4 md:px-8 lg:px-14 py-8 md:py-12 lg:py-16 text-center"
                                >
                                    {item.content}
                                </p>
                            );
                        }

                        if (item.type === 'image') {
                            return (
                                <Image
                                    key={index}
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-auto object-cover rounded-xl"
                                    width={400}
                                    height={600}
                                />
                            );
                        }

                        // Handle unexpected item types
                        return <p key={index} className="text-red-500">Error: Unexpected item type</p>;
                    })}
                </div>
            ))}
        </div>
    );
};

export default MasonryGrid;