import style from "./Cooperation.module.scss";

const Cooperation = () => {
  return (
    <div className={style.cooperation}>
      <div className={style.cooperation__container}>
        <h2 className={style.cooperation__title}>Kde jste nás viděli?</h2>
        <p className={style.cooperation__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo.
        </p>
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
