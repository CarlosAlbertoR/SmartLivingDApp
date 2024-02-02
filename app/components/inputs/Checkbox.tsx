import { ICheckboxProps } from "@core/models";
import { FaCheck } from "react-icons/fa";

export const Checkbox = ({
  id,
  error,
  label,
  name,
  register,
  formState,
}: ICheckboxProps) => {
  return (
    <div className="mb-8 ">
      <label
        htmlFor={id}
        className="flex cursor-pointer select-none text-sm font-medium text-body-color-2 dark:text-body-color"
      >
        <div className="relative">
          <input
            type="checkbox"
            id={id}
            {...register(name)}
            className="sr-only"
          />
          <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-30 dark:border-white dark:border-opacity-10">
            <span
              className={`opacity-${name in formState.dirtyFields ? "100" : "0"}`}
            >
              <FaCheck fill="#3056D3" />
            </span>
          </div>
        </div>
        <span>{label}</span>
      </label>
      {error && (
        <div aria-live="polite" aria-atomic="true">
          <span className="mt-2 text-sm text-red-600 dark:text-red-400">
            {error.message}
          </span>
        </div>
      )}
    </div>
  );
};
