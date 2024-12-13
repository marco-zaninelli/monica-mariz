import Image from "next/image";
import MyButton from "@/components/MyButton";

export default function OpenPdf ({imgSrc, imgAlt, url}) {
    return (
        <div className="max-w-80 flex flex-col">
            <Image src={imgSrc} alt={imgAlt} className={'rounded-xl'} width={400} height={600} />
                <MyButton link={url} className={'mt-4 w-full text-center'} external={true}>
                    Apri PDF
                </MyButton>
        </div>
    );
};