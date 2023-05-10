import { FunctionComponentEx } from "@/src/types";
import cx from "classnames";

export type ButtonProps = {
  variant?: "DARK" | "LIGHT";
  disabled?: boolean;
  onClick?: (event?: any) => void;
};

export const Button: FunctionComponentEx<ButtonProps> = ({
  children,
  variant = "DARK",
  disabled,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cx(
        "rounded h-10 px-4 transition-colors",
        variant === "DARK" &&
          "bg-blue-400 hover:bg-blue-300 text-white disabled:bg-blue-200",
        variant === "LIGHT" &&
          "bg-slate-100 hover:bg-slate-50 disabled:text-gray-200"
      )}
    >
      {children}
    </button>
  );
};
