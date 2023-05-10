import { Column } from "@/src/components";

export const useColumnUsers = () => {
  const columns: Column[] = [
    { accessor: "id", label: "Id" },
    { accessor: "email", label: "Email" },
    { accessor: "username", label: "Username" },
    { accessor: "createdAt", label: "Created At" },
  ];

  return columns;
};
