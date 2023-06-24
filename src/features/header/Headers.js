import React from "react";
import { useForm } from "react-hook-form";

export default function Headers() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const inVaild = (todo) => {
    setValue("todos", "");
  };
  return (
    <header className="header">
      <form onSubmit={handleSubmit(inVaild)}>
        <input
          {...register("todos", { required: true })}
          placeholder="What needs to be done?"
        />
      </form>
    </header>
  );
}
