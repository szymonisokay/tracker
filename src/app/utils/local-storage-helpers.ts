import { IUser } from '../models/user.model';

export const saveUserToLocalStorage = (user: IUser): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const retrieveUserFromLocalStorage = (): IUser | null => {
  const user = localStorage.getItem('user');

  if (!user) return null;

  return JSON.parse(user);
};

export const removeUserFromLocalStorage = (): void => {
  localStorage.removeItem('user');
};
