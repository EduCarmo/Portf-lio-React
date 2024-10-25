import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import './NavbarNavbarComponents.css'

const NavbarComponents = () => {

    return (
        <>
            <Navbar bg="light" expand="lg" className="shadow-sm">
                <Container>
                    <Navbar.Brand href="#home">Eduardo Carmo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#about">Sobre</Nav.Link>
                            <Nav.Link href="#experience">Experiência</Nav.Link>
                            <Nav.Link href="#projects">Projetos</Nav.Link>
                            <Nav.Link href="#contact">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponents;