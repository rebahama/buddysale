import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/SaleProps.module.css"


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
              <img key={index} src={image.image} alt="user uploads"  className={styles.CarouselImg} />
            ))}
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {images?.slice(1, 2).map((image, index) => (
              <img key={index} src={image.image} alt="user uploads" className={styles.CarouselImg} />
            ))}

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
             {images?.slice(2, 3).map((image, index) => (
              <img key={index} src={image.image} alt="user uploads" className= {styles.CarouselImg} />
            ))}
          </Carousel.Item>
        </Carousel>
        
        <Container>
        <hr className={styles.HrLine}/>
          <Row>
            <Col md={12}>
          <div className={styles.profileInfo}>
          <img src={profile_image} alt="user profile" className={styles.ProfileImage}/>
        <p> Seller: {owner}</p>
        <p> Member since: {created_at}</p>
        
        </div>
        </Col>
        </Row>
        <hr className={styles.HrLine}/>
        <p> {title}</p>
        <p> {category_name}</p>
        <p> {price}</p>
        <p> {city_name}</p>
        <p> {created_at}</p>
        {content}
        </Container>
      </div>
    </div>
  );
};

export default SaleProps;
