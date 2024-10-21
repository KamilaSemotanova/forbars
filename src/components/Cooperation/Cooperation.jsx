import style from "./Cooperation.module.scss";
import PraguePride from "./img/PraguePrideLogo.png";
import pq2023 from "./img/pq2023_logo.png";
import ZazitMestoJinak from "./img/ZazitMestoJinak.png";
import SvetKnihy from "./img/SvetKnihyLogo.svg";
import CRo from "./img/CRoLogo.png";
import Signal from "./img/signal.png";
import ghmp from "./img/ghmp.png";

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
            <img src={Signal} alt="Signal festival logo" />
          </div>

          <div className={style.cooperation__item}>
            <img src={ghmp} alt="Galerie hlavního města Prahy logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooperation;
