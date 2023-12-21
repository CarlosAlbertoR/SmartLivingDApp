import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  icon?: IconType;
  className?: string;
  type?: "primary" | "secondary";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  label,
  disabled,
  icon: Icon,
  type = "primary",
  className,
  onClick,
}: ButtonProps) => {
  const commonStyles =
    "w-full relative rounded-full text-base font-semibold transition-all";
  const primaryStyles = `bg-primary py-2 px-6 text-white hover:bg-opacity-90 dark:hover:bg-opacity-90`;
  const secondaryStyles = `border border-body-color-2 py-2 px-6 text-body-color-2 hover:border-primary hover:bg-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary`;

  const buttonStyles = `${
    type === "primary" ? primaryStyles : secondaryStyles
  } ${commonStyles} ${className || ""}`;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={buttonStyles.trim()}
    >
      {Icon && <Icon size={24} className="absolute left-4 my-auto" />}
      {label}
    </button>
  );
};
