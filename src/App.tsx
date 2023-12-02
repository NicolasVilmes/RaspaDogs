import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/nav";
import Banner from "./assets/banner.png";
import Traced from "./assets/Traced.svg";
import { Tittles } from "./components/tittles";

function App() {
  return (
    <>
      <Navbar />
      <section className="Section">
        <section className="left-section">
          <img src={Banner} alt="" />
        </section>
        <section>
          <h1 className="Text1">Healthy</h1>
          <h1 className="and">&</h1>
          <h1 className="Text2">Fresh</h1>
          <h1 className="Text3">Treats</h1>
          <img src={Traced} className="traced" />
          <span style={{ position: "absolute", top: "540px", width: "700px" }}>
            ¡Bienvenidos a Raspa Dogs, donde la frescura y la alegría se
            fusionan para crear las paletas más irresistibles para tus adorables
            amigos de cuatro patas! En nuestra tienda, nos dedicamos a brindar
            una experiencia deliciosa y refrescante que hará que las colas de
            tus perros se eleven de felicidad.
          </span>
        </section>
      </section>
      <Tittles positionX="290px" positionY="1030px" label="Quien Somos" />
      <section className="Section">
        <section className="left-section">
          <p>IMGS</p>
        </section>
        <section className="right-section">
          <div className="box">
            <span className="text">
              En Raspa Dogs, comprendemos que los perros también merecen
              momentos especiales y sabores únicos. Por eso, hemos desarrollado
              una línea exclusiva de paletas heladas, cuidadosamente elaboradas
              con ingredientes de la más alta calidad, como frutas frescas y
              otros sabores irresistibles que harán que tus perros anhelen cada
              mordisco.
            </span>
            <span className="text">
              En nuestra equipo, aspiramos a ser más que una empresa de paletas
              para perros; buscamos ser cómplices de momentos de felicidad y a
              crear recuerdos deliciosos para tus amigos peludos. Nos
              comprometemos con la calidad, la seguridad y la diversión, porque
              creemos que cada mordisco debería ser una celebración.
            </span>
            <span className="text">
              Así que, únete a nosotros en este viaje de sabores congelados
              diseñados especialmente para los consentidos de la casa. Descubre
              la gama de paletas que harán que los días calurosos se conviertan
              en momentos refrescantes y llenos de diversión para tus queridos
              perros. En Raspa Dogs, la alegría está en cada bocado.
            </span>
          </div>
          <h2>
            ¡Bienvenidos a la revolución helada para tus compañeros caninos!
          </h2>
        </section>
      </section>
    </>
  );
}

export default App;
