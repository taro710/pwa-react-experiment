import * as React from "react";
import Button from "./Button";
import style from "./Modal.module.scss";

const { useState } = React;

type Props = {
  onSave: (title: string) => void;
  onCancel: () => void;
};

export const Modal: React.FC<Props> = ({ onCancel, onSave }: Props) => {
  const [title, setTitle] = useState(
    new Date().toLocaleDateString("us-en", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })
  );

  return (
    <div className={style["modal-wrapper"]}>
      <div className={style["modal"]}>
        <p>Text will be saved in history.</p>
        <input
          className={style["input"]}
          type="text"
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
        />

        <div className={style["control"]}>
          <Button onClick={onCancel} cancel>
            cancel
          </Button>
          <Button onClick={() => onSave(title)}>save</Button>
        </div>
      </div>
    </div>
  );
};
