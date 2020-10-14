import React from "react";
import "./Home.css";
import homeimg from "./images/homeimg.jpg";
import Product from "./Product";


function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={homeimg} alt=""></img>
      </div>

      <div className="home_row">
        <Product
          id="12321341"
          title="Fire TV Cube, hands-free with Alexa built in, 4K Ultra HD, streaming media player, released 2019"
          price={99.99}
          image="https://images-na.ssl-images-amazon.com/images/I/415eDd-iH9L._AC_SX425_.jpg"
          rating={4}
        />
        <Product
          id="49538094"
          title="Echo Studio - High-fidelity smart speaker with 3D audio and Alexa"
          price={189.99}
          image="https://images-na.ssl-images-amazon.com/images/I/613HESgMbAL._AC_SX679_.jpg"
          rating={4} />
      </div>
      <div className="home_row">
        <Product
          id="4903850"
          title="Invicta Men's 12846 Specialty Stainless Steel Watch"
          price={25}
          image="https://images-na.ssl-images-amazon.com/images/I/81DO703XPUL._AC_UY741_.jpg"
          rating={3}
        />{" "}
        <Product
          id="23445930"
          title="Samsonite Litesphere DLX HS 2 PC Set 20/28, Charcoal (Model 136768-1174)"
          price={98.24}
          image="https://images-na.ssl-images-amazon.com/images/I/81AqZYroM7L._AC_SX679_.jpg"
          rating={3}
        />{" "}
        <Product
          id="23488930"
          title="Seagate Backup Plus Slim 2 TB External Hard Drive Portable HDD Silver USB 3.0 "
          price={65}
          image="https://images-na.ssl-images-amazon.com/images/I/819j7e4CGCL._AC_SX425_.jpg"
          rating={3}
        />
      </div>
      <div className="home_row">
        <Product
          id="12545930"
          title="SanDisk 64GB Extreme PRO SDXC UHS-I Card - C10, U3, V30, 4K UHD, SD Card - SDSDXXY-064G-GN4IN"
          price={22.49}
          image="https://images-na.ssl-images-amazon.com/images/I/71HmWV-p9ZL._AC_SY550_.jpg"
          rating={1}
        />
      </div>
    </div>
  );
}

export default Home;
