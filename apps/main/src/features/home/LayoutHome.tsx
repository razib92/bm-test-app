import { Template } from "@/src/components";
import { AddUser, TableUsers } from "./components";
import { UsersContextProvider } from "./hooks";

export const LayoutHome = () => {
  return (
    <Template title="BancoMail Test App">
      <div className="flex flex-col gap-5">
        <UsersContextProvider>
          <AddUser />
          <TableUsers />
        </UsersContextProvider>
      </div>
    </Template>
  );
};
