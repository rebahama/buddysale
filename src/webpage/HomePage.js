import React from "react";
import styles from "../styles/HomePage.module.css";
import { Link } from "react-router-dom";
import pic from "../assets/good.jpg";
import review from "../assets/review.jpg";
import laptop from "../assets/laptop.jpg";
import { Alert, Carousel, Col, Container, Row } from "react-bootstrap";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const HomePage = () => {
  const currentUser = useCurrentUser();

  const loggedIn = (
    <>
      <Alert variant="primary">
        {" "}
        Welcome {currentUser?.username}{" "}
        <Link className={styles.LinkColorName} to="/createsale">
          {" "}
          click here to create a sale.{" "}
        </Link>
      </Alert>
      :
    </>
  );

  const createAccount = (
    <>
      <h2 className={styles.IntroText}> Click here to create account </h2>
      <Link className={styles.IntroBtn} to="createaccount">
        Click here
      </Link>
    </>
  );
  return (
    <Container fluid>
      <Row md={12}>
        {currentUser ? loggedIn : ""}
        <Col className={styles.CityImage}>
          <h1 className={styles.IntroText}>
            Buddysale The fast way to start selling your item!
          </h1>
          {currentUser ? "" : createAccount}
        </Col>
      </Row>

      <Row md={12} className={styles.SectionThree}>
        <div className={styles.carouselContainer}>
          <h2 className={styles.IntroText}>
            Check out what our user thinks ouf us
          </h2>
          <Col md={4}>
            <Carousel fade>
              <Carousel.Item>
                <img className="d-block w-100" src={pic} alt="First slide" />
                <Carousel.Caption>
                  <h3>Rebas</h3>
                  <p> Rating: 5/5</p>
                  <p>Really simple and fast to use</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={laptop}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Johndoe</h3>
                  <p> 4/5</p>
                  <p>I love that you can filter based on a city</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={review} alt="Third slide" />

                <Carousel.Caption>
                  <h3> Steve</h3>
                  <p>5/5</p>
                  <p>
                    Simply amazing, love that you can save an ad and review it
                    later
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

      <Row md={12} className={styles.Footer}>
        <Col>
          <div>
            <ul>
              <li className={styles.FooterContent}>
                <hr className={styles.FooterLine} />
                <i className="fas fa-regular fa-copyright"></i>
                2023 Rebas
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
