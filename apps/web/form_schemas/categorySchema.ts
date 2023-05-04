import * as yup from "yup";

export const categorySchema = yup
  .object({
    name: yup
      .string()
      .required("Nazwa kategorii jest wymagana")
      .min(3, "Nazwa kategorii musi mieć przynajmniej 3 znaki"),
    description: yup
      .string()
      .test(
        "empty-or-8-characters-check",
        "Opis kategorii musi mieć przynajmniej 8 znaków",
        (description) => !description || description.length >= 8
      ),
  })
  .required();

export type CategoryFormData = yup.InferType<typeof categorySchema>;
