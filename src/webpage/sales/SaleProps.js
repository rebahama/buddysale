import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/SaleProps.module.css";

const SaleProps = (props) => {
  const {
    owner,
    images,
    category_name,
    city_name,
    price,
    title,
    created_at,
    id,
    profile_image,
    content,
  } = props;

  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            {images?.slice(0, 1).map((image, index) => (
              <img
                key={index}
                src={image.image}
                alt="user uploads"
                className={styles.CarouselImg}
              />
            ))}
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {images?.slice(1, 2).map((image, index) => (
              <img
                key={index}
                src={image.image}
                alt="user uploads"
                className={styles.CarouselImg}
              />
            ))}

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            {images?.slice(2, 3).map((image, index) => (
              <img
                key={index}
                src={image.image}
                alt="user uploads"
                className={styles.CarouselImg}
              />
            ))}
          </Carousel.Item>
        </Carousel>

        <Container>
          <p> {title}</p>
          <hr className={styles.HrLine} />
          <Row>
            <Col md={12}>
              <div className={styles.profileInfo}>
                <img
                  src={profile_image}
                  alt="user profile"
                  className={styles.ProfileImage}
                />
                <p> Seller: {owner}</p>
                <p> Member since: {created_at}</p>
              </div>
            </Col>
          </Row>
          <hr className={styles.HrLine} />
          <div className={styles.FactContainer}>
            <h3> Facts:</h3>
            <p> Category: {category_name}</p>
            <p> Price: {price}</p>
            <p> City: {city_name}</p>
            <p> Created: {created_at}</p>
          </div>
          <hr className={styles.HrLine} />
          {content}
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </Container>
      </div>
    </div>
  );
};

export default SaleProps;
