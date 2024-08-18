/* eslint-disable jsx-a11y/alt-text */
import Image from "./Image";
import Video from "./Video";
import Audio from "./Audio";
import Text from "./Text";
import Pdf from "./Pdf";

import { getFileURL } from "@/server/file";
import { useState, useEffect } from "react";

export default function FileViewer({ path }: { path: string }) {
  const extension = path.split(".").reverse()[0];
  const [fileUrl, setFileUrl] = useState("");
  useEffect(() => {
    void getFileURL(path).then(setFileUrl);
  }, [path]);
  if (!fileUrl) return <p>Loading URL...</p>;

  switch (extension) {
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "bmp":
    case "svg":
      return <Image fileUrl={fileUrl} />;
    case "mp4":
    case "webm":
    case "mkv":
      return <Video fileUrl={fileUrl} />;
    case "mp3":
    case "wav":
    case "ogg":
      return <Audio fileUrl={fileUrl} />;
    case "pdf":
      return <Pdf fileUrl={fileUrl} />;
    case "txt":
    case "md":
    default:
      return <Text fileUrl={fileUrl} />;
  }
}
