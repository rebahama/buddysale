import React from "react";
import styles from "../styles/HomePage.module.css";
import { Link, NavLink } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container fluid>
      <p> ssss </p>
      <Row md={12}>
        <Col className={styles.CityImage}>
          <h1 className={styles.IntroText}>
            Buddysale The fast way to start selling your item!
          </h1>

          <h2 className={styles.IntroText}> Click here to create account </h2>
          <Link className={styles.IntroBtn} to="createaccount">
            Click here
          </Link>
        </Col>
      </Row>

      <Row md={12} className={styles.BlackBackground}>
        <Col>
          <div>
            <ul>
              <li className={styles.BlackBtn}>
                Easy <i className="fas fa-solid fa-check"></i>
              </li>
              <li className={styles.BlackBtn}>
                Free <i className="fas fa-solid fa-star"> </i>
              </li>

              <li className={styles.BlackBtn}>
                Fast <i className="fas fa-solid fa-forward"> </i>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
