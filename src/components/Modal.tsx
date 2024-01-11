import * as React from "react";
import Button from "./Button";
import style from "./Modal.module.scss";

const { useState } = React;

type Props = {
  onSave: (title: string) => void;
  onCancel: () => void;
};

export const Modal: React.FC<Props> = ({ onCancel, onSave }: Props) => {
  const [title, setTitle] = useState(new Date().toISOString());

  return (
    <div className={style["wrapper"]}>
      <div className={style["modal"]}>
        <p>テキストの内容を保存します。</p>
        <p>保存内容のタイトルを入力して「保存」ボタンを押してください。</p>
        <p>
          <input
            className={style["input"]}
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </p>
        <div className={style["control"]}>
          <Button onClick={onCancel} cancel>
            キャンセル
          </Button>
          <Button onClick={() => onSave(title)}>保存</Button>
        </div>
      </div>
    </div>
  );
};
