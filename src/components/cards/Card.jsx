import React from "react";
import "./Card.scss";
import arrow from "../../img/icons/arrow.svg";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="img" className="card__img" />
      <div className="card__body">
        <div className="card__text">
          <div className="card__title">{props.title}</div>
          <div className="card__desc">Explore Now!</div>
        </div>
        <div className="card__icon">
          <img src={arrow} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Card;
