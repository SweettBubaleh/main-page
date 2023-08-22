import React from "react";
import "./Young.scss";
import Card from "../cards/Card";
import promo1 from "../../img/images/promo-01.jpg";
import promo2 from "../../img/images/promo-02.jpg";

const Young = () => {
  return (
    <section className="young">
      <div className="container">
        <div className="young__header">
          <h2 className="title-2">Young’s Favourite</h2>
        </div>
        <div className="young__cards">
          <Card title="Trending on instagram" img={promo1} />
          <Card title="All Under $40" img={promo2} />
        </div>
      </div>
    </section>
  );
};

export default Young;
