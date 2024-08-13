import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Basic() {
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-3'> 
    <Card style={{ width: '18rem' }} className='item-2'>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXSsWMyXpT3jg64Om7Q3SkTOg5QYzRJXH_pg&s" />
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
export default Basic;