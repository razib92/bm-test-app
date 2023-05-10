import { ReactNode } from "react";
import { TableHead } from "./TableHead";
import { TableRow } from "./TableRow";

export type Column = {
  accessor: string;
  label: ReactNode;
};

export type TableProps = {
  columns: Column[];
  data?: any[];
};

export const Table = ({ columns, data = [] }: TableProps) => (
  <div className="relative overflow-x-auto bg-white">
    <table className="w-full text-sm text-left text-gray-500">
      <TableHead columns={columns} />
      <tbody>
        {data?.length > 0 &&
          data?.map((item, index) => (
            <TableRow
              key={`tableRow${index}`}
              columns={columns}
              rowData={item}
            />
          ))}
      </tbody>
    </table>
    {data?.length === 0 && (
      <div className="text-center p-2">No records found</div>
    )}
  </div>
);
