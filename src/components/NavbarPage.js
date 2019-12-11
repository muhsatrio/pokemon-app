import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const NavbarPage = () => (
    <div className="NavbarPage">
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>PokemonKu</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">
                        Pokemon List
                    </Nav.Link>
                    <Nav.Link as={Link} to="/my-pokemon">
                        My Pokemon
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
)

export default NavbarPage;

