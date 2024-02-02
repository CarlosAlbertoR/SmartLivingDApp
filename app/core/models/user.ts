export interface IUser {
  email: string;
  name: string;
  profileImage: string;
}

export type SignupFormData = {
  email: string;
  name: string;
  password: string;
  termsAndConditions: boolean;
};
