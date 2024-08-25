
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Nbar from "react-bootstrap/Navbar"

const Navbar = () => {
    return (
        <Nbar expand="lg" className="bg-body-tertiary">   
            <Container>
                <Nbar.Brand href='/'>
                        Football leagues API
                </Nbar.Brand>
                <Nbar.Toggle aria-controls="basic-navbar-nav" />
                <Nbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/leagues'>
                            Leagues
                        </Nav.Link>
                    </Nav>
                </Nbar.Collapse>
            </Container>
        </Nbar>
    )
}

export default Navbar