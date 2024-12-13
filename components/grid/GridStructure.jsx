import {useState} from "react";
import Image from "next/image";

const GridStructure = ({data, onImageClick}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <>
            <div className="mx-auto max-w-screen-xl grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6 px-2 md:px-4 lg:px-6 mb-8">
                {data.map((image, index) => (
                    <article key={index} className="break-inside-avoid">
                        <button
                            onClick={() => onImageClick(image, index)}
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="group block w-full max-w-full overflow-hidden rounded-xl">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full object-cover rounded-xl transition-transform duration-300 ease-in-out"
                                    width={400}
                                    height={600}
                                    style={{
                                        transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)"
                                    }}
                                />
                            </div>
                            <h4 className="text-start mt-2 mb-0">{image.title}</h4>
                        </button>
                    </article>
                ))}
            </div>
        </>
    );
};

export default GridStructure;
