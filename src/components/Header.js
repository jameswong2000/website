import Logo from '../images/logo.png'
import '../style/Header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Navbar variant="dark" expand="sm">
                <Container fluid>
                    <Navbar.Brand>
                        <img id="logo" alt="Logo" src={Logo} className="d-inline-block"/>
                        <Navbar.Text>James Wong</Navbar.Text>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="nav-links" />
                    <Navbar.Collapse id="nav-links"className="justify-content-end">
                        <Nav>
                            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="#Gallery">Gallery</Nav.Link>
                            <Nav.Link href="#About Me">About Me</Nav.Link>
                            <Nav.Link href="#About Webpage">About Webpage</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;