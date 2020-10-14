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
          title="the lean startup"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/61r1RJFvYyL._SX425_.jpg"
          rating={3}
        />
        <Product
          id="49538094"
          title="product 2"
          price={39.99}
          image="https://images-na.ssl-images-amazon.com/images/I/81OvJrSnnTL._AC_SX425_.jpg"
          rating={4} />
      </div>
      <div className="home_row">
        <Product
          id="4903850"
          title="the 2nd product"
          price={25}
          image="https://images-na.ssl-images-amazon.com/images/I/71A38wgDhmL._SX425_.jpg"
          rating={3}
        />{" "}
        <Product
          id="23445930"
          title="the 3nd product"
          price={60.99}
          image="https://images-na.ssl-images-amazon.com/images/I/61r1RJFvYyL._SX425_.jpg"
          rating={3}
        />{" "}
        <Product
          title="the 4nd product"
          price={65}
          image="https://images-na.ssl-images-amazon.com/images/I/61r1RJFvYyL._SX425_.jpg"
          rating={3}
        />
      </div>
      <div className="home_row">
        <Product
          id="12545930"
          title="the 5nd product"
          price={200}
          image="https://images-na.ssl-images-amazon.com/images/I/61r1RJFvYyL._SX425_.jpg"
          rating={1}
        />
      </div>
    </div>
  );
}

export default Home;
