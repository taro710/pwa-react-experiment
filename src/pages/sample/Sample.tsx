import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import style from "./Sample.module.scss";
import Layout from "../../components/layout/Layout";
import Button from "../../components/button/Button";
import clsx from "clsx";

const Index = () => {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className={style["logo"]} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className={clsx(style["logo"], style["react"])}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={style["card"]}>
        <Button
          text={`count is ${count}`}
          onClick={() => setCount((count) => count + 1)}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={style["read-the-docs"]}>
        Click on the Vite and React logos to learn more
      </p>
    </Layout>
  );
};

export default Index;
