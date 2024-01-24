import style from "./Cooperation.module.scss";
import PraguePride from "./img/PraguePrideLogo.png";
import pq2023 from "./img/pq2023_logo.png";
import ZazitMestoJinak from "./img/ZazitMestoJinak.jpg";
import SvetKnihy from "./img/SvetKnihyLogo.svg";
import CRo from "./img/CRoLogo.png";

const Cooperation = () => {
  return (
    <div className={style.cooperation}>
      <div className={style.cooperation__container}>
        <h2 className={style.cooperation__title}>Spolupráce</h2>
        <div className={style.cooperation__items}>
          <div className={style.cooperation__item}>
            <img src={PraguePride} alt="Prague pride logo" />
          </div>
          <div className={style.cooperation__item}>
            <img src={pq2023} alt="Prague quadrienale logo" />
          </div>
          <div className={style.cooperation__item}>
            <img src={ZazitMestoJinak} alt="Zazit mesto jinak logo" />
          </div>
          <div className={style.cooperation__item}>
            <img src={SvetKnihy} alt="Svet knihy logo" />
          </div>
          <div className={style.cooperation__item}>
            <img src={CRo} alt="cesky rozhlas logo" />
          </div>
          <div className={style.cooperation__item}>
            <svg
              viewBox="0 0 246 32"
              id="logo"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M59.488 0H70L57.424 32 50 24.064 59.488 0M12.774 0h.001L9.593 7.936l22.509 16.128H0L7.556 32h35.621l-.002-.002.003.002 3.192-7.936L23.854 7.936h28.972L56 0H12.774M165 0h-10.692l-8.695 21.673L132.175.023h-10.53l-.006-.005L112 24.068 119.547 32l8.608-21.483 13.323 21.465v.001h.001l10.736-.001L165 0M117 0H74.491L65 24.064 72.431 32h31.96l3.137-7.936L85.387 7.936h28.491L117 0zM75.558 24.064l4.002-10.156 13.938 10.156h-17.94zM238.475 24.064h-21.76L226.362 0h-10.727L206 24.064h.013L213.556 32H246l-7.525-7.936M209 7.937v-.001L201.472 0l-40.656 19.969L156 32l19.86-9.384v.05l12.772 9.332V32h10.745L209 7.937zm-12.735 5.038l-4.448 11.084-7.548-5.416 11.996-5.668z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooperation;
