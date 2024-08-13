import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileType, type getDirResponse } from "@/types/File";
import Rows from "./list/rows";
import Grid from "./grid/grid";
import { LayoutGrid, List, ListCollapse } from "lucide-react";
import { getFolder } from "@/server/file";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import FileViewer from "@/components/Fileviewer";

export default function DisplayFolders({ defaultTab }: { defaultTab: string }) {
  const params = useParams<{ path: string[] }>();
  const path = params.path ? params.path.join("/") : ".";

  const [data, setData] = useState<getDirResponse>({
    FileType: FileType.Folder,
    Files: [],
  });
  const [loading, setIsloading] = useState(false);
  useEffect(() => {
    void getFolder(path).then(setData);
    setIsloading(true);
  }, [path]);
  const onValueChange = (value: string) => {
    document.cookie = `files-displayTab:Value=${value};path=/`;
  };

  if (loading) {
    if (data.FileType === FileType.File) {
      return <FileViewer path={path} />;
    }
  }
  const folsers = data.Files || [];

  return (
    <>
      <Tabs
        defaultValue={defaultTab}
        onValueChange={onValueChange}
        className="p-2"
      >
        <TabsList>
          <TabsTrigger value="grid">
            <LayoutGrid />
          </TabsTrigger>
          <TabsTrigger value="list">
            <List />
          </TabsTrigger>
          <TabsTrigger value="tree">
            <ListCollapse />
          </TabsTrigger>
        </TabsList>
        <div className="pt-2">
          <Separator></Separator>
        </div>
        <TabsContent value="grid">
          <Grid data={folsers} />
        </TabsContent>
        <TabsContent value="list">
          <Rows data={folsers} />
        </TabsContent>
        <TabsContent value="tree">
          Change your password here.
          <FileViewer path="/Users/litengut/test.txt" />
        </TabsContent>
      </Tabs>
    </>
  );
}
