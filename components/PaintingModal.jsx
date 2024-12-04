import React, {useEffect, useState} from "react";
import sanityClient from "@/lib/sanityClient";
import {GET_PAINTING_DATA} from "@/lib/queries";
import CloseIcon from "@/icons/CloseIcon";
import MyButton from "@/components/MyButton";
import Image from "next/image";

const PaintingModal = ({painting, onClose}) => {
    const [paintingDetails, setPaintingDetails] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [mailBody, setMailBody] = useState("");

    useEffect(() => {
        if (painting) {
            sanityClient.fetch(GET_PAINTING_DATA, {slug: painting.slug.current})
                .then(data => {
                    setPaintingDetails(data);
                    setIsVisible(true);
                    const body = encodeURIComponent(
                        `--\nTitolo: ${data.title}\n` +
                        `Immagine: ${data.image}\n` +
                        `Dimensioni: ${data.dimensions.width} x ${data.dimensions.height} x ${data.dimensions.depth} cm\n`
                    );
                    setMailBody(body);
                })
                .catch(console.error);
        }
    }, [painting]);

    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isVisible]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 700);
    };

    if (!painting) {
        return null;
    }

    const mailSubject = encodeURIComponent("Interesse nell'acquisto di un quadro");

    return (
        <div
            className={`fixed top-0 left-0 right-0 bottom-0 p-2 flex items-center justify-center z-50 bg-black bg-opacity-20 backdrop-blur-sm transition-all duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
            onClick={handleClose}>
            <div
                className="relative flex flex-col sm:flex-row bg-primary rounded-xl max-w-[350px] sm:max-w-none"
                onClick={e => e.stopPropagation()}
                style={{maxHeight: "calc(100vh - 16px)", overflowY: "auto"}}>
                {paintingDetails ? (
                    <>
                        <div className={"relative"}>
                            <Image
                                className="w-full h-full object-cover"
                                src={paintingDetails.image}
                                alt={paintingDetails.originalFilename || paintingDetails.title}
                                width={600}
                                height={600}
                            />
                            {paintingDetails.sold && (
                                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-45 text-red-900 font-bold bg-primary bg-opacity-40 px-4 py-2 text-xl md:text-4xl">
                                    VENDUTO
                                </p>
                            )}
                        </div>
                        <div className={"p-2 sm:p-4 md:p-6 lg:p-8"}>
                            <h2>{paintingDetails.title}</h2>
                            <p>{paintingDetails.description}</p>
                            <p>
                                Dimensioni: {paintingDetails.dimensions.width} x {paintingDetails.dimensions.height} x {paintingDetails.dimensions.depth} cm
                            </p>
                            <p>
                                {!paintingDetails.sold &&
                                    <div className={"mt-8"}>
                                        <MyButton
                                            link={`mailto:info@monicamariz.it?subject=${mailSubject}&body=${mailBody}`}
                                            external={true}>
                                            Contattami
                                        </MyButton>
                                    </div>
                                }
                            </p>
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
                <CloseIcon
                    className="absolute top-4 right-4 p-1 w-7 h-7 text-secondary cursor-pointer bg-primary rounded-full bg-opacity-50"
                    onClick={handleClose}
                />
            </div>
        </div>
    );
};

export default PaintingModal;
