import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { EButtonTheme } from "../../../../shared/ui/Button/Button";
import { EInputTheme, Input } from "../../../../shared/ui/input/input";
import { FormAuth, IAuthButtonItem } from "../../../../widgets/FormAuth";
import { changeAuthForm } from "../../models/slice/AuthSlice";
import { ELoginFieldName, ILoginForm } from "../../models/types/loginFormType";
import { loginValidateSchema } from "../../models/validate/validate";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ILoginForm>({
    defaultValues: {
      [ELoginFieldName.username]: "",
      [ELoginFieldName.password]: "",
    },
    mode: "onSubmit",
    resolver: yupResolver(loginValidateSchema),
  });

  const buttonList: IAuthButtonItem[] = [
    {
      label: "Войти",
      type: "submit",
      theme: EButtonTheme.PRIMARY,
      full: true,
      onClick: handleSubmit((data: ILoginForm) => loginFormSubmit(data)),
    },
    {
      label: "Регистрация",
      full: true,
      onClick: () => dispatch(changeAuthForm("register")),
    },
  ];

  const labelsList: Record<ELoginFieldName, string> = {
    [ELoginFieldName.username]: "Логин",
    [ELoginFieldName.password]: "Пароль",
  };

  function loginFormSubmit(data: ILoginForm) {
    console.log("data login ", data);
  }

  return (
    <FormAuth title="Войти" buttons={buttonList}>
      <form onSubmit={handleSubmit(loginFormSubmit)}>
        <Controller
          name={ELoginFieldName.username}
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              full
              error={errors[ELoginFieldName.username]?.message}
              theme={EInputTheme.UNDERLINE}
              label={labelsList.username}
            />
          )}
        />
        <Controller
          name={ELoginFieldName.password}
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              full
              type="password"
              error={errors[ELoginFieldName.password]?.message}
              label={labelsList.password}
              theme={EInputTheme.UNDERLINE}
            />
          )}
        />
      </form>
    </FormAuth>
  );
};
