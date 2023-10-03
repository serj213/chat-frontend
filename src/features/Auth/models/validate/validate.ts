import * as yup from "yup";
import { ELoginFieldName } from "../types/loginFormType";
import { ERegisterFormFieldName } from "../types/registerFormType";

export const registerValidateSchema = yup.object({
  [ERegisterFormFieldName.userName]: yup.string().required('Поле обязательно'),
  [ERegisterFormFieldName.name]: yup.string().required('Поле обязательно'),
  [ERegisterFormFieldName.password]: yup.string().required('Поле обязательно').min(5, 'Минимальное число символов 5'),
});

export const loginValidateSchema = yup.object({
  [ELoginFieldName.username]: yup.string().required('Поле обязательно'),
  [ELoginFieldName.password]: yup.string().required('Поле обязательно').min(5, 'Минимальное число символов 5'),
});

