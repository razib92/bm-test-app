import { HTMLInputTypeAttribute } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type InputProps = {
  type: HTMLInputTypeAttribute;
  label: string;
  disabled?: boolean;
  inputProps?: UseFormRegisterReturn;
  error?: FieldError;
};

export const Input = ({
  type = "text",
  label,
  disabled,
  inputProps,
  error,
}: InputProps) => (
  <label className="w-full block text-sm font-medium text-gray-600">
    {label}
    <input
      type={type}
      disabled={disabled}
      className="w-full mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      {...inputProps}
    />
    {error && (
      <p className="text-red-400" role="alert">
        Invalid field!
      </p>
    )}
  </label>
);
