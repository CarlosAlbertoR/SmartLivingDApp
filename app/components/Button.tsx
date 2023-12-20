interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps) => {
  return (
    <button className="rounded-full bg-primary py-2 px-6 text-base font-semibold text-white hover:bg-opacity-90 dark:hover:bg-opacity-90">
      {label}
    </button>
  );
};
