import style from "./BlueBorderButtonWithBlackText.module.css";

export default function BlueBorderButtonWithBlackText({ name }) {
  return (
    <div>
      <button className={style.blueBtnWtBkTxt}>{name}</button>
    </div>
  );
}
