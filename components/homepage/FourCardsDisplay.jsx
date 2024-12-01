import React from "react";

export default function FourCardsDisplay ({children}) {
    return (
        <div
            className={`w-full h-full flex flex-row flex-wrap items-center justify-center sm:flex-nowrap mx-auto max-w-screen-2xl gap-y-4 gap-x-0 sm:gap-x-4 lg:gap-x-6 xl:gap-x-8 my-16 md:my-20`}>
            {React.Children.map(children, (child, index) => (
                <div className={`w-1/2 sm:w-full  ${index % 2 === 0 ? "pr-2 sm:pr-0 translate-y-16" : "pl-2 sm:pl-0 -translate-y-16"}`}>
                    {child}
                </div>
            ))}
        </div>
    );
}
