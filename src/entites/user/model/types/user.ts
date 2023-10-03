export interface IUser {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

export interface IUserState {
  user: IUser | null;
}
