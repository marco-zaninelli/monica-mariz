import React, {useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import MenuIcon from "@/icons/MenuIcon";
import NavModal from "@/components/navigation/NavModal";

const Logo = () => (
    <Image src="/logo192.png" alt="website logo" width={60} height={60} />
);

const navLinks = [
    {to: "/", text: "Home"},
    {to: "/progetti", text: "Progetti"},
    // {to: "/chi-sono", text: "Chi sono"},
    {to: "/quadri", text: "Quadri"},
    {to: "#contatti", text: "Contatti"}
];

// Sets scrollbar height and toggle scroll height
const navBarHeight = 64;

export default function NavBar () {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);

    const router = useRouter();

    // Hide Navigation on scroll
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > navBarHeight) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }

        if (currentScrollY > lastScrollY && currentScrollY > navBarHeight) {
            setShowNavbar(false);
        } else if (currentScrollY < lastScrollY) {
            setShowNavbar(true);
        }

        setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div
            className={`fixed top-0 left-0 w-screen z-30 flex items-center justify-center bg-primary transition-all duration-300`}
            style={{
                top: showNavbar ? "0" : `-${navBarHeight}px`,
                height: `${navBarHeight}px`
            }}
        >
            <div className="flex max-w-screen-2xl w-full mx-auto items-center justify-between whitespace-nowrap px-4">
                <Link href="/">
                    <h1 className={"text-3xl font-heading font-bold"}>MM</h1>
                    {/*<Logo />*/}
                </Link>

                <MenuIcon className={"md:hidden p-1 w-9 h-9 text-secondary cursor-pointer"} onClick={toggleModal} />
                <NavModal isOpen={showModal} toggleModal={toggleModal} navLinks={navLinks} pathName={router.pathname} />

                <nav className="hidden md:flex justify-end p-0 capitalize text-base">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.to}
                            className={`mx-2.5 my-0 px-4 py-1 font-medium rounded-full border border-transparent transition-all duration-300 ${
                                router.pathname === link.to
                                    ? "bg-secondary text-primary hover:text-primary"
                                    : "hover:border-secondary "
                            }`}
                        >
                            {link.text}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}