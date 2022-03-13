import React, { useState } from "react";
import "./ytsmproduct.css";
import ProductPopup from "../productpopup/ProductPopup";
import { Image, Button } from "react-bootstrap";

function YtSmproduct({ productImg, imgarray }) {
  // console.log(imgarray)
  const [trigger, setTrigger] = useState(false);
  // console.log(productImg)
  return (
    <>
     
          <div className="ytsmproductItems" onClick={() => setTrigger(true)}>
            <Image
              key={productImg.imgId}
              id="smproduct"
              src={productImg.imgurl}
              fluid="true"
            />
          </div>
          <ProductPopup imgarray={imgarray} trigger={trigger} setTrigger={setTrigger} />
        </>
        )
}

export default YtSmproduct;
