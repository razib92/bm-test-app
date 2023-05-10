import { useState } from "react";
import { getBasicAuthorization } from "@/src/utils";
import { UserForm } from "../components";

export const useSaveUser = () => {
  const [loading, setLoading] = useState(false);

  const save = async (data: UserForm) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: getBasicAuthorization(),
          },
          body: JSON.stringify(data),
        }
      );
      return await response?.json();
    } catch (error: any) {
      console.error("Failed to save user!", error);
    } finally {
      setLoading(false);
    }
  };

  return { save, loading };
};
