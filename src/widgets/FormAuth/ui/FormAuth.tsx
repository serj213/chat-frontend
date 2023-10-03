import { ButtonHTMLAttributes } from "react";
import {
  Button,
  EButtonTheme,
  IButtonProps,
} from "../../../shared/ui/Button/Button";
import { ETextSize, Text } from "../../../shared/ui/Text/Text";
import cls from "./FormAuth.module.scss";

export interface IAuthButtonItem extends Omit<IButtonProps, 'children'> {
  label: string;
}

interface IFormAuthProps {
  title: string;
  children: React.ReactNode;
  buttons: IAuthButtonItem[];
}

export const FormAuth = (props: IFormAuthProps) => {
  const { title, children, buttons } = props;

  return (
    <div className={cls.formAuth}>
      <Text
        size={ETextSize.XL}
        position="center"
        type="title"
        classname={cls.formAuth__title}
      >
        {title}
      </Text>
      <div className={cls.main}>{children}</div>
      <div className={cls.buttons}>
        {buttons.map((button, index) => {
          return (
            <Button key={index} {...button}>
              {button.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
