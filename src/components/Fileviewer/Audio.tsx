export default function Audioviewer({ fileUrl }: { fileUrl: string }) {
  return (
    <div className="h-full w-full">
      <audio src={fileUrl} controls>
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
}
