import MyHomeSection from "@/components/layouts/MyHomeSection";
import Image from "next/image";
import HeroImage from "@/public/img/homepage/Monica Mariz immagine copertina durante la creazione di un muro.jpg";
import MyButton from "@/components/MyButton";

export default function HeroS () {
    return (
        <MyHomeSection className={"max-w-screen-[1920px] min-h-[700px]"} style={{height:'calc(100vh - 4rem)'}}>
            <div className={"h-full flex flex-row mt-16"}>

                {/* Side items */}
                <div className={"h-full hidden sm:block relative p-6 lg:p-8"}>
                    <div
                        className={"absolute h-12 lg:h-16 min-w-[600px] w-[calc(100vh-8rem)] flex flex-row-reverse justify-evenly items-center origin-top-right -rotate-90 z-50 -translate-x-[calc(100%+1.5rem)] lg:-translate-x-[calc(100%+2rem)] -translate-y-[2rem] text-base text-nowrap"}>
                        <p>Interior Design</p>
                        <p>Fotografia</p>
                        <p>Arte</p>
                    </div>
                </div>

                <div className={"mx-4 sm:mx-0 flex flex-col sm:flex-row mb-16"}>
                    {/* Hero Image */}
                    <div className={"w-full h-full"}>
                        <Image
                            /* TODO: Replace Image and alt Text */
                            src={HeroImage}
                            alt={"Hero Image"}
                            className={"rounded-xl w-full h-full shadow-lg object-cover"}
                        />
                    </div>

                    {/* Hero Text */}
                    <div
                        className={"p-3 sm:p-6 md:p-10 mt-2 md:mt-0 w-full sm:w-[400px] md:w-[500px] lg:w-[650px] xl:w-[800px] 2xl:w-[1000px] flex flex-col justify-center"}>
                        <div className="flex flex-row sm:block">
                            <h1 className={"uppercase text-wrap m-0 flex-1"}>Monica<br />Mariz</h1>
                            <div className={"flex flex-col items-end sm:hidden gap-1 justify-center"}>
                                <p className={"m-0 text-right"}>Interior Design</p>
                                <p className={"m-0 text-right"}>Fotografia</p>
                                <p className={"m-0 text-right"}>Arte</p>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className={"mt-5"}>
                            <MyButton link={'mailto:info@monicamariz.it?subject=Richiesta%20appuntamento%20per%20un%20lavoro&body=Provvedere%20informazioni%20sul%20progetto%20e%20informazioni%20di%20contatto%20per%20prenotare%20un%20appuntamento.%20Grazie.'}>
                                Parliamo del tuo progetto
                            </MyButton>
                        </div>
                    </div>
                </div>
            </div>
        </MyHomeSection>
    );
}