import React from "react";
import "./productpopup.css";
import { Card, Button } from "react-bootstrap";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CancelIcon from "@mui/icons-material/Cancel";

function ProductPopup(props) {
  console.log(props);
  return props.trigger ? (
    <div className="popup-div">
      {props.imgarray.map((e) => {
        return (
          <>
            <Card id="productItemcard">
              <div className="card-budget cardhead">BUDGET</div>
              <div onClick={() => props.setTrigger(false)}>
                <CancelIcon
                  className="cardhead cardhead-icon"
                  fontSize="large"
                />
              </div>

              <div className="cardhead-discount">{e.discount}% Off</div>

              <Card.Img
                id="productItemcard-img"
                src={e.imgurl}
              />
              <Card.Body>
                <div className="productitem-name">
                  <span className="brand-name">{e.brandname}</span>
                  <div className="rating">
                    4.4
                    <StarIcon style={{ color: "#F0A500" }} />
                    <span>({e.ratenum})</span>
                  </div>
                </div>
                <Card.Text className="brand-description">
                  {e.brandDescription}
                </Card.Text>
                <div className="pricing">
                  <div className="org-price">{e.mrp}</div>
                  <div className="selling-pice">
                    <CurrencyRupeeIcon fontSize="small" />
                    {e.sellprice}
                  </div>
                  <div className="discount">{e.discount}%OFF</div>
                </div>
                <div className="product-description">
                 {e.productDescription}
                  <a href="">Readmore</a>
                </div>
                <Button id="black-btn">
                  <ShoppingBagOutlinedIcon /> Shop on Brand
                </Button>
                <Button id="wp-btn">
                  <WhatsAppIcon /> Save on Whatsapp
                </Button>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </div>
  ) : (
    ""
  );
}

export default ProductPopup;
