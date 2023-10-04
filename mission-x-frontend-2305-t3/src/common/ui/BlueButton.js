import style from "./BlueButton.module.css";

export default function BlueButton({ name }) {
  return (
    <div>
      <button className={style.blueButton}>{name}</button>
    </div>
  );
}
