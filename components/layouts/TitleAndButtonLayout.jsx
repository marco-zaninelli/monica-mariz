import MyButton from "@/components/MyButton";
import MyHomeSection from "@/components/layouts/MyHomeSection";

export default function TitleAndButtonLayout ({children, title, buttonText, buttonLink}) {
    return (
        <MyHomeSection className={"w-full h-full my-4 md:my-16"}>
            <div className={"flex flex-col w-full px-4 md:px-8 lg:px-12 xl:px-20 mx-auto max-w-screen-2xl grow"}>
                <h2>{title}</h2>
                <div className={"flex-1 w-full"}>{children}</div>
                <div className={"w-full flex justify-end mt-4"}>
                    {buttonText && buttonLink && (
                        <MyButton link={buttonLink}>
                            {buttonText}
                        </MyButton>
                    )}
                </div>
            </div>
        </MyHomeSection>
    );
}