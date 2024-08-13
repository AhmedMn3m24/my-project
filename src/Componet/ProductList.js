import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductList() {

  return (
    <> 
    <div className='container'>
      <div className='row'>
        <div className='col-3'> 
    <Card style={{ width: '18rem' }} className='item-4' >
      <Card.Img variant="top" src="holder.js/100px180"  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>  
    </>
  );
}

export default ProductList;