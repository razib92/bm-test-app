import { Column } from "./Table";

export type TableRowProps = {
  columns: Column[];
  rowData: any;
};

export const TableRow = ({ columns, rowData }: TableRowProps) => (
  <tr className="bg-white border-b">
    {columns?.map((column, index) => (
      <td key={`tableRowCell${index}`} className="px-6 py-4">
        {rowData?.[column?.accessor] || "-"}
      </td>
    ))}
  </tr>
);
