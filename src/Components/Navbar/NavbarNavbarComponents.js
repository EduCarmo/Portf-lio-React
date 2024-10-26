import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import './NavbarNavbarComponents.css'

const NavbarComponents = () => {

    return (
        <>
            <Navbar expand="lg" style={{ backgroundColor: 'white' }} className="p-4">
                <Container>
                    <Navbar.Brand href="#home" className="logo">Eduardo Carmo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#about" className="navLink">Sobre</Nav.Link>
                            <Nav.Link href="#experience" className="navLink">Experiência</Nav.Link>
                            <Nav.Link href="#projects" className="navLink">Projetos</Nav.Link>
                            <Nav.Link href="#contact" className="navLink">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarComponents;