import SOCIAL_LINKS from "@/components/navigation/SOCIAL_LINKS";
import FooterLink from "@/components/navigation/FooterLink";
import MyButton from "@/components/MyButton";

const FooterComponent = () => {
    return (
        <footer className="bg-secondary text-primary w-screen overflow-hidden mx-auto flex flex-col items-center pt-6 pb-2 px-6">

            <div className={"w-full flex flex-col md:flex-row max-w-screen-xl items-start md:justify-between"}>

                <div className="flex flex-col items-start">
                    <div>
                        <h2 className="text-2xl md:text-3xl uppercase font-bold m-0 text-primary">Monica Mariz</h2>
                        <p className="text-sm md:text-md lg:text-lg uppercase m-0 text-primary">Design</p>
                    </div>
                    <p className={"text-primary md:max-w-96 mt-4 mb-2"}>
                        Ogni Visione Merita di Prendere Forma: Collaboriamo per Trasformare le Tue Idee in Realtà Durature.
                    </p>
                    <div className={"mt-4"} id={"contatti"}>
                        <MyButton external={true} link={"mailto:info@monicamariz.it"} reverse={true}>info@monicamariz.it</MyButton>
                    </div>
                </div>

                <div className={"w-full md:w-auto mt-10 justify-between  md:mx-0 md:mt-0 flex flex-row gap-x-2 md:gap-x-5 lg:gap-x-10 xl:gap-x-20"}>
                    {/* Website Links Column*/}
                    <div className={"flex flex-col items-start"}>
                        <h4 className={"text-primary font-bold"}>Pagine</h4>
                        <FooterLink link={"/"}>Homepage</FooterLink>
                        <FooterLink link={"/progetti"}>Progetti</FooterLink>
                        {/*<FooterLink link={"/chi-sono"}>Chi Sono</FooterLink>*/}
                        <FooterLink link={"/quadri"}>Quadri</FooterLink>
                    </div>

                    {/* Social Column*/}
                    <div className={"flex flex-col items-start"}>
                        <h4 className={"text-primary font-bold"}>Social</h4>
                        <FooterLink external={true} link={SOCIAL_LINKS.instagram}>Instagram</FooterLink>
                        <FooterLink external={true} link={SOCIAL_LINKS.whatsApp}>WhatsApp</FooterLink>
                        <FooterLink external={true} link={SOCIAL_LINKS.facebook}>Facebook</FooterLink>
                    </div>

                    {/* Legal Column*/}
                    <div className={"flex flex-col items-start"}>
                        <h4 className={"text-primary font-bold"}>Legale</h4>
                        <FooterLink external={true} link={"https://www.iubenda.com/privacy-policy/23696926"}>Privacy Policy</FooterLink>
                        <FooterLink external={true} link={"https://www.iubenda.com/privacy-policy/23696926/cookie-policy"}>Cookie Policy</FooterLink>
                        <p className={"text-primary my-1 mx-0"}>P.IVA: IT02519770222</p>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className={"w-full flex flex-row items-center justify-between max-w-screen-xl"}>
                <p className="text-primary text-xs md:text-sm mt-6 mb-0">©2024 Monica Mariz - All rights reserved</p>
                <p className="text-primary text-xs md:text-sm mt-6 mb-0 text-right">created by <a
                    className={"text-inherit hover:text-inherit"}
                    href="https://marco.zaninelli.me"
                    target="_blank"
                    rel="noopener noreferrer"
                >Marco Zaninelli</a>
                </p>
            </div>
        </footer>);
};

export default FooterComponent;
