import { ReactNode } from "react";
import { Link } from "react-router-dom";
import viteLogo from "/vite.svg";
import style from "./Layout.module.scss";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={style["layout-component"]}>
      <div className={style["header"]}>
        <img src={viteLogo} alt="logo" className={style["logo"]} />

        <div className={style["menu"]}>
          <div className={style["menu-component"]}>
            <Link to={"/"}>
              <span className={style["text-link"]}>Top</span>
            </Link>

            <div className={style["divider"]} />

            <Link to={"/sample"}>
              <span className={style["text-link"]}>Sample</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={style["body"]}>{children}</div>

      <div className={style["footer"]}>
        <p className={style["text"]}>〒000-0000 東京都〇〇区〇〇町0-0-0</p>
        <p className={style["copyright"]}>©copyright</p>
      </div>
    </div>
  );
};

export default Layout;
