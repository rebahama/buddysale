import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const NavBar = () => {
  const currentUser = useCurrentUser();
  return (
    <>
      <Navbar bg="light" variant="dark">
        <Container className={styles.all}>
            <NavLink to="/">
          <Navbar.Brand>Navbar</Navbar.Brand>
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>

            <NavLink to="createsale"> Create a sale</NavLink>

            <NavLink to="login"> Log in</NavLink>

            <NavLink to="sales"> SaleAds </NavLink>

            {currentUser? <p> {currentUser?.username} </p>: currentUser?.username}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
