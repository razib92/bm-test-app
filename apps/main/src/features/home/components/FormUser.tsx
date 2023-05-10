import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input } from "@/src/components";
import { useGetUsersContext, useSaveUser } from "../hooks";

export type FormUserProps = {
  onClose?: () => void;
};

export type UserForm = {
  email: string;
  username: string;
  password: string;
};

export const FormUser = ({ onClose }: FormUserProps) => {
  const { register, formState, handleSubmit } = useForm<UserForm>();
  const { errors: formErrors } = formState;
  const { refetch } = useGetUsersContext();
  const { save, loading } = useSaveUser();

  const onSubmit: SubmitHandler<UserForm> = async (data) => {
    const response = await save(data);
    if (response?.success) {
      onClose?.();
      refetch?.();
    } else {
      console.error("Failed to save user!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3">
        <Input
          type="email"
          label="Email"
          disabled={loading}
          error={formErrors?.email}
          inputProps={register("email", { required: true })}
        />

        <Input
          type="text"
          label="Username"
          disabled={loading}
          error={formErrors?.username}
          inputProps={register("username", { required: true })}
        />

        <Input
          type="password"
          label="Password (at least 8 characters)"
          disabled={loading}
          error={formErrors?.password}
          inputProps={register("password", { required: true, minLength: 8 })}
        />
      </div>

      <div className="flex w-full items-center justify-end gap-4 mt-6">
        <Button disabled={loading}>Save</Button>
      </div>
    </form>
  );
};
