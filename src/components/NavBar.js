import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import axios from "axios";

const NavBar = () => {
  const setCurrentUser = useSetCurrentUser();

  const handleLogOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const loggedIn = (
    <>
      <NavLink to="createsale">
        <i className="fas fa-solid fa-plus"> </i> Create a sale
      </NavLink>
      <NavLink to="/" onClick={handleLogOut}>
        <i className="fas fa-solid fa-arrow-right-from-bracket"> </i> Log out{" "}
      </NavLink>

      <NavLink to="mysales"> My sales</NavLink>
      <NavLink to="favorites">
        <i className="fas fa-solid fa-star"> </i> Saved ads{" "}
      </NavLink>
    </>
  );
  const loggedOut = (
    <>
      <NavLink to="login">
        <i className="fas fa-sign-in-alt"> </i> Log in{" "}
      </NavLink>
      <NavLink to="createaccount">
        {" "}
        <i className="fas fa-user-plus"> </i> Create account{" "}
      </NavLink>
    </>
  );
  const currentUser = useCurrentUser();
  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className={`${styles.Links}`}
      >
        <Container className={styles.all}>
          <NavLink to="/">
            <Navbar.Brand>Buddysale</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <NavLink to="/">

                <i className="fas fa-home"> </i> Home
              </NavLink>
              {currentUser ? loggedIn : loggedOut}
              <NavLink to="sales">

                <i className="fas fa-solid fa-money-bill"> </i> SaleAds
              </NavLink>
              <NavLink to="sales/category">

                <i className="fas fa-solid fa-bars"> </i> Category
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </>
  );
};

export default NavBar;
