import * as React from "react";
import style from "./Button.module.scss";
import clsx from "clsx";

type Props = {
  cancel?: boolean;
  children: string;
  onClick: () => void;
};

const Button: React.FC<Props> = ({ children, onClick, cancel }: Props) => (
  <button
    className={clsx(style["button"], cancel && style["cancel"])}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
