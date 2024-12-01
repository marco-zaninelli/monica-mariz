import Link from "next/link";

export default function FooterLink ({external = false, link, children}) {
    if (external) {
        return (
            <a href={link}
               target="_blank"
               rel="noopener noreferrer">
                <p className={"inline-block text-primary duration-300 ease-in-out border-b hover:border-primary border-secondary m-0 my-1"}>{children}</p>
            </a>
        );
    } else {
        return (
            <Link href={link}>
                <p className={"inline-block text-primary duration-300 ease-in-out border-b hover:border-primary border-secondary mx-0 my-1"}>{children}</p>
            </Link>
        )
    }
}