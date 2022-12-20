export interface IUser {
  id: string;
  username: string;
  email: string;
  image: string;
  token: string;
  is_admin: boolean;
}

export interface IUserLoginData {
  email: string;
  password: string;
}

export interface IUserRegisterData extends IUserLoginData {
  username: string;
  password2?: string;
}
