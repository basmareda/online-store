import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='h-50 w-75 bg-light mx-auto  mb-5'>

   
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="First slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Second slide"
        />

        </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Third slide"
        />

            </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://images.pexels.com/photos/1036808/pexels-photo-1036808.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="First slide"
        />
        </Carousel.Item>
    </Carousel>

    <p className='w-100 mt-5 text-danger fw-bold fs-2'> Most Popular Products</p>
<div className='most mt-5 mb-5 d-flex jusify-content-evenly'>
 
<CardGroup>
      <Card  className="col-lg-6">
        
        <Card.Img variant="top" src="https://images.pexels.com/photos/414548/pexels-photo-414548.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title>HP Essential</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </Card.Text>
          <br></br>
         <a href='./details'>  <Button variant="dark"  className="text-capitalize">show details</Button></a>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">The display is sharp and provides enough space for multitasking.</small>
        </Card.Footer>
      </Card>
      <Card  className="col-lg-4">
        <Card.Img variant="top" src="https://images.pexels.com/photos/442575/pexels-photo-442575.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title>HP ZBook</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
          <br></br>
          <a href='./details'>  <Button variant="dark"  className="text-capitalize">show details</Button></a>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">The display provides enough space for multitasking.</small>
        </Card.Footer>
      </Card>
      <Card  className="col-lg-4">
        <Card.Img variant="top" src="https://images.pexels.com/photos/18104/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title>HP Elite</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. 
          </Card.Text>
          <br></br>
          <a href='./details'>  <Button variant="dark"  className="text-capitalize">show details</Button></a>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Its Intel CPU is powerful enough to handle general productivity tasks.</small>
        </Card.Footer>
      </Card>
    </CardGroup>


</div>

<div className='most mt-5 mb-5 d-flex jusify-content-evenly'>
 
<CardGroup>
      <Card  className="col-lg-6">
        
        <Card.Img variant="top" src="https://images.pexels.com/photos/414548/pexels-photo-414548.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title>HP Essential</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </Card.Text>
          <br></br>
         <a href='./details'>  <Button variant="dark"  className="text-capitalize">show details</Button></a>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">The display is sharp and provides enough space for multitasking.</small>
        </Card.Footer>
      </Card>
      <Card  className="col-lg-4">
        <Card.Img variant="top" src="https://images.pexels.com/photos/442575/pexels-photo-442575.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title>HP ZBook</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
          <br></br>
          <a href='./details'>  <Button variant="dark"  className="text-capitalize">show details</Button></a>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">The display provides enough space for multitasking.</small>
        </Card.Footer>
      </Card>
      <Card  className="col-lg-4">
        <Card.Img variant="top" src="https://images.pexels.com/photos/18104/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <Card.Title>HP Elite</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. 
          </Card.Text>
          <br></br>
          <a href='./details'>  <Button variant="dark"  className="text-capitalize">show details</Button></a>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Its Intel CPU is powerful enough to handle general productivity tasks.</small>
        </Card.Footer>
      </Card>
    </CardGroup>



    
</div>

<p className='w-100 mt-5 text-dark fw-bold fs-2'> About Laptops</p>
    <div className='text-start w-75 bg-light fs-4 mt-5 mx-auto text-danger fw-bold'>
      A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a 
      screen and alphanumeric keyboard. Laptops typically have a clam shell form factor with the screen mounted
      on the inside of the upper lid and the keyboard on the inside of the lower lid, although 2-in-1 PCs with a detachable
      keyboard are often marketed as laptops or as having a "laptop mode".
      <div className='text-start fs-4 mt-5 mx-auto'>
       Laptops are folded shut for transportation,and thus are suitable for mobile use.
        They are so named because they can be practically placed on a person's lap when
        being used. Today, laptops are used in a variety of settings, 
    such as at work, in education, for playing games, web browsing, for personal multimedia, and for general home computer use.
    </div>
    </div>
    </div>


  );
}


