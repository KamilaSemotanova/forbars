import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.info}>
        <p className={style.copyright}>For bars events s.r.o.</p>
        <p className={style.copyright}>IČO: 22190201</p>
        <p className={style.copyright}>DIČ: CZ22190201</p>
        <p className={style.copyright}>Vostrého 756/11, Braník, 14700, Praha</p>
        <p className={style.copyright}>
          Společnost vedená u Městského soudu v Praze pod spisovou značkou C
          412316
        </p>
      </div>
      <p className={style.copyright}>© 2026 For bars events s.r.o.</p>
    </footer>
  );
};

export default Footer;
