"use client";

import type { UseFormRegister } from "react-hook-form";

interface ITextInputProps {
  label: string;
  name: string;
  errorMessage?: string;
  register: UseFormRegister<any>;
}

export default function TextInput({
  label,
  name,
  errorMessage,
  register,
}: ITextInputProps) {
  const id = `${name}-TextInput`;
  const isError = !!errorMessage;

  const labelClass = isError
    ? "text-red-700 dark:text-red-500"
    : "text-gray-900 dark:text-white";

  const inputClass = isError
    ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
    : "bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className={`block mb-2 text-sm font-medium ${labelClass}`}
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        className={`text-sm rounded-lg block w-full p-2.5 ${inputClass}`}
        {...register(name)}
      />
      {errorMessage && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
