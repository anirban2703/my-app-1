import React from "react";
import "./ytproductcmp.css";
import Ytplayer from "../ytPlayer/Ytplayer";
import YtSmproduct from "../ytsmproduct/YtSmproduct";
import { Button } from "react-bootstrap";

function YtProductComp({ product }) {
  // console.log(product);
  return (
    <div key={product.id} className="ytprodElement">
      <Ytplayer />
      <p className="ytprod-des">Products in this video</p>
      <div className="productlist">
        {product.productImgs.length > 3 ? (
          <>
            <YtSmproduct productImg={product.productImgs[1]} imgarray={product.productImgs}/>
            <YtSmproduct productImg={product.productImgs[2]} imgarray={product.productImgs}/>
            <YtSmproduct productImg={product.productImgs[3]} imgarray={product.productImgs}/>
            
            <div className="moreProducts">
            <YtSmproduct productImg={product.productImgs[4]} imgarray={product.productImgs}/>
              <div className="remain-more">
                <div className="remainnum">
                {`+${product.productImgs.length - 4}`}
                </div>
                <div className="more"> more</div>
               
              </div>
             
             
            </div>
          </>
        ) : (
          <>
            {product.productImgs.map((prod) => {
              return <YtSmproduct productImg={prod} imgarray={product.productImgs}/>;
            })}
          </>
        )}
      </div>
      <Button id="taggedbtn" variant="dark">
        View Tagged Products
      </Button>
    </div>
  );
}

export default YtProductComp;
