import { putMemo } from "../../indexeddb/memos";
import Button from "../../components/Button";
import { Modal } from "../../components/Modal";
import { Link } from "react-router-dom";
import Header from "../../components/Layout/Header";
import { useEffect, useState } from "react";
import ConvertMarkdownWorker from "../../worker/markdownConverter?worker";
import style from "./editor.module.scss";

const convertMarkdownWorker = new ConvertMarkdownWorker();

type Props = {
  text: string;
  setText: (text: string) => void;
};

const Editor: React.FC<Props> = ({ setText, text }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const [html, setHtml] = useState("");

  useEffect(() => {
    convertMarkdownWorker.onmessage = (event) => {
      setHtml(event.data.html);
    };
  }, []);

  useEffect(() => {
    convertMarkdownWorker.postMessage(text);
  }, [text]);

  return (
    <>
      <div className={style["page-header"]}>
        <Header title="Markdown Editor">
          <Button onClick={() => setShowModal(true)}>Save</Button>
          <Link to="/history">history</Link>
        </Header>
      </div>

      <div className={style["page-body"]}>
        <textarea
          className={style["textarea"]}
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <div className={style["preview"]}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
      {showModal && (
        <Modal
          onSave={(title: string): void => {
            putMemo(title, text);
            setShowModal(false);
          }}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Editor;
