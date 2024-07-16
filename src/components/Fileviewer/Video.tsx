



export default function Videoviewer({ fileUrl }: { fileUrl: string }) {
    return (
        <div className="w-full h-full">
            <video src={fileUrl} controls>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}