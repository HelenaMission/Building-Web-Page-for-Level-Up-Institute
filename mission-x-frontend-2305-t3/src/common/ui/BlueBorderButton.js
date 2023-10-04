import style from './BlueBorderButton.module.css'


export default function BlueBorderBotton({name}) {
  return (
    <div>
      <button className={style.blueBorderedButton}>{name}</button>
    </div>
  );
}

