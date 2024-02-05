import { FieldError, FormState, UseFormRegister } from "react-hook-form";

export interface ICheckboxProps {
  id?: string;
  label: React.ReactNode | string;
  name: TValidFieldNames;
  formState: FormState<any>;
  error?: FieldError | undefined;
  register: UseFormRegister<any>;
}

export interface ITextFieldProps {
  label?: string;
  name: TValidFieldNames;
  type: string;
  placeholder?: string;
  error: FieldError | undefined;
  register: UseFormRegister<any>;
}

export type TValidFieldNames =
  | "email"
  | "keepSignedIn"
  | "name"
  | "password"
  | "termsAndConditions";
