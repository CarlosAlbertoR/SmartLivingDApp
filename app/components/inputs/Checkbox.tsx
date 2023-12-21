import { FaCheck } from "react-icons/fa";

interface CheckboxProps {
  id: string;
  label: React.ReactNode | string;
  checked: boolean;
  onChange: (isChecked: boolean) => void;
}

export const Checkbox = ({ id, label, checked, onChange }: CheckboxProps) => {
  return (
    <div className="mb-8 flex">
      <label
        htmlFor={id}
        className="flex cursor-pointer select-none text-sm font-medium text-body-color-2 dark:text-body-color"
      >
        <div className="relative">
          <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="sr-only"
          />
          <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-30 dark:border-white dark:border-opacity-10">
            <span className={`opacity-${checked ? "100" : "0"}`}>
              <FaCheck fill="#3056D3" />
            </span>
          </div>
        </div>
        <span>{label}</span>
      </label>
    </div>
  );
};
