import { Button, Card } from "react-bootstrap";

export default function ProductCard({
    productTitle, productDescription, productImage
}) {
    return <div className='col-3' style={{ margin: 50 }}>
        <Card style={{ width: '18rem' }} className='item-1' >
            <Card.Img variant="top" src={productImage} />
            <Card.Body>
                <Card.Title>{productTitle}</Card.Title>
                <Card.Text>
                    {productDescription}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>



        
    </div>
}