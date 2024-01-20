import React from "react";
import "../Products/Products.css";
import Shop from "./Images/Shopping.png";
import Line from "./Images/Yellow Line.png";
import Coin from "./Images/Coin.png"
import Bita from "./Images/Bitadex.png"
import Link from "./Images/Link.png"
import Rocket from "./Images/Rocket.png"
// import Vector from "./Images/Vector.png"


const productData = [
  {
    id: 1,
    logo: Shop,
    line: Line,
    name: "Bita Marketplace",
    details: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
  },
  {
    id: 2,
    logo: Bita,
    line: Line,
    name: "Bitadex",
    details: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
  },
  {
    id: 3,
    logo: Link,
    line: Line,
    name: "Bitabridge",
    details: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
  },
  {
    id: 4,
    logo: Rocket,
    line: Line,
    name: "Bitapad",
    details: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
  },

  {
    id: 5,
    logo: Coin,
    line: Line,
    name: "BitaLend",
    details: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
  },


];

const Products = () => {
  return (
    <>


      <div className="title-box">
        <h1 className="Title1">Our</h1>
        <h1 className="Title2">Products</h1>
      </div>


      <div className="ptag-box">
        <p>Pellentesque habitant morbi tristique senectus et netus et Pellentesque habitant morbi.</p>
      </div>

      <div className="product-box">
        {productData.map((el) => (
          <div key={el.id} className="product-child">
            
            <img src={el.logo} alt="Product Logo" />

            <h6 className="heading-box">
              {el.name}
              <div>
                <img src={el.line} alt="Line" />
              </div>

            </h6>

            <p className="details-box">{el.details}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
