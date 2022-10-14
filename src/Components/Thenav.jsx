import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default  function MNavbar() {
  return (
   <div className="nnavbar">
    <Navbar bg="dark" variant="dark">
        <Container className='float-end'>
          <Navbar.Brand href="">MARVI</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/details" className='text-muted'>Details</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
   </div>
  );
}

