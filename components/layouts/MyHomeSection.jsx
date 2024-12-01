export default function MyHomeSection ({children, className, style}) {
    return (
        <section className={`relative h-auto w-screen ${className}`} style={style}>
            {children}
        </section>
    );
}