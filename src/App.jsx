import React from "react";
import style from "./App.module.scss";
import Contact from "./components/Contact/Contact";
import Cooperation from "./components/Cooperation/Cooperation";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./styles/_global.scss";

function App() {
  return (
    <div className={style.content}>
      <Header />
      <Contact />
      <Cooperation />
      <Footer />
    </div>
  );
}

export default App;
