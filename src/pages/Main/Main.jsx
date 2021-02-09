import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="wrapper">
      <section className="top-container">
        <header className="showcase">
          <h1>Titulo a tu eleccion</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            ipsam! Nihil quo minima nulla atque!
          </p>
        </header>
        <div className="top-box top-box-a">
          <h4>espacio publicitario</h4>
          <p className="price">$2000/mes</p>
          <a href="" className="btn">
            Contactanos
          </a>
        </div>
        <div className="top-box top-box-b">
          <h4>espacio publicitario</h4>
          <p className="price">$2000/mes</p>
          <a href="" className="btn">
            Contactanos
          </a>
        </div>
      </section>

      <section className="boxes">
        <div className="box">
          <i className="fas fa-chart-pie fa-4x"></i>
          <h3>Tu contenido</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
            expedita?
          </p>
        </div>
        <div className="box">
          <i className="fas fa-globe fa-4x"></i>
          <h3>Tu contenido</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
            expedita?
          </p>
        </div>
        <div className="box">
          <i className="fas fa-cog fa-4x"></i>
          <h3>Tu contenido</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
            expedita?
          </p>
        </div>
        <div className="box">
          <i className="fas fa-users fa-4x"></i>
          <h3>Tu contenido</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
            expedita?
          </p>
        </div>
      </section>
      <section className="info">
        <img src="https://image.ibb.co/j4Qz8x/pic1.jpg" alt="" />
        <div>
          <h2>Contenido</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias
            reiciendis deleniti possimus nemo non repellendus? Quae atque vero
            modi quidem! Autem cupiditate fugit doloribus ad amet, asperiores
            provident commodi.
          </p>
        </div>
      </section>

      <section className="portfolio">
        <img src="https://source.unsplash.com/random/200x200" alt="" />
        <img src="https://source.unsplash.com/random/201x200" alt="" />
        <img src="https://source.unsplash.com/random/202x200" alt="" />
        <img src="https://source.unsplash.com/random/203x200" alt="" />
        <img src="https://source.unsplash.com/random/204x200" alt="" />
        <img src="https://source.unsplash.com/random/205x200" alt="" />
        <img src="https://source.unsplash.com/random/206x200" alt="" />
        <img src="https://source.unsplash.com/random/207x200" alt="" />
        <img src="https://source.unsplash.com/random/208x200" alt="" />
      </section>
      <footer>
        <p>Cancionero Popular &copy; 2021</p>
      </footer>
    </div>
  );
};

export default Main;
