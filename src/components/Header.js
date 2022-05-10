import Logo from '../images/logo.png'
import '../style/Header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
    return (
        <Navbar variant="dark" expand="sm">
            <Container fluid>
                <Navbar.Brand>
                    <img id="logo" alt="Logo" src={Logo} className="d-inline-block"/>
                    <Navbar.Text>James Wong</Navbar.Text>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="nav-links" />
                <Navbar.Collapse id="nav-links"className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                        <Nav.Link href="#about me">About Me</Nav.Link>
                        <Nav.Link href="#about webpage">About Webpage</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;