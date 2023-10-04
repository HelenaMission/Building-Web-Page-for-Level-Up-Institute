import style from "./PinkButton.module.css";

export default function PinkButton({ name }) {
  return (
    <div>
      <button className={style.pinkButton}>{name}</button>
    </div>
  );
}
