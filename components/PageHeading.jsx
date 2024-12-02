export default function PageHeading ({heading, description, topSpacer = true}) {
    return (
        <div className="my-28 mx-auto flex flex-col items-center">
            {topSpacer && <div className="h-16"></div>}
            <h1>{heading}</h1>
            <p className="text-center px-2 md:px-4 m-0">{description}</p>
        </div>
    );
}
