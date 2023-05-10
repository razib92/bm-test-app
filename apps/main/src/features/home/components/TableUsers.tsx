import { Table } from "@/src/components";
import { formatDate } from "@/src/utils";
import { useColumnUsers, useGetUsersContext } from "../hooks";

export const TableUsers = () => {
  const columns = useColumnUsers();
  const { data } = useGetUsersContext();

  return (
    <Table
      columns={columns}
      data={data?.map((item) => ({
        ...item,
        createdAt: formatDate(item?.createdAt),
      }))}
    />
  );
};
