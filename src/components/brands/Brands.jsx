import "./Brands.scss";
import React from "react";
import amazonImg from "../../img/brands/Amazon.png";
import hmImg from "../../img/brands/HM.png";
import lacosteImg from "../../img/brands/Lacoste.png";
import levisImg from "../../img/brands/Levis.png";
import obeyImg from "../../img/brands/Obey.png";
import shopifyImg from "../../img/brands/Shopify.png";

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
          <li>
            <a href="#!">
              <img src={hmImg} alt="" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={amazonImg} alt="" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={lacosteImg} alt="" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={levisImg} alt="" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={shopifyImg} alt="" />
            </a>
          </li>
          <li>
            <a href="#!">
              <img src={obeyImg} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Brands;
