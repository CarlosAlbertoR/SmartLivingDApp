interface InputFieldProps {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  error?: [];
}

export const InputField = ({
  label,
  name,
  type,
  placeholder,
  error,
}: InputFieldProps) => {
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
        name={name}
        placeholder={placeholder}
        className="shadow-one dark:shadow-signUp w-full rounded-full border border-body-color border-opacity-50 py-3 px-6 text-base text-body-color placeholder-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-opacity-30 dark:bg-[#1F2656]"
      />
      {error && error.length > 0 && (
        <div id={`${name}-error`} aria-live="polite" aria-atomic="true">
          {error.map((errorMessage, index) => (
            <p key={index} className="mt-2 text-sm text-red-500">
              {errorMessage}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
