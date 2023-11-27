import style from "./Header.module.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt="logo" className={style.logo} />
    </header>
  );
};

export default Header;
