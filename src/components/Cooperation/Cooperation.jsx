import style from "./Cooperation.module.scss";
import React from "react";

const Cooperation = () => {
  return (
    <div className={style.cooperation}>
      <div className={style.cooperation__container}>
        <h2 className={style.cooperation__title}>Spolupráce</h2>
        <div className={style.cooperation__items}>
          <div className={style.cooperation__item}>
            <img
              className={style.cooperation__item__img}
              src="https://via.placeholder.com/150"
              alt="logo"
            />
          </div>
          <div className={style.cooperation__item}>
            <img
              className={style.cooperation__item__img}
              src="https://via.placeholder.com/150"
              alt="logo"
            />
          </div>
          <div className={style.cooperation__item}>
            <img
              className={style.cooperation__item__img}
              src="https://via.placeholder.com/150"
              alt="logo"
            />
          </div>
          <div className={style.cooperation__item}>
            <img
              className={style.cooperation__item__img}
              src="https://via.placeholder.com/150"
              alt="logo"
            />
          </div>
          <div className={style.cooperation__item}>
            <img
              className={style.cooperation__item__img}
              src="https://via.placeholder.com/150"
              alt="logo"
            />
          </div>
          <div className={style.cooperation__item}>
            <img
              className={style.cooperation__item__img}
              src="https://via.placeholder.com/150"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooperation;
