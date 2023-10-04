import style from "./OrangeButton.module.css";

export default function OrangeButton({ name }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <button className={style.orangeButton} onClick={scrollToTop}>
        {name}
      </button>
    </div>
  );
}
