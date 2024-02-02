import { ITextFieldProps } from "@core/models";

export const TextField = ({
  label,
  name,
  type,
  placeholder,
  error,
  register,
}: ITextFieldProps) => {
  return (
    <div className="mb-8">
      <label
        htmlFor={name}
        className="mb-3 block text-sm font-medium text-dark dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="shadow-one dark:shadow-signUp w-full rounded-full border border-body-color border-opacity-50 py-3 px-6 text-base text-gray-600 dark:text-gray-300 placeholder-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-opacity-30 dark:bg-[#1F2656]"
      />
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
