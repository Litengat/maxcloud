


export default function Pdfviewer({ fileUrl }: { fileUrl: string }) {
    return (
        <div className="w-full h-full">
            <iframe src={fileUrl} width="100%" height="100%" />
        </div>
    )
}