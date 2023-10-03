import { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { FormAuth, IAuthButtonItem } from "../../../../widgets/FormAuth";
import {
  IRegisterForm,
  ERegisterFormFieldName,
} from "../../models/types/registerFormType";
import { EInputTheme, Input } from "../../../../shared/ui/input/input";
import { EButtonTheme } from "../../../../shared/ui/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidateSchema } from "../../models/validate/validate";
import { useDispatch } from "react-redux";
import { changeAuthForm } from "../../models/slice/AuthSlice";
import { useRegisterMutation } from "../../api/AuthApi";
import { errorProcessing } from "../../../../shared/lib/errorProcessing";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [registerHandler, { error: registerError }] = useRegisterMutation();

  useEffect(() => {
    errorProcessing(registerError)
  }, [registerError]);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IRegisterForm>({
    defaultValues: {
      [ERegisterFormFieldName.userName]: "",
      [ERegisterFormFieldName.password]: "",
      [ERegisterFormFieldName.name]: "",
    },
    mode: "onSubmit",
    resolver: yupResolver(registerValidateSchema),
  });

  const labelsList: Record<ERegisterFormFieldName, string> = {
    [ERegisterFormFieldName.name]: "Ваше имя",
    [ERegisterFormFieldName.userName]: "Логин",
    [ERegisterFormFieldName.password]: "Пароль",
  };

  const registerFormSubmit: SubmitHandler<IRegisterForm> = (data) => {
    console.log("register form submit ", data);
    registerHandler(data);
  };

  const buttonList: IAuthButtonItem[] = [
    {
      label: "Регистрация",
      type: "submit",
      theme: EButtonTheme.PRIMARY,
      full: true,
      onClick: handleSubmit((data: IRegisterForm) => registerFormSubmit(data)),
    },
    {
      label: "Войти",
      full: true,
      onClick: () => dispatch(changeAuthForm("login")),
    },
  ];

  return (
    <>
      <FormAuth title="Регистрация" buttons={buttonList}>
        <form onSubmit={handleSubmit(registerFormSubmit)}>
          <Controller
            name={ERegisterFormFieldName.userName}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                full
                error={errors[ERegisterFormFieldName.userName]?.message}
                theme={EInputTheme.UNDERLINE}
                label={labelsList.username}
              />
            )}
          />
          <Controller
            name={ERegisterFormFieldName.name}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                full
                error={errors[ERegisterFormFieldName.name]?.message}
                label={labelsList.name}
                theme={EInputTheme.UNDERLINE}
              />
            )}
          />
          <Controller
            name={ERegisterFormFieldName.password}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                full
                type="password"
                error={errors[ERegisterFormFieldName.password]?.message}
                label={labelsList.password}
                theme={EInputTheme.UNDERLINE}
              />
            )}
          />
        </form>
      </FormAuth>
    </>
  );
};
