import Link from "next/link";

export default function MyButton ({children = "Test", link = "#", onClick, external = false, className, reverse = false}) {
    // Common styles for all button types
    const baseStyles = `py-2 px-6 border rounded-full transition duration-300 ${className} ${reverse ? "border-primary bg-primary text-primary text-secondary hover:bg-transparent hover:text-primary hover:border-primary" : "border-secondary hover:bg-secondary text-secondary hover:text-primary"}`;

    // Inner content (text)
    const content = (
        <span className="text-inherit text-center text-sm md:text-base lg:text-lg whitespace-nowrap">
            {children}
        </span>
    );

    // OnClick handling
    if (onClick) {
        return (
            <button onClick={onClick} className={baseStyles}>
                {content}
            </button>
        );
    }

    // External link handling
    if (external) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className={baseStyles}>
                {content}
            </a>
        );
    }

    // Internal link handling
    return (
        <Link href={link} className={baseStyles}>
            {content}
        </Link>
    );
}