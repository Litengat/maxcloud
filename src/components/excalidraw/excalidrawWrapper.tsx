"use client";
import { Excalidraw } from "@excalidraw/excalidraw";
import type { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";
import { useState } from "react";

export default function ExcalidrawWrapper() {
  const [excalidrawAPI, setExcalidrawAPI] = useState<ExcalidrawImperativeAPI>();
  const updateScene = () => {
    if (!excalidrawAPI) return;
    excalidrawAPI.updateScene({
      elements: [
        {
          type: "rectangle",
          version: 141,
          frameId: "1",
          versionNonce: 361174001,
          isDeleted: false,
          id: "oDVXy8D6rom3H1-LLH2-f",
          fillStyle: "hachure",
          strokeWidth: 1,
          strokeStyle: "solid",
          roughness: 1,
          opacity: 100,
          angle: 0,
          x: 100.50390625,
          y: 93.67578125,
          strokeColor: "#c92a2a",
          backgroundColor: "transparent",
          width: 186.47265625,
          height: 141.9765625,
          seed: 1968410350,
          groupIds: [],
          boundElements: null,
          locked: false,
          link: null,
          updated: 1,
          roundness: {
            type: 3,
            value: 32,
          },
        },
      ],
      appState: {
        viewBackgroundColor: "#edf2ff",
      },
    });
  };
  return (
    <div style={{ height: "500px" }}>
      <p style={{ fontSize: "16px" }}> Click to update the scene</p>
      <button className="custom-button" onClick={updateScene}>
        Update Scene
      </button>
      <Excalidraw
        initialData={{
          elements: [
            {
              type: "rectangle",
              version: 141,
              frameId: "1",
              versionNonce: 361174001,
              isDeleted: false,
              id: "oDVXy8D6rom3H1-LLH2-f",
              fillStyle: "hachure",
              strokeWidth: 1,
              strokeStyle: "solid",
              roughness: 1,
              opacity: 100,
              angle: 0,
              x: 100.50390625,
              y: 93.67578125,
              strokeColor: "#c92a2a",
              backgroundColor: "transparent",
              width: 186.47265625,
              height: 141.9765625,
              seed: 1968410350,
              groupIds: [],
              boundElements: null,
              locked: false,
              link: null,
              updated: 1,
              roundness: {
                type: 3,
                value: 32,
              },
            },
          ],
          appState: {
            viewBackgroundColor: "#edf2ff",
          },
        }}
        excalidrawAPI={(api) => setExcalidrawAPI(api)}
      />
    </div>
  );
}
