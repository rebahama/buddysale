import React from "react";
import styles from "../styles/HomePage.module.css";
import { Link, NavLink } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container fluid>
      <Row md={12}>
        <Col className={styles.CityImage}>
          <NavLink to="createaccount"> create account </NavLink>
          <h1 className={styles.IntroText}>

            Welcome to this page and you can sell alot of stuff here
          </h1>

          <h2 className={styles.IntroText}> Click here to create account </h2>
          <Link className={styles.IntroBtn} to="createaccount">
            Click here
          </Link>
        </Col>
      </Row>

      <Row md={12} className={styles.BlackBackground}>
        <Col>
          <NavLink to="createaccount"> create account </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
