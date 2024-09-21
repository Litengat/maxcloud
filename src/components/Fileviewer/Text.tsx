"use client";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Textviewer({ fileUrl }: { fileUrl: string }) {
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("fetching file " + fileUrl);
    void fetch(fileUrl)
      .then((response) => response.text())
      .then((data) => setText(data));
  }, [fileUrl]);
  if (!text) return <p>Loading File...</p>;
  const lines = text.split("\n");
  return (
    <div className="h-full w-full">
      <Card className="p-2 pl-0">
        <ScrollArea className="h-[95vh]">
          {lines.map((line, index) => (
            <div key={index} className="flex">
              <div className="max-w-[30px] text-right">
                <p className="w-[30px] select-none text-gray-500">
                  {index + 1}
                </p>
              </div>
              <Separator className="mx-2 h-auto" orientation="vertical" />
              <p>{line}</p>
            </div>
          ))}
        </ScrollArea>
      </Card>
    </div>
  );
}
