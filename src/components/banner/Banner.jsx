import React from "react";
import bannerImg from "../../img/images/promo-img.jpg";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__content">
          <div className="banner__img">
            <img src={bannerImg} alt="img" />
          </div>
          <div className="banner__text">
            <div className="banner__title">Payday sale now</div>
            <div className="banner__desc">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </div>
            <div className="banner__date">1 June - 10 June 2021</div>
            <div className="banner__warn">*Terms & Conditions apply</div>
            <div className="banner__btn-wrapper">
              <a href="#!" className="banner__btn">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
