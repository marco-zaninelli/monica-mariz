export default function GoalElement({index, title, children}) {
    return (
        <div className={"flex flex-row items-center gap-x-4 xl:gap-x-6 px-2"}>
            <p className={"flex-shrink-0 flex justify-center items-center text-xl w-10 h-10 md:text-2xl md:w-14 md:h-14 lg:text-3xl lg:w-16 lg:h-16 xl:text-4xl xl:w-20 xl:h-20 border-secondary border-2 rounded-full"}>{index}</p>
            <div>
                <h4 className={"font-bold mb-0"}>{title}</h4>
                <p className={'mt-0'}>{children}</p>
            </div>
        </div>
    );
};