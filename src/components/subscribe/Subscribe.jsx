import React from "react";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe__content">
          <div className="subscribe__header">
            <h2 className="subscribe__title">
              JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
            </h2>
          </div>
          <div className="subscribe__desc">
            Type your email down below and be young wild generation
          </div>
          <div className="subscribe__form">
            <div className="subscribe__form__content">
              <div className="subscribe__form__content__text">
                Add your email here
              </div>
              <div className="subscribe__form__content__btn">
                <a href="#!" className="btn__text">
                  SEND
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
