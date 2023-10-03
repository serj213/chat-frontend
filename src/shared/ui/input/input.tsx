import React, { forwardRef, InputHTMLAttributes } from "react";
import { ETextSize, ETextTheme, Text } from "../Text/Text";
import classNames from "classnames";
import cls from "./input.module.scss";

export enum EInputTheme {
  DEFAULT = "default",
  UNDERLINE = "underline",
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme: EInputTheme;
  classname?: string;
  label?: string;
  full?: boolean;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    theme = EInputTheme.DEFAULT,
    className,
    label,
    error,
    full = false,
    ...otherProps
  } = props;

  const mods = {
    [cls[theme]]: true,
    [cls.full]: full,
  };

  if (theme === EInputTheme.UNDERLINE) {
    return (
      <div className={classNames(cls.input, mods, [className])}>
        <Text classname={cls.label} theme={ETextTheme.GREY} size={ETextSize.M}>
          {label}
        </Text>
        <input ref={ref} type="text" {...otherProps} />
        {error && (
          <Text
            classname={cls.error}
            theme={ETextTheme.ERROR}
            size={ETextSize.M}
          >
            {error}
          </Text>
        )}
      </div>
    );
  }

  return (
    <input
      ref={ref}
      // className={classNames(cls.input, mods, [classname])}
      {...otherProps}
    />
  );
});
