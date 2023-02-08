import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/CategoryPage.module.css";
import { axiosReq } from "../../api/axiosDefault";
import Loader from "../../components/Loader";
import { Col, Container, Row } from "react-bootstrap";

const Category = () => {
  const [loaded, loadedcomplete] = useState(false);
  const [category, setCategory] = useState({
    results: [],
  });

  const [categoryLinks, setCategoryLinks] = useState({
    results: [],
  });

  useEffect(() => {
    const handleData = async () => {
      try {
        const [{ data: category }, { data: categoryLinks }] = await Promise.all(
          [
            axiosReq.get("https://buddy-sale.herokuapp.com/posts/?category=1"),
            axiosReq.get("https://buddy-sale.herokuapp.com/category/"),
          ]
        );
        setCategory(category);
        console.log(category);
        setCategoryLinks(categoryLinks);
        loadedcomplete(true);
      } catch (err) {}
    };
    loadedcomplete(false);
    handleData();
  }, []);

  return (
    <div>
      <h3> Category</h3>
      {loaded ? (
        <>
          <Container className={styles.Container}>
            <Row md={12}>
              <Col md={12}>
                <Link to={`${categoryLinks.results[0].id}`}>
                  <i className={` fas fa-solid fa-couch ${styles.Symbols}`}></i>
                </Link>
                <p className={styles.Letters}>
                
                  {categoryLinks.results[0].title}
                </p>

                <Link to={`${categoryLinks.results[1].id}`}>
                <i className={` fas fa-solid fa-futbol ${styles.Symbols}`}></i>
                </Link>
                <p> {categoryLinks.results[1].title}</p>

                <Link to={`${categoryLinks.results[2].id}`}>
                <i className={` fas fa-solid fa-user-tie ${styles.Symbols}`}></i>
                </Link>
                <p> {categoryLinks.results[2].title}</p>

                <Link to={`${categoryLinks.results[3].id}`}>
                <i className={` fas fa-solid fa-laptop ${styles.Symbols}`}></i>
                </Link>

                <p> {categoryLinks.results[3].title}</p>

                <Link to={`${categoryLinks.results[4].id}`}>
                <i className={` fas fa-solid fa-car ${styles.Symbols}`}></i>
                </Link>
                <p> {categoryLinks.results[4].title}</p>
              </Col>
            </Row>
          </Container>

          {/* {categoryLinks.results.map((category) => {
            return (
              <div key={category.id}>
                <Link key={category.id} to={`${category.id}`}>
                  {category.title}
                </Link>
              </div>
            );
          })}

        */}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Category;
