import Image from "next/image";

export default function ServiceElement ({className, imgSrc, imgAlt, heading, children}) {
    return (
        <div className={className}>
            <Image src={imgSrc} alt={imgAlt} className="block w-full max-w-full object-cover mb-4 rounded-xl" width={400} height={400} />
            <h4 className={"p-0 font-bold"}>{heading}</h4>
            <p>{children}</p>
        </div>
    );
}