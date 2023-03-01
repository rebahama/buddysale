import React, { useState } from "react";
import styles from "../../styles/FilterProps.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FilterProps = (props) => {
  const { images, category_name, city_name, price, title, created_at, id } =
    props;

  const [message, setMessage] = useState("");

  const showId = () => {
    return id ? setMessage("You are already on this ad") : console.log("false");
  };

  return (
    <Container>
      <Row>
        <Col
          className={`${styles.FlexContainer} offset-md-3 offset-sm-3`}
          md={6}
          sm={6}
          xs={12}
        >
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
                    height="400"
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
                    height="400"
                  />
                ))}
              </>
            )}
            <Link
              to={`/sales/${id}`}
              onClick={showId}
              className={styles.ViewBtn}
            >
              <p> {title}</p>
            </Link>
          </div>

          <div className={styles.InfoContianer}>
            <p> Category: {category_name}</p>
            <p> Price: {price}</p>
            <p>{message}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FilterProps;
