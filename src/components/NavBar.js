import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className={styles.all}>
            <NavLink to="home">
          <Navbar.Brand>Navbar</Navbar.Brand>
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
