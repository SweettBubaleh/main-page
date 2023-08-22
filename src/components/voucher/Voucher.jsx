import React from "react";
import voucherImg from "../../img/images/vouchers-img.png";
import appStoreImg from "../../img/icons/app-store.png";
import googlePlayImg from "../../img/icons/google-play.png";
import "./Voucher.scss";

const Voucher = () => {
  return (
    <section className="voucher">
      <div className="container">
        <div className="voucher__content">
          <div className="voucher__text">
            <div className="voucher__header">
              <h2 className="voucher__title">
                DOWNLOAD APP & GET THE VOUCHER!
              </h2>
            </div>
            <div className="voucher__desc">
              Get 30% off for first transaction using Rondovision mobile app for
              now.
            </div>
            <div className="voucher__stores">
              <img
                className="voucher__stores-btn"
                src={appStoreImg}
                alt="img"
              />
              <img
                className="voucher__stores-btn"
                src={googlePlayImg}
                alt="img"
              />
            </div>
          </div>
          <img src={voucherImg} alt="img" />
        </div>
      </div>
    </section>
  );
};

export default Voucher;
