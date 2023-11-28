import style from "./Contact.module.scss";
import React from "react";

const Contact = () => {
  return (
    <div className={style.contact}>
      <div className={style.contact__container}>
        <h2 className={style.contact__title}>Kontakt</h2>
        <div className={style.card__box}>
          <div className={style.contact__card}>
            <img
              src="src/components/Contact/img/Josef portret.jpeg"
              alt="Josef photo"
              className={style.card__img}
            />
            <h3 className={style.card__title}>Josef Tajovský</h3>
            <p className={style.card__phone}>tel: +420 123 456 789</p>
            <p className={style.card__email}>email: </p>
          </div>
          <div className={style.contact__card}>
            <h3 className={style.card__title}>Vilém Sarvaš</h3>
            <p className={style.card__phone}>tel: +420 123 456 789</p>
            <p className={style.card__email}>email: </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
