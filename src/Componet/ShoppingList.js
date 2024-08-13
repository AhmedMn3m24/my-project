import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Shop({ shopImg, shopText, shopTitle }) {
  return <div className='col-3' style={{ margin: 30 }}><Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={shopImg} />
    <Card.Body>
      <Card.Title>{shopTitle}</Card.Title>
      <Card.Text style={{ fontWeight: 'bold' }}>
        {shopText}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </div>


}


export default Shop;