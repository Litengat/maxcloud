"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
const ExcalidrawPrimitive = dynamic(
  async () => (await import("@excalidraw/excalidraw")).Excalidraw,
  {
    ssr: false,
  },
);
import { Theme } from "@excalidraw/excalidraw/types/element/types";

import { useColorScheme } from "@/lib/useColorScheme";

export default function Excalidraw() {
  const { theme } = useColorScheme();
  const [excalidrawAPI, setExcalidrawAPI] = useState(null);

  return (
    <div className="relative h-[calc(100svh-72px)] overflow-hidden">
      <ExcalidrawPrimitive
        initialData={{
          appState: {
            viewBackgroundColor: "#0000",
            currentItemFontFamily: 1,
          },
        }}
        theme={theme as Theme}
      />
    </div>
  );
}
