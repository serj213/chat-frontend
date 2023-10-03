import classNames from "classnames";
import cls from "./Text.module.scss";

export enum ETextSize {
  M = "m",
  L = "l",
  XL = "xl",
}

type THeaderTagType = "h1" | "h2" | "h3";

const headerTagList: Record<ETextSize, THeaderTagType> = {
  [ETextSize.M]: "h3",
  [ETextSize.L]: "h2",
  [ETextSize.XL]: "h1",
};

export enum ETextTheme {
  STANDART = "standart",
  ERROR = "error",
  GREY = "grey",
}

type TTextType = "text" | "title";

type TTextPosition = "left" | "center" | "right";


interface ITextProps {
  type?: TTextType;
  theme?: ETextTheme;
  size?: ETextSize;
  children: React.ReactNode;
  position?: TTextPosition
  classname?: string;
}


export const Text = (props: ITextProps) => {
  const {
    type = "text",
    theme = ETextTheme.STANDART,
    size = ETextSize.M,
    position = 'left',
    children,
    classname,
  } = props;

  const mods = {
    [cls[size]]: true,
    [cls[theme]]: true,
    [cls[position]]: true
  };

  const Heading = headerTagList[size];

  return (
    <div className={classNames(cls.text, mods, [classname])}>
      {type === "title" && <Heading className={cls.title}>{children}</Heading>}

      {type === "text" && <p>{children}</p>}
    </div>
  );
};
