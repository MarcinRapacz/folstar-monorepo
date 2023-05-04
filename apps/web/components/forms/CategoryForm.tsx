"use client";

import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { categorySchema } from "@/form_schemas/categorySchema";
import type { CategoryFormData } from "@/form_schemas/categorySchema";
import TextInput from "@/components/inputs/TextInput";
import Button from "@/components/Button";
import H6 from "@/components/heading/H6";
import { useForm } from "@/hooks/useForm";
import { CategoryService } from "@/services/CatogoryService";
import { Category } from "@prisma/client";

type CategoryFormProps =
  | { mode: "create" }
  | { mode: "update"; category: Category | null };

export default function CategoryForm(props: CategoryFormProps) {
  const router = useRouter();
  const { errors, handleSubmit, register } = useForm<CategoryFormData>(
    categorySchema,
    {
      name: (props.mode === "update" && props.category?.name) || "",
      description:
        (props.mode === "update" && props.category?.description) || "",
    }
  );

  const label =
    props.mode === "create" ? "Dodaj nową kategorie" : "Zaaktualizuj kategorie";

  const onSubmit = async (data: CategoryFormData) => {
    switch (props.mode) {
      case "create":
        const id = uuidv4();
        await CategoryService.create({
          id,
          description: data.description || null,
          name: data.name,
          mediaId: null,
        });
        router.refresh();
        router.push(`/admin/category/${id}`);
        break;

      case "update":
        if (!props.category) {
          break;
        }
        await CategoryService.update({
          id: props.category.id,
          mediaId: props.category.mediaId,
          name: data.name,
          description: data.description || null,
        });
        router.push("/admin/category");
        break;

      default:
        throw new Error("Not all modes are handled");
        break;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" p-4 border rounded shadow"
    >
      <H6>{label}</H6>
      <div className="mt-4 flex flex-col sm:flex-row items-end gap-2">
        <TextInput
          label="Nazwa kategorii"
          name="name"
          errorMessage={errors.name?.message}
          register={register}
        />
        <TextInput
          label="Opis kategorii"
          name="description"
          errorMessage={errors.description?.message}
          register={register}
        />
        <Button type="submit">Zapisz</Button>
      </div>
    </form>
  );
}
