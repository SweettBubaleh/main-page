import React from "react";
import fbImg from "../../img/socials/fb.svg";
import inImg from "../../img/socials/in.svg";
import instImg from "../../img/socials/inst.svg";
import twImg from "../../img/socials/tw.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__left">
            <div className="footer__left__header">
              <h2 className="footer__left__header__title">FASHION</h2>
            </div>
            <div className="footer__left__desc">
              Complete your style with awesome clothes from us.
            </div>
            <div className="footer__left__row">
              <ul>
                <li>
                  <a href="#!">
                    <img src={fbImg} alt="fb" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src={instImg} alt="fb" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src={twImg} alt="fb" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <img src={inImg} alt="fb" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__right">
            <div className="footer__right__left">
              <ul>
                <li>
                  <span>Company</span>
                </li>
                <li>About</li>
                <li>Contact us</li>
                <li>Support</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="footer__right__midlle">
              <ul>
                <li>
                  <span>Quick Link</span>
                </li>
                <li>Share Location</li>
                <li>Orders Tracking</li>
                <li>Size Guide</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="footer__right__right">
              <ul>
                <li>
                  <span>Legal</span>
                </li>
                <li>Terms & conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
