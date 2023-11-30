import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/nav";
import Banner from "./assets/banner.png";
import Traced from "./assets/Traced.svg";

function App() {
  return (
    <>
      <Navbar />
      <section className="Banner">
        <section className="left-banner">
          <img src={Banner} alt="" />
        </section>
        <section className="right-banner">
          <h1 className="Text1">Healthy</h1>
          <h1 className="and">&</h1>
          <h1 className="Text2">Fresh</h1>
          <h1 className="Text3">Treats</h1>
          <img src={Traced} className="traced" />
          <span style={{ position: "absolute", top: "520px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            mollis sed viverra posuere malesuada. At et pharetra diam vel.
            <br /> Quis dignissim maecenas lectus vestibulum, sed. Risus est
            accumsan euismod ut at consequat.
          </span>
        </section>
      </section>
    </>
  );
}

export default App;
