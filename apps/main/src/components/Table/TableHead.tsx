import { Column } from "./Table";

export type TableHeadProps = {
  columns: Column[];
};

export const TableHead = ({ columns }: TableHeadProps) => (
  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
    <tr>
      {columns?.map((column, index) => (
        <th key={`tableHeadCell${index}`} scope="col" className="px-6 py-3">
          {column?.label}
        </th>
      ))}
    </tr>
  </thead>
);
