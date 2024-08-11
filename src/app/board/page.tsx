import Excalidraw from "@/components/excalidraw";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <Suspense>
        <Excalidraw></Excalidraw>
      </Suspense>
    </>
  );
}
