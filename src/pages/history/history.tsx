import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Layout/Header";
import { useState } from "react";
import { getMemos, MemoRecord } from "../../indexeddb/memos";
import style from "./history.module.scss";

const { useEffect } = React;

type Props = {
  setText: (text: string) => void;
};

const History: React.FC<Props> = ({ setText }: Props) => {
  const [memos, setMemos] = useState<MemoRecord[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    getMemos().then(setMemos);
  }, []);

  return (
    <>
      <div className={style["page-header"]}>
        <Header title="History">
          <Link to="/">back to editor</Link>
        </Header>
      </div>
      <div className={style["page-body"]}>
        {memos.map((memo) => (
          <button
            className={style["memo"]}
            key={memo.datetime}
            onClick={() => {
              setText(memo.text);
              navigate("/editor");
            }}
          >
            <div className={style["title"]}>{memo.title}</div>
            <div className={style["text"]}>{memo.text}</div>
          </button>
        ))}
      </div>
    </>
  );
};

export default History;
