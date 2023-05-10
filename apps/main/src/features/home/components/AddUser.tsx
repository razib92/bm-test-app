import { useState } from "react";
import { Button, Dialog } from "@/src/components";
import { FormUser } from "./FormUser";

export const AddUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeDialog = () => setIsOpen(false);

  return (
    <>
      <div className="w-full flex justify-end">
        <Button onClick={() => setIsOpen(true)}>Add user</Button>
      </div>

      <Dialog title="Add user" isOpen={isOpen} onClose={closeDialog}>
        <FormUser onClose={closeDialog} />
      </Dialog>
    </>
  );
};
