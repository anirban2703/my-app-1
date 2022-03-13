import React from 'react'
import {Card, Button} from 'react-bootstrap'
// import './productitemcard.css'
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CancelIcon from '@mui/icons-material/Cancel';


function ProductItemCrad(props) {
  console.log(props)
  return (
    <Card className='productItemcard'>
        <div className="card-budget cardhead">BUDGET</div>
        <div onClick={()=>props.setTrigger(false)}>
        <CancelIcon className="cardhead cardhead-icon" fontSize='large'/>
        </div>
      
        <div className="cardhead-discount">65% Off</div>
       
  <Card.Img className='productItemcard-img' src="https://i.pinimg.com/originals/e5/6b/79/e56b799b365e63c41041feb38fb7e965.jpg" />
  <Card.Body>
     <div className="productitem-name">
         <span className='brand-name'>Brand name</span>
         <div className="rating">
             4.4
             <StarIcon style={{color:'#F0A500'}}/>
             <span>(21)</span>
         </div>
     </div>
    <Card.Text className='bard-description'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit., quo delectus dignissimos. Suscipit, esse dolorem?
    </Card.Text>
    <div className="pricing">
        <div className="org-price">1999</div>
        <div className='selling-pice'><CurrencyRupeeIcon fontSize='small'/>699</div>
        <div className="discount">65%OFF</div>
    </div>
    <div className="product-description">
        Lorem ipsum dolor sit amet,  maiores sit laudantium fugiat? Architecto distinctio iste nemo delectus.. 
        <a href=''>Readmore</a>
    </div>
    <Button id='black-btn'><ShoppingBagOutlinedIcon/>{' '}Shop on Brand</Button>
    <Button id='wp-btn' ><WhatsAppIcon/>{' '}Save on Whatsapp</Button>
  </Card.Body>
</Card>
  )
}

export default ProductItemCrad
