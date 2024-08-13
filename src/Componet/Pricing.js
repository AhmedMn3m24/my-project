import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const PriceAarry=[
{pricetitle:'BASIC', priceText:'$40'},
{pricetitle:'STANDAND', priceText:'$50'},
{pricetitle:'PRIMEM', priceText:'$60'},


]

function Pricing({pricetitle,priceText}) {

    return (
<>
      <h2> PRICING TABLE</h2>

      <div className="container">
      <div className="row">
        <div className="col-3">
      <Card style={{ width: '18rem', margin:50 }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{pricetitle}</Card.Title>
        <Card.Text>
        {priceText}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
      </div>

      {PriceAarry.map((price, index) => <Pricing {...price} key={index} />)}




    </div>
    

    </>

    )
}

export default Pricing;

