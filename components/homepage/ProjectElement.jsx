import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function ProjectElement({ imgSrc, imgAlt, heading, link, onClick, className }) {
    const [hover, setHover] = useState(false);

    const content = (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className={'group block w-full max-w-full overflow-hidden rounded-xl '}>
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    className="w-full h-full object-cover rounded-xl transition-all duration-300 ease-in-out"
                    width={400}
                    height={600}
                    style={{
                        transform: hover ? "scale(1.1)" : "scale(1)"
                }}
                />
            </div>
            <h4 className={'mx-auto text-center'}>{heading}</h4>
        </div>
    );

    const containerStyle = `flex flex-1 flex-col items-start cursor-pointer ${className || ""}`;

    return link ? (
        <Link href={link} className={containerStyle}>
            {content}
        </Link>
    ) : (
        <div onClick={onClick} className={containerStyle}>
            {content}
        </div>
    );
}
