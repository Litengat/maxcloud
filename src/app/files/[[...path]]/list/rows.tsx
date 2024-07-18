import { FileData } from "@/types/File";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import PathDisplay from "../pathdisplay";

export default function Rows({ data }: { data: FileData[] }) {
  return (
    <>
      <div className="pl-2 pb-2">
        <PathDisplay />
      </div>
      <DataTable columns={columns} data={data} />
    </>
  );
}
