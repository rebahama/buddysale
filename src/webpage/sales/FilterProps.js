import React, { useState } from "react";
import styles from "../../styles/FilterProps.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FilterProps = (props) => {
  const {
    owner,
    images,
    category_name,
    city_name,
    price,
    title,
    created_at,
    id,
  } = props;

  const [message, setMessage] = useState("");

  const showId = () => {
    return id ? setMessage("You are already on this ad") : console.log("false");
  };

  return (
    <Container>
      <Row>
        <Col className={`${styles.FlexContainer} offset-md-3`} md={6}>
          <div>
            <span className={styles.DateSize}> {created_at}</span>

            <p className={styles.DateSize}> {city_name}</p>
            {images?.length > 1 ? (
              <>
                {images?.splice(0, 1).map((image, index) => (
                  <img
                    key={index}
                    src={image.image}
                    alt="user uploads"
                    className={styles.ImgContainer}
                  />
                ))}
              </>
            ) : (
              <>
                {images?.map((image, index) => (
                  <img
                    key={index}
                    src={image.image}
                    alt="user uploads"
                    className={styles.ImgContainer}
                  />
                ))}
              </>
            )}

            <p> {title}</p>
          </div>

          <div className={styles.InfoContianer}>
            <p> Category: {category_name}</p>
            <p> Price: {price}</p>
            <Link
              to={`/sales/${id}`}
              className={styles.ViewBtn}
              onClick={showId}
            >
              View more
              
            </Link>
            <p>{message}</p>
          </div>
         
        </Col>
      </Row>
    </Container>
  );
};

export default FilterProps;
