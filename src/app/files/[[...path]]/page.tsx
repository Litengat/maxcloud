import { cookies } from "next/headers";
import Resizable from "./Resizeble";

export default function FilesPage({ params }: { params: { slug: string } }) {
  const layout = cookies().get("files-resizable:layout");
  const tab = cookies().get("files-displayTab:Value");
  let defaultLayout;
  let defaultTab;
  if (layout) {
    defaultLayout = JSON.parse(layout.value);
  }
  if (tab) {
    defaultTab = tab.value;
  }
  return (
    <Resizable
      defaultLayout={defaultLayout}
      defaultTab={defaultTab}
    ></Resizable>
  );
}
