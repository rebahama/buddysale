import React from "react";
import styles from "../styles/HomePage.module.css";
import { Link, NavLink } from "react-router-dom";
import pic from "../assets/good.jpg";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";

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


      <Row md={12} className={styles.SectionThree}>
        
        <div className={styles.carouselContainer}>
        <h2  className={styles.IntroText}> Check out what our user thinks ouf us</h2>
          <Col md={4}>
            <Carousel fade>
              <Carousel.Item>
                <img className="d-block w-100" src={pic} alt="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={pic} alt="Second slide" />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={pic} alt="Third slide" />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </div>
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
            <hr className={styles.HrLine} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
