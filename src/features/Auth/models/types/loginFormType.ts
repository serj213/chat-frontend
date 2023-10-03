export enum ELoginFieldName {
  username = "username",
  password = "password",
}

export interface ILoginForm {
  [ELoginFieldName.username]: string;
  [ELoginFieldName.password]: string;
}
