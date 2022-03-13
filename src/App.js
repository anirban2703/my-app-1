import TopBar from "./components/topbar/TopBar";
import IntroComp from "./components/introcomp/IntroComp";
// import ProductItemCard from './components/productitemcard/ProductItemCrad'
import ProductPopup from "./components/productpopup/ProductPopup";
import AccordionComp from "./components/accordion/AccordionComp";
import YtProductComp from "./components/YtProduct/YtProductComp";
import "./App.css";

function App() {
  const TaggedProducts = [
    {
      id: 1,
      title: "M.A.C Matte Lipstick - Velvet Teddy",
      product: [
        {
          productid: 1,
          imgurl:
            "https://img3.exportersindia.com/product_images/bc-full/2019/7/6447138/mens-shirts-1563255452-4999364.jpeg",
          productname: "WILD MORA",
          productdescription: "Women’s Shoulder Bag Lorem ipsum ",
          price: "560",
        },
      ],
    },
    {
      id: 2,
      title: "PAC Eyeshadow Brush 102",
      product: [
        {
          productid: 2,
          imgurl:
            "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/noise_cancelling_headphones_700/product_silo_images/Silo_jpg/noise_cancelling_headphones_700_blk_EC_02.jpg/jcr:content/renditions/cq5dam.web.320.320.jpeg",
          productname: "WILD MORA",
          productdescription: "Women’s Shoulder Bag Lorem ipsum ",
          price: "560",
        },
        {
          productid: 3,
          imgurl:
            "https://i.guim.co.uk/img/media/aa566e9b126864e82eaaba02d9445564e9579af7/236_156_4873_2924/master/4873.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f1e5ae217fdac697cb038a7902497efa",
          productname: "WILD MORA",
          productdescription: "Women’s Shoulder Bag Lorem ipsum ",
          price: "560",
        },
        {
          productid: 4,
          imgurl:
            "https://media.wired.com/photos/6014a6587201ff6c1ba30bcb/master/pass/Gear-Apple-Airpods-Max-Angle-SOURCE-Apple.jpg",
          productname: "WILD MORA",
          productdescription: "Women’s Shoulder Bag Lorem ipsum ",
          price: "560",
        },
      ],
    },
    {
      id: 3,
      title: "DIOR Backstage Foundation",
      product: [
        {
          productid: 5,
          imgurl:
            "https://i.pinimg.com/736x/9e/db/dc/9edbdc6f357ad4e1ec6d85aa1c3c711a.jpg",
          productname: "WILD MORA",
          productdescription: "Women’s Shoulder Bag Lorem ipsum ",
          price: "560",
        },
      ],
    },
    {
      id: 4,
      title: "PAC Eyeshadow Brush 102",
      product: [
        {
          productid: 6,
          imgurl:
            "https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp/laptops/img-0224/X-Pro-2022.png",
          productname: "WILD MORA",
          productdescription: "Women’s Shoulder Bag Lorem ipsum ",
          price: "560",
        },
        {
          productid: 7,
          imgurl:
            "https://media.wired.com/photos/5fb2cc575c9914713ead03de/2:3/w_1200,h_1800,c_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg",
          productname: "WILD MORA",
          productdescription: "Women’s Shoulder Bag Lorem ipsum ",
          price: "560",
        },
      ],
    },
    {
      id: 5,
      title: "PAC Eyeshadow Brush 102",
      product: [
        {
          productid: 8,
          imgurl:
            "https://expertreviews.b-cdn.net/sites/expertreviews/files/styles/er_main_wide/public/2022/01/best_mid-range_smartphone_uk_2022_phones_motorola_moto_g200.jpg?itok=rC0Y24Dy",
          productname: "WILD MORA",
          productdescription: "Women’s Shoulder Bag Lorem ipsum ",
          price: "560",
        },
      ],
    },
  ];

  const YtProducts = [
    {
      id: 1,
      productImgs: [
        {
          imgId: 1,
          discount: 65,
          mrp: 1999,
          ratenum:41,
          sellprice: 650,
          brandname: "PIERRE CARDIN",
          brandDescription:
            "Synthetic Leather hand bags for women - Sling Bags for Women - Vegan Leather and Indian  ling Bags for Women - Vegan Lea...",
          productDescription:
            "Specs: Metallic Zip Closure, single large compartment,a small pocket, Metallic Zip Closure, single large compartment,a small single large compartment ...  Read More",
          imgurl:
            "https://5.imimg.com/data5/SELLER/Default/2020/10/SP/IQ/UK/40758102/women-fashion-clothing-500x500.JPG",
        },
        {
          imgId: 2,
          discount: 58,
          mrp: 1999,
          ratenum:41,
          sellprice: 650,
          brandname: "PIERRE CARDIN",
          brandDescription:
            "Synthetic Leather hand bags for women - Sling Bags for Women - Vegan Leather and Indian  ling Bags for Women - Vegan Lea...",
          productDescription:
            "Specs: Metallic Zip Closure, single large compartment,a small pocket, Metallic Zip Closure, single large compartment,a small single large compartment ...  Read More",

          imgurl:
            "https://media.istockphoto.com/photos/african-american-woman-in-jacket-with-hands-in-pockets-looking-at-picture-id1207472153?k=20&m=1207472153&s=612x612&w=0&h=aYoMBd2aQoowzUGpLqEKQIS1AnI6I6Mx1qXWGs8smXM=",
        },
        {
          imgId: 3,
          ratenum:41,
          discount: 85,
          mrp: 1999,
          sellprice: 650,
          brandname: "PIERRE CARDIN",
          brandDescription:
            "Synthetic Leather hand bags for women - Sling Bags for Women - Vegan Leather and Indian  ling Bags for Women - Vegan Lea...",
          productDescription:
            "Specs: Metallic Zip Closure, single large compartment,a small pocket, Metallic Zip Closure, single large compartment,a small single large compartment ...  Read More",
          imgurl:
            "https://assetscdn1.paytm.com/images/catalog/view_item/602271/1617185981227.png",
        },
      ],
    },
    {
      id: 2,
      productImgs: [
        {
          imgId: 4,
          ratenum:41,
          discount: 72,
          mrp: 1999,
          sellprice: 650,
          brandname: "PIERRE CARDIN",
          brandDescription:
            "Synthetic Leather hand bags for women - Sling Bags for Women - Vegan Leather and Indian  ling Bags for Women - Vegan Lea...",
          productDescription:
            "Specs: Metallic Zip Closure, single large compartment,a small pocket, Metallic Zip Closure, single large compartment,a small single large compartment ...  Read More",
          imgurl:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-index-makeup-essentials-1645556621.jpg?crop=0.444xw:0.888xh;0.260xw,0.0673xh&resize=640:*",
        },
        {
          imgId: 5,
          discount: 65,
          mrp: 1999,
          ratenum:41,
          sellprice: 650,
          brandname: "PIERRE CARDIN",
          brandDescription:
            "Synthetic Leather hand bags for women - Sling Bags for Women - Vegan Leather and Indian  ling Bags for Women - Vegan Lea...",
          productDescription:
            "Specs: Metallic Zip Closure, single large compartment,a small pocket, Metallic Zip Closure, single large compartment,a small single large compartment ...  Read More",
          imgurl: "https://www.refinery29.com/images/10361756.jpg",
        },
      ],
    },
    {
      id: 2,
      productImgs: [
        {
          imgId: 6,
          ratenum:41,
          discount: 65,
          mrp: 1999,
          sellprice: 650,
          brandname: "PIERRE CARDIN",
          brandDescription:
            "Synthetic Leather hand bags for women - Sling Bags for Women - Vegan Leather and Indian  ling Bags for Women - Vegan Lea...",
          productDescription:
            "Specs: Metallic Zip Closure, single large compartment,a small pocket, Metallic Zip Closure, single large compartment,a small single large compartment ...  Read More",
          imgurl:
            "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/100001_300866659_060_1.jpg?v=1630674644",
        },
        {
          imgId: 7,
          ratenum:41,
          discount: 88,
          mrp: 1999,
          sellprice: 650,
          brandname: "PIERRE CARDIN",
          brandDescription:
            "Synthetic Leather hand bags for women - Sling Bags for Women - Vegan Leather and Indian  ling Bags for Women - Vegan Lea...",
          productDescription:
            "Specs: Metallic Zip Closure, single large compartment,a small pocket, Metallic Zip Closure, single large compartment,a small single large compartment ...  Read More",
          imgurl:
            "https://hips.hearstapps.com/bpc.h-cdn.co/assets/17/39/classic-guy.jpg?crop=1.0xw:1xh;center,top&resize=480:*",
        },
        {
          imgId: 8,
          ratenum:41,
          discount: 25,
          mrp: 1999,
          sellprice: 650,
          brandname: "PIERRE CARDIN",
          brandDescription:
            "Synthetic Leather hand bags for women - Sling Bags for Women - Vegan Leather and Indian  ling Bags for Women - Vegan Lea...",
          productDescription:
            "Specs: Metallic Zip Closure, single large compartment,a small pocket, Metallic Zip Closure, single large compartment,a small single large compartment ...  Read More",
          imgurl:
            "https://assets.ajio.com/medias/sys_master/root/20210924/LT35/614cfc75aeb269a268a449e4/-473Wx593H-410292833-wgs1-MODEL.jpg",
        },
        {
          imgId: 9,
          ratenum:41,
          discount: 30,
          mrp: 1999,
          sellprice: 650,
          brandname: "PIERRE CARDIN",
          brandDescription:
            "Synthetic Leather hand bags for women - Sling Bags for Women - Vegan Leather and Indian  ling Bags for Women - Vegan Lea...",
          productDescription:
            "Specs: Metallic Zip Closure, single large compartment,a small pocket, Metallic Zip Closure, single large compartment,a small single large compartment ...  Read More",
          imgurl:
            "https://i.pinimg.com/originals/e5/6b/79/e56b799b365e63c41041feb38fb7e965.jpg",
        },
        {
          imgId: 10,
          ratenum:41,
          discount: 56,
          mrp: 1999,
          sellprice: 650,
          brandname: "PIERRE CARDIN",
          brandDescription:
            "Synthetic Leather hand bags for women - Sling Bags for Women - Vegan Leather and Indian  ling Bags for Women - Vegan Lea...",
          productDescription:
            "Specs: Metallic Zip Closure, single large compartment,a small pocket, Metallic Zip Closure, single large compartment,a small single large compartment ...  Read More",
          imgurl:
            "https://qph.fs.quoracdn.net/main-qimg-ce985edff044a89f6db384b2481aea12",
        },
        {
          imgId: 11,
          ratenum:41,
          discount: 55,
          mrp: 1999,
          sellprice: 650,
          brandname: "PIERRE CARDIN",
          brandDescription:
            "Synthetic Leather hand bags for women - Sling Bags for Women - Vegan Leather and Indian  ling Bags for Women - Vegan Lea...",
          productDescription:
            "Specs: Metallic Zip Closure, single large compartment,a small pocket, Metallic Zip Closure, single large compartment,a small single large compartment ...  Read More",
          imgurl:
            "https://img.joomcdn.net/66bedced46d53a06b2dfed693325274b71f3a0b2_original.jpeg",
        },
      ],
    },
  ];
  return (
    <div className="App">
      <TopBar />

      <div className="description">
        <IntroComp />
        <div className="taggedproduct-name">Tagged Products</div>
        {TaggedProducts.map((product) => {
          return <AccordionComp product={product} />;
        })}
        <div className="ytVideos">
          <h2>Shop more Yt videos</h2>
          <p>Checkout my favourite products from Youtube videos</p>
        </div>
        <div>
          {YtProducts.map((prod) => {
            return <YtProductComp product={prod} />;
          })}
        </div>
        {/* <ProductPopup/> */}
      </div>
    </div>
  );
}

export default App;
