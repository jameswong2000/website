import "../style/Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const logo = "../assets/images/logo.png";

function Header() {
    return (
        <Navbar variant="dark" expand="md" fixed="top">
            <Container fluid>
                <Navbar.Brand>
                    <img id="logo" alt="Logo" src={logo} className="d-inline-block"/>
                    <Navbar.Text>James Wong</Navbar.Text>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="nav-links" />
                <Navbar.Collapse id="nav-links"className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                        <Nav.Link href="#about-me">About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;