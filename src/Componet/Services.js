import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesArray = [
    { servicesTitle: 'Marketing', servicesText: 'Even the powerful Pointing has no control about the blind texts' },
    { servicesTitle: 'SEO', servicesText: 'Even the powerful Pointing has no control about the blind texts' },
    { servicesTitle: 'UI/UX', servicesText: 'Even the powerful Pointing has no control about the blind texts' },
    { servicesTitle: 'Creative', servicesText: 'Even the powerful Pointing has no control about the blind texts' },
    { servicesTitle: 'Optimization', servicesText: 'Even the powerful Pointing has no control about the blind texts' },
    { servicesTitle: 'Business Strategy', servicesText: 'Even the powerful Pointing has no control about the blind texts' },
];


const cardData = [
    { title: 'Marketing 1', text: 'Even the powerful Pointing has no control about the blind texts' },
    { title: 'SEO', text: 'Even the powerful Pointing has no control about the blind texts.' },
    { title: 'UI/UX', text: 'Even the powerful Pointing has no control about the blind texts.' },
];

const CardComponent = ({ title, text }) => (
    <Card id="card3" style={{ width: '18rem', margin: '1rem' }}>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
        </Card.Body>
    </Card>
);

const ServiceCard = ({ servicesTitle, servicesText }) => (
    <Card id="serv" style={{ width: '18rem', margin: '1rem' }}>
        <Card.Body>
            <Card.Title>{servicesTitle}</Card.Title>
            <Card.Text>{servicesText}</Card.Text>
        </Card.Body>
    </Card>
);


const DataArray = [

    { datatitle: 'Even the powerful Pointing has no control', dataText: 'High Quality Desgin', dataImg: 'https://preview.colorlib.com/theme/unbrew/images/image_3.jpg' },
    { datatitle: 'Even the powerful Pointing has no control', dataText: 'High Quality Desgin', dataImg: 'https://preview.colorlib.com/theme/unbrew/images/image_3.jpg' },
    { datatitle: 'Even the powerful Pointing has no control', dataText: 'High Quality Desgin', dataImg: 'https://preview.colorlib.com/theme/unbrew/images/image_3.jpg' },

]






function Services(dataImg,datatitle,dataText) {
    return (
        <>
            <div className="bg">
                <div className="text">
                    <h2>Services</h2>
                    <p>This is a flexible page that you can <br />easily edit and modify as much as you need to create
                        an awesome interior page for your site.</p>
                </div>
                <div className="ser">
                    <h3>
                        <span className="sapn2">Our Services</span> <br />
                        <span>We Provide A Lot<br />of Cool Services</span>
                    </h3>
                    <p id="pragraph"> Contrary to popular belief,<br /> Lorem Ipsum is not simply random
                        text. It has roots in a piece of classical Latin<br /> literature from 45 BC,
                        making it over 2000 years old. Richard McClintock,<br /> a Latin professor
                        at Hampden-Sydney College in Virginia, <br />looked up one of the more obscure Latin words, consectetur,
                        from<br /> a Lorem Ipsum passage, and going through the cites of the word in classical literature<br />
                        discovered the undoubtabl</p>
                    <button>Learn More</button>
                </div>
                <Container>
                    <Row className="cards">
                        {servicesArray.map((services, index) =>(
                            <Col key={index} md={4}>
                                <ServiceCard {...services} />
                            </Col>
                        ))}
                    </Row>
                </Container>

                <div id="hpy">
                    <Container className="card2">
                        <h4 id="pragraph4">Happy Customers</h4>

                        <Row>
                            {cardData.map((card, index) => (
                                <Col key={index} md={4}>
                                    <CardComponent {...card} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                    <div className="fotr">
                        <p id="pragraph5">Why Choose Us
                            Easy Management for Your Businesses
                            Far far away, behind the word mountains, far from the countries Vokalia
                            and Consonantia,
                            <br />
                            there live the blind texts.
                            <b /> Separated they live in Bookmarksgrove.</p>

                    </div>
                </div>
                            
                <div className='col-3' style={{ margin: 30 }}><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={dataImg} />
                    <Card.Body>
                        <Card.Title>{datatitle}</Card.Title>
                        <Card.Text style={{ fontWeight: 'bold' }}>
                            {dataText}
                        </Card.Text>
                       
                    </Card.Body>
                </Card>

                </div>

                {DataArray.map((service, index) => (
                    <Services key={index} service={service} />
                ))}
            </div>

        </>

    );
}

export default Services;
