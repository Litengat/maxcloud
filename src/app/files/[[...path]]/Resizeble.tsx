"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import DisplayFolders from "./DisplayFolders";

export default function Resizable({
  defaultLayout = [20, 80],
  defaultTab = "grid",
}: {
  defaultLayout: number[] | undefined;
  defaultTab: string | undefined;
}) {
  const onLayout = (sizes: number[]) => {
    document.cookie = `files-resizable:layout=${JSON.stringify(sizes)};path=/`;
  };

  return (
    <main className="flex min-h-screen flex-col">
      <ResizablePanelGroup direction="horizontal" onLayout={onLayout}>
        <ResizablePanel defaultSize={defaultLayout[0]}>
          <div className="h-screen"></div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]}>
          <div className="h-screen">
            <DisplayFolders defaultTab={defaultTab} />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
