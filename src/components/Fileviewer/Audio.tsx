

export default function Audioviewer({ fileUrl }: { fileUrl: string }) {

    return (
        <div className="w-full h-full">
            <audio src={fileUrl} controls>
                Your browser does not support the audio tag.
            </audio>
        </div>
    )
}