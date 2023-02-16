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
      <NavLink to="createsale"> <i className="fas fa-solid fa-plus"> </i> Create a sale</NavLink>
      <NavLink to="/" onClick={handleLogOut}> <i className="fas fa-solid fa-arrow-right-from-bracket"> </i> Log out </NavLink>
      
      <NavLink to="mysales"> My sales</NavLink>
      <NavLink to="favorites"> <i className="fas fa-solid fa-star">  Saved ads </i> </NavLink>
    </>
  );
  const loggedOut = (
    <>
      <NavLink to="login"> <i className="fas fa-sign-in-alt"> Log in</i> </NavLink>
      <NavLink to="createaccount"> <i className="fas fa-user-plus"> Create account</i> </NavLink>
    </>
  );
  const currentUser = useCurrentUser();
  return (
    <>
      <Navbar bg="primary" variant="dark" className={`${styles.Links}`}>
        <Container className={styles.all}>
          <NavLink to="/">
            <Navbar.Brand>Navbar</Navbar.Brand>
          </NavLink>
          <Nav className="me-auto"> <NavLink to="/"> <i className="fas fa-home"> Home</i> </NavLink>

            {currentUser ? loggedIn : loggedOut}

            <NavLink to="sales"> <i className="fas fa-solid fa-money-bill"> SaleAds</i> </NavLink>
            <NavLink to="sales/category"> <i className="fas fa-solid fa-bars"> Category</i>  </NavLink>

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
