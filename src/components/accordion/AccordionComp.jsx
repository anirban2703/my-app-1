import React from 'react'
import './accordionComp.css'
import ProductCardComp from '../productcard/ProductCardComp'
import {Accordion,Row,Col} from 'react-bootstrap'

function AccordionComp({product}) {
  // console.log(product.product)
  return (
    <Accordion className='accordbtn' key={product.id} flush>
  <Accordion.Item >
    <Accordion.Header id='accordprodtitle'>{product.title}</Accordion.Header>

    <Accordion.Body>
    <Row xs={2} md={2}>
    {product.product.map(productsdetails=>{
        return(        
          <ProductCardComp productsdetails={productsdetails}/>     
        )
      })}
  </Row>
      {/* <div className="cardcomponent">
     
      </div> */}
     
     

    </Accordion.Body>
  </Accordion.Item>
</Accordion>
  )
}

export default AccordionComp
