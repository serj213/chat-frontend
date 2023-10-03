export enum ERegisterFormFieldName {
  userName = "username",
  password = "password",
  name = "name",
}

export interface IRegisterForm {
  [ERegisterFormFieldName.userName]: string;
  [ERegisterFormFieldName.password]: string;
  [ERegisterFormFieldName.name]: string;
}
