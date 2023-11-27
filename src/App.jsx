import style from "./App.module.scss";
import Cooperation from "./components/Cooperation/Cooperation";
import Header from "./components/Header/Header";
import "./styles/_global.scss";

function App() {
  return (
    <div className={style.app}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className={style.content}>
        <Header />
        <Cooperation />
      </div>
    </div>
  );
}

export default App;
