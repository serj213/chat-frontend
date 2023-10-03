import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import cls from "./Button.module.scss";

export enum EButtonTheme {
  CLEAR = "clear",
  PRIMARY = "primary",
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  theme?: EButtonTheme;
  full?: boolean;
}

export const Button = (props: IButtonProps) => {
  const {
    children,
    theme = EButtonTheme.CLEAR,
    className,
    full = false,
    ...otherProps
  } = props;

  const mods = {
    [cls[theme]]: true,
    [cls.full]: full,
  };

  return (
    <button
      {...otherProps}
      className={classNames(cls.button, mods, [className])}
    >
      {children}
    </button>
  );
};
