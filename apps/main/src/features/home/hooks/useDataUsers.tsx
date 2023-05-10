import React, { useState, createContext, useContext, useEffect } from "react";
import { FunctionComponentEx } from "@/src/types";
import { getBasicAuthorization } from "@/src/utils";

export type UserContextProps = {
  data?: any[];
  loading?: boolean;
  refetch?: () => void;
};

const UsersContext = createContext<UserContextProps>({});

export const UsersContextProvider: FunctionComponentEx<{}> = ({ children }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const refetch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: getBasicAuthorization(),
          },
        }
      );
      const resp = await response?.json();
      setData(resp);
    } catch (error: any) {
      console.error("Fetch failed!", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <UsersContext.Provider value={{ data, loading, refetch }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useGetUsersContext = () => useContext(UsersContext);
