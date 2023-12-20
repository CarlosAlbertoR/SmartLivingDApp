interface ButtonProps {
  label: string;
  type?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export const Button = ({ label, type = 'primary',className, onClick }: ButtonProps) => {
  const primaryStyles = "rounded-full bg-primary py-2 px-6 text-base font-semibold text-white hover:bg-opacity-90 dark:hover:bg-opacity-90";
  const secondaryStyles = "rounded-full border border-body-color-2 py-2 px-6 text-base font-semibold text-body-color-2 transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary";

  const buttonStyles = `${type === 'primary' ? primaryStyles : secondaryStyles} ${className || ''}`;

  return (
    <button onClick={onClick} className={buttonStyles.trim()}>
      {label}
    </button>
  );
};
