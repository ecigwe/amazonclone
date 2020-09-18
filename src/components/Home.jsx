import React from "react";
import amazonimg from "../img/homeimg.jpg";
import leanstartup from "../img/leanstartup.png";

import "../css/home.css";
import Product from "./Product";
function Home() {
  return (
    <div>
      <div className="home">
        <img className="home__image" src={amazonimg} alt="home" />
      </div>
      <div className="home__row">
        <Product
          id={2}
          title="Beautiful Piano"
          image={leanstartup}
          price={234}
          rating={2}
        />
        <Product
          id={2}
          title="Beautiful Piano"
          image={leanstartup}
          price={234}
          rating={2}
        />
      </div>
    </div>
  );
}

export default Home;
