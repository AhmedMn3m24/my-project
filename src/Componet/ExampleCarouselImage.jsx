
import React from 'react';
import PropTypes from 'prop-types';
import './ExampleCarouselImage.css'; // Optional: for custom styling
import { Image } from 'react-bootstrap';
function ExampleCarouselImage({ text, img }) {
  return (
    <div className="example-carousel-image">
     

      <div className='exmple'>

        <img src={img} />



      </div>



    </div>


  );
}

ExampleCarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
