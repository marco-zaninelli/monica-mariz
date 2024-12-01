import FourCardsDisplay from "@/components/homepage/FourCardsDisplay";
import TitleAndButtonLayout from "@/components/layouts/TitleAndButtonLayout";
import ServiceElement from "@/components/homepage/ServiceElement";

import StudioInterni from "@/public/img/homepage/Monica-Mariz-matita-su-disegni-pianta-appartamento-immagine-da-unsplash.jpg";
import Allestimenti from "@/public/img/homepage/Monica-Mariz-servizio-allestimenti.jpg";
import ArteDecorazioni from "@/public/img/homepage/Monica-Mariz-servizi-arte-e-decorazioni-quadro-diabolik.jpg";
import Fotografia from "@/public/img/homepage/Monica-Mariz-servizi-fotografia-telecamera-in-mano-con-persona-sullo-sfondo.jpg";

const services = [
    {
        title: "Studio di Interni",
        // TODO: Correct image and alt text
        img: StudioInterni,
        alt: "",
        description: "Studio degli spazi interni ed esterni, scelta dei materiali di finitura e degli accessori,distribuzione degli arredi, studio dell’illuminazione e selezione di ogni singolo elemento d’arredo per ogni stanza."
    },
    {
        title: "Allestimenti",
        // TODO: Correct image and alt text
        img: Allestimenti,
        alt: '',
        description: "Servizio di allestimenti e scenografie \"decor table\" per shooting fotografici, eventi, vetrine, locali privati e pubblici. Servizio di home staging per agenzie immobiliari e privati."
    },
    {
        title: 'Arte e Decorazioni',
        // TODO: Correct image and alt text
        img: ArteDecorazioni,
        alt: '',
        description: "La mia arte: amo mescolare colori a olio con materia su tela, sperimentando tecniche con sabbia, carta, e oggetti trovati durante viaggi. Affino la decorazione d'interni, creando pareti particolari e personalizzate.",
    },
    {
        title: "Fotografia",
        // TODO: Correct image and alt text
        img: Fotografia,
        alt:'',
        description: "La fotografia, oltre che passione, è parte fondamentale del mio lavoro. Decorare eprogettare arredi per spazi privati o espositivi richiede un servizio fotografico di qualità e attenta post-produzione di ogni scatto.",
    }
];

export default function ServiceS () {
    return (
        <TitleAndButtonLayout title={"ULTIMI PROGETTI"}>
            <FourCardsDisplay>
                {services.map((service, index) => (
                    <ServiceElement
                        key={index} // since service.id is not defined in your services array, using index as the key
                        heading={service.title}
                        imgSrc={service.img} // corrected property name
                        imgAlt={service.alt}
                    >
                        {service.description}
                    </ServiceElement>
                ))}
            </FourCardsDisplay>
        </TitleAndButtonLayout>


    );
}