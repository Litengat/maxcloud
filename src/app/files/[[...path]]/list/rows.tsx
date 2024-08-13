import type { FileData } from "@/types/File";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import PathDisplay from "../pathdisplay";

export default function Rows({ data }: { data: FileData[] }) {
  return (
    <>
      <div className="pb-2 pl-2">
        <PathDisplay />
      </div>
      <DataTable columns={columns} data={data} />
    </>
  );
}
