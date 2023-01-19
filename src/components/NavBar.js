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
      <NavLink to="createsale"> Create a sale</NavLink>
      <NavLink to="/" onClick={handleLogOut}>
        Log Out
      </NavLink>
    </>
  );
  const loggedOut = (
    <>
      <NavLink to="login"> Log in</NavLink>
      <NavLink to="createaccount"> Create account</NavLink>
    </>
  );
  const currentUser = useCurrentUser();
  return (
    <>
      <Navbar bg="danger" variant="dark" className={`${styles.Links}`}>
        <Container className={styles.all}>
          <NavLink to="/">
            <Navbar.Brand>Navbar</Navbar.Brand>
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>

            {currentUser ? loggedIn : loggedOut}

            <NavLink to="sales"> SaleAds </NavLink>
            <NavLink to="category"> Category </NavLink>

            {currentUser ? (
              <p> {currentUser?.username} </p>
            ) : (
              currentUser?.username
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
