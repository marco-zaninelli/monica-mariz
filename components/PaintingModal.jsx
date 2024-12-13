import { useEffect } from "react";
import CloseIcon from "@/icons/CloseIcon";
import MyButton from "@/components/MyButton";
import Image from "next/image";

const PaintingModal = ({ painting, onClose }) => {
    useEffect(() => {
        // Prevent background scrolling when modal is open
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const handleClose = () => {
        onClose();
    };

    if (!painting) {
        return null; // Return nothing if no painting is provided
    }

    const mailSubject = encodeURIComponent("Interesse nell'acquisto di un quadro");
    const mailBody = encodeURIComponent(
        `Salve,\n\nSono interessato al quadro "${painting.title || "N/A"}".\nPotrebbe fornirmi ulteriori dettagli?\n\nGrazie!`
    );

    return (
        <div
            className="fixed top-0 left-0 right-0 bottom-0 p-2 flex items-center justify-center z-50 bg-black bg-opacity-20 backdrop-blur-sm transition-all duration-300"
            onClick={handleClose}
        >
            <div
                className="relative flex flex-col sm:flex-row bg-primary rounded-xl max-w-[350px] sm:max-w-none"
                onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
                style={{ maxHeight: "calc(100vh - 16px)", overflowY: "auto" }}
            >
                <div className={"relative"}>
                    <Image
                        className="w-full h-full object-cover"
                        src={painting.src} // No fallback for the image
                        alt={painting.alt || "Immagine non disponibile"}
                        width={600}
                        height={600}
                    />
                    {painting.sold && (
                        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 text-red-900 font-bold bg-primary bg-opacity-40 px-4 py-2 text-xl md:text-4xl">
                            VENDUTO
                        </p>
                    )}
                </div>
                <div className={"p-2 sm:p-4 md:p-6 lg:p-8"}>
                    <h2>{painting.title || "N/A"}</h2>
                    <p>{painting.description || "N/A"}</p>
                    <p>
                        Dimensioni:{" "}
                        {painting.dimensions && painting.dimensions.length === 3
                            ? `${painting.dimensions[0]?.width || "N/A"} x ${
                                painting.dimensions[1]?.height || "N/A"
                            } x ${painting.dimensions[2]?.depth || "N/A"} cm`
                            : "N/A"}
                    </p>
                    {!painting.sold && (
                        <div className={"mt-8"}>
                            <MyButton
                                link={`mailto:info@monicamariz.it?subject=${mailSubject}&body=${mailBody}`}
                                external={true}
                            >
                                Contattami
                            </MyButton>
                        </div>
                    )}
                </div>
                <CloseIcon
                    className="absolute top-4 right-4 p-1 w-7 h-7 text-secondary cursor-pointer bg-primary rounded-full bg-opacity-50"
                    onClick={handleClose}
                />
            </div>
        </div>
    );
};

export default PaintingModal;
