import {useRouter} from "next/router";

export default function PdfPage () {
    const router = useRouter();
    const {pdfFile} = router.query;

    return (
        <main>
            {pdfFile ? (
                <iframe
                    src={pdfFile}
                    width="100%"
                    height="1000px"
                    title="PDF Viewer"
                />
            ) : (
                <p>No PDF available</p>
            )}
        </main>
    );
}