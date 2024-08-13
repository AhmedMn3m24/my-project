import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

 function Section({ serviesTitle, serviesText, ServiesImg }) {

   return <div className='col-3' style={{ margin: 50 }}>
    <Card  id ="crds"style={{ width: '18rem' }}>

     <Card.Img variant="top" src={ServiesImg} />
     <Card.Body>
       <Card.Title>{serviesTitle}</Card.Title> <Card.Text style={{ fontWeight: 'bold' ,fontSize:'20px'}}>
        {serviesText}
      </Card.Text>  
     </Card.Body>
   </Card>
 </div>


}


export default Section;