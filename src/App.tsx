import "./styles/App.css";
import { Navbar } from "./components/nav";
import Banner from "./assets/banner.png";
import Traced from "./assets/Traced.svg";
import { Tittles } from "./components/tittles";
import cart from "./assets/cart_icon.svg";
import map from "./assets/map_icon.svg";
import ice_bites from "./assets/prod1.jpg";
import paleta from "./assets/prod2.jpg";
import rasp from "./assets/prod3.jpg";
import { Products } from "./components/products";
import { Locals } from "./components/Local";
import { MapArea } from "./components/MapArea";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <section className="Section">
          <section className="left-section">
            <img src={Banner} alt="" style={{ width: "490px" }} />
          </section>
          <section>
            <div className="slogan">
              <h1 className="Text1">Healthy</h1>
              <div className="sep">
                <h1 className="Text2">Fresh</h1>
                <h1 className="and">&</h1>
                <h1 className="Text3">Treats</h1>
                <img src={Traced} className="traced" />
              </div>
            </div>
            <span
              style={{ position: "absolute", top: "440px", width: "700px" }}
            >
              ¡Bienvenidos a Raspa Dogs, donde la frescura y la alegría se
              fusionan para crear las paletas más irresistibles para tus
              adorables amigos de cuatro patas! En nuestra tienda, nos dedicamos
              a brindar una experiencia deliciosa y refrescante que hará que las
              colas de tus perros se eleven de felicidad.
            </span>
          </section>
        </section>
        <Tittles label="Quien Somos" />
        <section className="Section">
          <section className="left-section">
            <p>IMGS</p>
          </section>
          <section className="right-section">
            <div className="box">
              <span className="text">
                En Raspa Dogs, comprendemos que los perros también merecen
                momentos especiales y sabores únicos. Por eso, hemos
                desarrollado una línea exclusiva de paletas heladas,
                cuidadosamente elaboradas con ingredientes de la más alta
                calidad, como frutas frescas y otros sabores irresistibles que
                harán que tus perros anhelen cada mordisco.
              </span>{" "}
              <br />
              <span className="text">
                En nuestra equipo, aspiramos a ser más que una empresa de
                paletas para perros; buscamos ser cómplices de momentos de
                felicidad y a crear recuerdos deliciosos para tus amigos
                peludos. Nos comprometemos con la calidad, la seguridad y la
                diversión, porque creemos que cada mordisco debería ser una
                celebración.
              </span>
              <br />
              <span className="text">
                Así que, únete a nosotros en este viaje de sabores congelados
                diseñados especialmente para los consentidos de la casa.
                Descubre la gama de paletas que harán que los días calurosos se
                conviertan en momentos refrescantes y llenos de diversión para
                tus queridos perros. En Raspa Dogs, la alegría está en cada
                bocado.
              </span>
              <h2>
                ¡Bienvenidos a la revolución helada para tus compañeros caninos!
              </h2>
            </div>
          </section>
        </section>
        <Tittles label="Productos" size="35px" icon={cart} />
        <section className="Prod">
          <Products
            name="Ice Bites"
            img={ice_bites}
            price="$1"
            description="una breve description
          "
          />
          <Products
            name="Paletas"
            img={paleta}
            price="$1"
            description="una breve description
          "
          />
          <Products
            name="Rapados"
            img={rasp}
            price="$1"
            description="una breve description
          "
          />
        </section>
        <Tittles label="Encuentranos" size="35px" icon={map} />
        <section className="MapArea">
          <div>
            <Locals
              label="Chiché & Coffee"
              adr="Plaza 68 Strip Corner, Local 2, Calle 68 con Matilde de Obarrio, Panamá"
              func="LUN - SAB 8AM - 8PM"
              loc="https://www.google.com/maps/dir//Chich%C3%A9+%26+Coffee+-+San+Francisco,+Plaza+68+Strip+Corner,+Local+2,+Calle+68+con+Matilde+de+Obarrio,+Panam%C3%A1/@8.9640922,-79.6795055,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8faca9f525ea306f:0x80552943c051f9e7!2m2!1d-79.5108075!2d8.9938601!3e0?entry=ttu"
            />{" "}
            <Locals
              label="Petopia"
              adr="Avenida Cincuentenario, Urb. Coco del Mar, Casa 1, frente a PH Dal Mare y Europarts, Panamá, Provincia de Panamá"
              func="LUN - DOM 8AM - 9PM"
              loc="https://www.google.com/maps/dir//Petopia+Panam%C3%A1,+Avenida+Cincuentenario,+Urb.+Coco+del+Mar,+Casa+1,+frente+a+PH+Dal+Mare+y+Europarts,+Panam%C3%A1,+Provincia+de+Panam%C3%A1/@8.9640922,-79.6795055,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8faca9ac074a2ef7:0x81bcb2df6454cce5!2m2!1d-79.4969575!2d9.0008501!3e0?entry=ttu"
            />{" "}
            <Locals
              label="Puppy Pet Store"
              adr="Casa 479B, C. Alberto Tejada, Panamá, Provincia de Panamá"
              func="LUN - SAB 8AM - 6PM"
              loc="https://www.google.com/maps/dir//PUPPY+PET+STORE,+Casa+479B,+C.+Alberto+Tejada,+Panam%C3%A1,+Provincia+de+Panam%C3%A1/@8.9640922,-79.6795055,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8faca94aa925c2e5:0x83cfac66f533704!2m2!1d-79.5729663!2d9.0059267!3e0?entry=ttu"
            />{" "}
            <Locals
              label="Perrilandia"
              adr="Calle 70 San Francisco y, Vía Israel, Panamá, Provincia de Panamá"
              func="LUN - SAB 7AM - 6PM DOM 8AM - 4PM"
              loc="https://www.google.com/maps/dir//Perrilandia+Hotel+Guarderia+Peluqueria,+Calle+70+San+Francisco+y,+V%C3%ADa+Israel,+Panam%C3%A1,+Provincia+de+Panam%C3%A1/@8.9640922,-79.6795055,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8faca9a0324a327b:0x93b03633e381b84e!2m2!1d-79.50801!2d8.9876199!3e0?entry=ttu"
            />{" "}
            <Locals
              label="Animal Lover Spa & Boutique"
              adr="plaza blue canal, Av Omar Torrijos Herrera, Panamá"
              func="JUE - DOM 7:30AM - 8:30PM"
              loc="https://www.google.com/maps/dir//Animal+Lover+Spa+%26+Boutique,+plaza+blue+canal,+Av+Omar+Torrijos+Herrera,+Panam%C3%A1/@8.9640922,-79.6795055,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8faca7d53f36b159:0xf2ad01d5b89725b7!2m2!1d-79.5740448!2d8.984231!3e0?entry=ttu"
            />{" "}
            <Locals
              label="Veterinaria Pet Care | Vacamonte"
              adr="Plaza Del Tajonazo Vía Principal, Vacamonte"
              func="LUN - VIE 8AM - 9PM SAB 9AM - 6Pm DOM 10AM - 4PM"
              loc="https://www.google.com/maps/dir//Veterinaria+Pet+Care+%7C+Vacamonte,+Plaza+Del+Tajonazo+V%C3%ADa+Principal,+Vacamonte/@8.9222529,-79.6972586,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8faca3937cc3ff61:0xbdcc456bb6d11742!2m2!1d-79.6972586!2d8.9222529!3e0?entry=ttu"
            />{" "}
            <Locals
              label="Clinica Veterinaria Oeste Vets"
              adr="Cerro Silvestre, entrada de Nuevo Chorrillo, Plaza Mundial, Local B4"
              func="LUN - VIE 9AM - 11PM SAB 8AM - 5Pm DOM 9AM - 3PM"
              loc="https://www.google.com/maps/dir//Clinica+Veterinaria+Oeste+Vets,+Cerro+Silvestre,+entrada+de+Nuevo+Chorrillo,+Plaza+Mundial,+Local+B4/@8.9457544,-79.6833868,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x8faca366857a0005:0x744997b523dad2c4!2m2!1d-79.6808119!2d8.9457491!3e0?entry=ttu"
            />
          </div>
          <div>
            <MapArea width="100%" heigth="140vh" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
