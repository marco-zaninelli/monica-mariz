import CasaIng from "@/public/img/homepage/Monica Mariz pubblicazione su rivista casa numero 17.webp";
import WeImg from "@/public/img/homepage/Monica Mariz pubblicasione  su ricista WE numero 2211.webp";
import OpenPdf from "@/components/homepage/OpenPdf";
import MyHomeSection from "@/components/layouts/MyHomeSection";

export default function ArticleS () {
    return (
        <MyHomeSection className={"flex"}>
            <div className={"mx-auto py-16 px-4 md:px-5 lg:px-10 xl:px-20 flex flex-col md:flex-row items-center gap-x-12 gap-y-4"}>
                <div>
                    <h2 className={"uppercase"}>pubblicazioni</h2>
                    <p>Scopri le mie pubblicazioni, dove i miei lavori sono stati presentati in riviste
                       iternazionali,
                       riflettendo il mio stile unico e il mio approccio creativo.</p>
                </div>
                <div className={"flex flex-row gap-x-4 sm:gap-x-6"}>
                    {/* TODO: Insert correct alt text */}
                    <OpenPdf imgSrc={CasaIng} imgAlt={''} url={"/pdf/17 CASA.pdf"} />
                    <OpenPdf imgSrc={WeImg} imgAlt={''} url={"/pdf/2211_WE_TRENTO.pdf"} />
                </div>
            </div>
        </MyHomeSection>
    );
}