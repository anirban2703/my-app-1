import React from "react";
import "./productcardcomp.css";
import { Card, Button } from "react-bootstrap";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function ProductCardComp({ productsdetails }) {
  // console.log(productsdetails)
  return (
    <Card id="cardcomp" key={productsdetails.productid}>
      <div className="budget">BUDGET</div>
      <Card.Img id="accordcard-img" src={productsdetails.imgurl} />
        <div className="carddescription">
          <div className="cardTitle">{productsdetails.productname}</div>
          <div className="cardbody">{productsdetails.productdescription}</div>
        </div>
      <div className="pricedetails">
        <div className="price">
          <CurrencyRupeeIcon sx={{ fontSize: 15 }} />
          {productsdetails.price}
        </div>
        <Button id="shopbtn" variant="dark">
          Shop
        </Button>
      </div>
    </Card>
  );
}

export default ProductCardComp;
