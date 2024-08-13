import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards ({ cardTitle, cardText}) {
  return (
   <Card  id="caaard"  style={{ width: '35rem' , margin: 50, paddingRight: 20 }}>
      
        <Card.Body>
          <Card.Title id ="Creativity">{cardTitle}</Card.Title>
          <Card.Text id="p">
                    {cardText}
          </Card.Text>
        </Card.Body>
      </Card>
     
  );  
}

export default Cards;