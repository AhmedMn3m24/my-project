import React from "react";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import Services from './Services';
import Pricing from './Pricing';
import Contact from './Contact';
import ErrorBoundary from './ErrorBoundary';
import About from './About';
import ProductCard from './ProductCard';
import Shopping from './Shopping';
import Shop from './ShoppingList';
import Section from './Section';
import Footer from './Footer';


const productsArray = [
  { productTitle: 'product1', productDescription: 'Lorem Ipsum is simply dummy text of the printing', productImage: "https://m.media-amazon.com/images/I/6120MpTA0aL._AC_UL320_.jpg" },
  { productTitle: 'product2', productDescription: 'Lorem Ipsum is simply dummy text of the printing', productImage: "https://m.media-amazon.com/images/I/6120MpTA0aL._AC_UL320_.jpg" },
  { productTitle: 'product3', productDescription: 'pLorem Ipsum is simply dummy text of the printing', productImage: "https://m.media-amazon.com/images/I/6120MpTA0aL._AC_UL320_.jpg " },
  { productTitle: 'product5', productDescription: 'Lorem Ipsum is simply dummy text of the printing', productImage: "https://m.media-amazon.com/images/I/6120MpTA0aL._AC_UL320_.jpg " },
  { productTitle: 'product6', productDescription: 'Lorem Ipsum is simply dummy text of the printing', productImage: "https://m.media-amazon.com/images/I/6120MpTA0aL._AC_UL320_.jpg " },
  { productTitle: 'product6', productDescription: 'Lorem Ipsum is simply dummy text of the printing', productImage: "https://m.media-amazon.com/images/I/6120MpTA0aL._AC_UL320_.jpg " },
]


const shopArray = [
  { shopTitle: 'Welcome ', shopText: 'Lorem Ipsum is simply dummy text of the printing ', shopImg: 'https://m.media-amazon.com/images/I/81OFxhFWmML._AC_SY200_.jpg' },
  { shopTitle: 'Welcome ', shopText: 'Lorem Ipsum is simply dummy text of the printing', shopImg: 'https://m.media-amazon.com/images/I/81OFxhFWmML._AC_SY200_.jpg' },
  { shopTitle: 'Welcome ', shopText: 'Lorem Ipsum is simply dummy text of the printing  ', shopImg: 'https://m.media-amazon.com/images/I/81OFxhFWmML._AC_SY200_.jpg' },
  { shopTitle: 'Welcome ', shopText: 'Lorem Ipsum is simply dummy text of the printing ', shopImg: 'https://m.media-amazon.com/images/I/71yEVu1OiKL._AC_SL1500_.jpg' },
  { shopTitle: 'Welcome ', shopText: 'Lorem Ipsum is simply dummy text of the printing ', shopImg: 'https://m.media-amazon.com/images/I/71yEVu1OiKL._AC_SL1500_.jpg' },
  { shopTitle: 'Welcome ', shopText: 'Lorem Ipsum is simply dummy text of the printing ', shopImg: 'https://m.media-amazon.com/images/I/71yEVu1OiKL._AC_SL1500_.jpg' },


]

const SerArray = [
  { serviesTitle: 'Branding', serviesText: 'Its our philosophy and the way approach our works, our teams, our clients and see everywhere', ServiesImg: 'https://m.media-amazon.com/images/I/7173p0j-mbL._AC_UL320_.jpg' },
  { serviesTitle: 'Branding', serviesText: 'Its our philosophy and the way approach our works, our teams, our clients and see everywhere', ServiesImg: 'https://m.media-amazon.com/images/I/7173p0j-mbL._AC_UL320_.jpg' },
  { serviesTitle: 'Branding', serviesText: 'Its our philosophy and the way approach our works, our teams, our clients and see everywhere', ServiesImg: 'https://m.media-amazon.com/images/I/7173p0j-mbL._AC_UL320_.jpg' },
  { serviesTitle: 'Branding', serviesText: 'Its our philosophy and the way approach our works, our teams, our clients and see everywhere', ServiesImg: 'https://m.media-amazon.com/images/I/7173p0j-mbL._AC_UL320_.jpg' },
  { serviesTitle: 'Branding', serviesText: 'Its our philosophy and the way approach our works, our teams, our clients and see everywhere', ServiesImg: 'https://m.media-amazon.com/images/I/7173p0j-mbL._AC_UL320_.jpg' },
  { serviesTitle: 'Branding', serviesText: 'Its our philosophy and the way approach our works, our teams, our clients and see everywhere', ServiesImg: 'https://m.media-amazon.com/images/I/7173p0j-mbL._AC_UL320_.jpg' },
]
const CardsArray = [

  { cardTitle: 'Creativity', cardText: 'Its our philosophy and the way approach our works, our teams, our clients and see everywhere' },
  { cardTitle: 'Creativity', cardText: 'Its our philosophy and the way approach our works, our teams, our clients and see everywhere' },
  { cardTitle: 'Creativity', cardText: 'Its our philosophy and the way approach our works, our teams, our clients and see everywhere' },
  { cardTitle: 'Creativity', cardText: 'Its our philosophy and the way approach our works, our teams, our clients and see everywhere' },
  { cardTitle: 'Creativity', cardText: 'Its our philosophy and the way approach our works, our teams, our clients and see everywhere' },
  { cardTitle: 'Creativity', cardText: 'Its our philosophy and the way approach our works, our teams, our clients and see everywhere' },


]
function Home() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="item-1">
          <ExampleCarouselImage img="https://www.cxtoday.com/wp-content/uploads/2022/03/ecommerce-3.png" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='item-2'>
          <ExampleCarouselImage text="Second slide" img="https://elysiamstudio.com/wp-content/uploads/2022/11/ECOMMERCE-PHOTO.webp" />
          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" img="https://elysiamstudio.com/wp-content/uploads/2022/11/ECOMMERCE-PHOTO.webp" className='itme-3' />
          <Carousel.Caption>


          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='container'>
        <div className='row'>
          {productsArray.map((product, index) => <ProductCard {...product} key={index} />)}
        </div>
      </div>
      <About />


      <Section />
      <h3 id="Serr">We are with these services</h3>
      <div className='container'>
        <div className='row'>
          {SerArray.map((section, index) => (<Section {...section} key={index} />))}
        </div>

      </div>

      <Shopping />
      <h5 style={{ fontSize: '30px', fontFamily: 'cursive', textDecoration: 'underline' }}>Our Works Gallery</h5>
      <div className='container'>
        <div className='row'>
          {CardsArray.map((card, index) => (<Shopping {...card} key={index} />))}
        </div>
      </div>
      <Footer />


      <Pricing />

    </>
  );
}

export default Home; 