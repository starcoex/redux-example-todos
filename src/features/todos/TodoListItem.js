import React from "react";
import { useForm } from "react-hook-form";

export default function TodoListItem(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  console.log(props);
  const handleCompletedChanged = (e) => {};
  return (
    <li>
      Hello
      <div className="view">
        <div className="segment label">
          <form>
            <input
              type="checkbox"
              // checked={completed}
              {...register("toggle", { onChange: handleCompletedChanged })}
            />
            <div>Text</div>
          </form>
        </div>
      </div>
    </li>
  );
}
