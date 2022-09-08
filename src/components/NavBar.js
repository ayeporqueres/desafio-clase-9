import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
//-------------------------------------
import CartWidget from './CartWidget'


import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = () => {
    return (
        <header>
            {['xxl'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-1">
                    <Container fluid>
                        <Navbar.Brand >JTS SHOP</Navbar.Brand>
                        <CartWidget items={6} />
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} >
                                    JTS SHOP
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                               
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link>Almacenamiento</Nav.Link>
                                    <Nav.Link>Gabinetes</Nav.Link>
                                    <Nav.Link>Memorias</Nav.Link>
                                    <Nav.Link>Motherboards</Nav.Link>
                                    <Nav.Link>Microprocesadores</Nav.Link>
                                    <Nav.Link>Unidades ópticas</Nav.Link>
                                    <Nav.Link>Placas de video</Nav.Link>
                                </Nav>
                                <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Búsqueda."
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </header>
    );
}

export default NavBar;
