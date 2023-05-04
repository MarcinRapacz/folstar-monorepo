import * as yup from "yup";
import {
  useForm as useReactHookForm,
  FieldValues,
  DeepPartial,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export function useForm<T extends FieldValues>(
  schame: yup.ObjectSchema<any>,
  defaultValues?: DeepPartial<T>
) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useReactHookForm<T>({
    resolver: yupResolver(schame),
    mode: "onBlur",
    defaultValues,
  });

  return {
    register,
    handleSubmit,
    errors,
    reset,
  };
}
