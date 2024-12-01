import Image from "next/image";
import MyButton from "@/components/MyButton";

export default function OpenPdf ({imgSrc, imgAlt, url}) {
    return (
        <div className="max-w-80 flex flex-col">
            <Image src={imgSrc} alt={imgAlt} layout="intrinsic" className={'rounded-xl'} />
                <MyButton link={url} className={'mt-4 w-full text-center'} external={true}>
                    Apri PDF
                </MyButton>
        </div>
    );
};