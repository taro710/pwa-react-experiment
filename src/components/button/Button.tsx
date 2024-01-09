import style from "./Button.module.scss";

type Props = {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick }: Props) => {
  return (
    <button className={style["button-component"]} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
