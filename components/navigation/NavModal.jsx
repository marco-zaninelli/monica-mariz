import CloseIcon from "@/icons/CloseIcon";
import React, {useEffect} from "react";
import Link from "next/link";
import SOCIAL_LINKS from "@/components/navigation/SOCIAL_LINKS";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

export default function NavModal ({isOpen, toggleModal, navLinks, pathName}) {
    // Disable scrolling
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Prevent click propagation when interacting with modal content
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            {/* Background Blur */}
            <div
                className={`fixed z-50 left-0 top-0 overflow-hidden w-screen h-screen bg-black bg-opacity-20 transition duration-700 backdrop-blur-sm ease-in-out`}
                style={{
                    visibility: isOpen ? "visible" : "hidden",
                    opacity: isOpen ? 1 : 0
                }}
                onClick={toggleModal}
            />

            {/* Menu Sidebar */}
            <div
                className={`z-50 fixed top-0 left-0 h-full w-screen max-w-[400px] bg-primary transform transition-all duration-700 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
                onClick={stopPropagation}
            >
                <CloseIcon
                    className="absolute top-4 right-4 p-1 w-7 h-7 text-secondary cursor-pointer"
                    onClick={toggleModal}
                />
                <div className={"h-full p-20 flex flex-col justify-between"}>
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.to}
                                className={`py-1 px-2 text-2xl ${pathName === link.to ? "font-bold" : "font-medium"}`}
                                onClick={toggleModal}
                            >
                                {link.text}
                            </Link>
                        ))}
                    </div>
                    <div>
                        <div className={"border-t-2 border-secondary"} />
                        <div className={"flex flex-row gap-x-4 justify-center max-w-full mt-4"}>
                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
                                <div className={'w-7'}>
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </div>
                            </a>
                            <a href={SOCIAL_LINKS.whatsApp} target="_blank" rel="noopener noreferrer">
                                <div className={'w-7'}>
                                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                                </div>
                            </a>
                            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer">
                                <div className={'w-7'}>
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
