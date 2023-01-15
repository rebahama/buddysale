import React from "react";
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
  return (
    <Container>
      <Row>
        <Col className={styles.FlexContainer}md={6}>
        {images?.splice(0, 1).map((image, index) => (
            <img key={index} src={image.image} alt="user uploads" className={styles.ImgContainer} />
          ))}
<p> {title}</p>
<p> {city_name}</p>-
<p> {created_at}</p>
<p> {owner}</p>
    <div className={styles.InfoContianer}> 
          
          
          
          <p> {category_name}</p> 
          <p> {price}</p>
         
         
          
          <Link to={`/sales/${id}`}>View more</Link>
          
          </div>
          
        </Col>
        
      </Row>
    </Container>
  );
};

export default FilterProps;
