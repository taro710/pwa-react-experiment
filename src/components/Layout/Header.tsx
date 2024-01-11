import * as React from "react";
import style from "./Header.module.scss";

type Props = {
  title: string;
  children: React.ReactNode;
};

const Header: React.FC<Props> = ({ children, title }: Props) => (
  <header className={style["header-wrapper"]}>
    <div className={style["title"]}>{title}</div>
    <div className={style["control"]}>{children}</div>
  </header>
);

export default Header;
