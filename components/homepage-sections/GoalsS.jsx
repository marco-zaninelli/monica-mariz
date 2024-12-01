import MyHomeSection from "@/components/layouts/MyHomeSection";
import Image from "next/image";
import GoalsImageLg from "@/public/img/homepage/Monica Mariz immagine copertina durante la creazione di un muro.jpg";
import GoalsImageSm from "@/public/img/homepage/Monica-Mariz-servizi-fotografia-telecamera-in-mano-con-persona-sullo-sfondo.jpg";
import GoalElement from "@/components/homepage/GoalElement";
import MyButton from "@/components/MyButton";

export default function GoalsS () {
    return (
        <MyHomeSection className={"flex mx-auto py-20 max-w-screen-xl gap-y-4"}>
            <div className={"mx-auto px-4"}>
                <h2>SCOPO</h2>
                <div className="flex flex-col md:flex-row m-auto gap-10">
                    <div>
                        {/* TODO: Change image and alt text */}
                        <Image src={GoalsImageSm} alt={"logo"} className={'block md:hidden object-cover w-full h-32 rounded-xl'}/>
                        {/* TODO: Change image and alt text */}
                        <Image src={GoalsImageLg} alt="Some Alt Text here" className="hidden md:block object-cover w-64 h-full rounded-xl" />
                    </div>
                    <div className="flex flex-col gap-3 self-center">
                        <GoalElement index={1} title="L'obbiettivo">
                            Migliorare la qualità della vita creando ambienti armoniosi ed esteticamente
                            piacevoli
                            che rispecchino lo stile di vita e le aspirazioni individuali.
                        </GoalElement>
                        <GoalElement index={2} title="La passione">
                            Unendo una profonda passione per l'arte, innovative tecniche di design e uno sguardo
                            meticoloso per i dettagli, questa professionista crea interni unici che riflettono
                            la
                            personalità dei clienti.
                        </GoalElement>
                        <GoalElement index={3} title="I valori">
                            Impegnata nella consegna dell'eccellenza del design, la persona valorizza la
                            creatività,
                            l'integrità e un approccio centrato sul cliente, assicurando che ogni progetto sia
                            un'esperienza personalizzata e gratificante.
                        </GoalElement>
                        <GoalElement index={4} title="L'impatto">
                            Attraverso le loro competenze multifunzionali in interior design, home staging,
                            decorazione e fotografia, l'obiettivo è lasciare un duraturo impatto positivo sulla
                            vita
                            dei clienti, trasformando gli spazi in luoghi amati e ispiratori.
                        </GoalElement>
                    </div>
                </div>
                <div className={'w-full flex justify-end mt-4'}>
                    <MyButton link={'/chi-sono'}>
                        La mia storia
                    </MyButton>
                </div>
            </div>
        </MyHomeSection>
    );
}