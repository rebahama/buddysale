import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from "../../styles/SaleProps.module.css";
import { Link } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";
import Loader from "../../components/Loader";
import Modal from "react-bootstrap/Modal";
import FilterProps from "./FilterProps";

const SalePage = () => {
  const [sale, setSale] = useState({
    results: [],
  });
  const [loaded, loadedcomplete] = useState(false);
  const [query, setQuery] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [price, setPrice] = useState("");

  const priceOrder = () => {
    setPrice("price");
  };

  const priceHighOrder =()=>{
    setPrice("-price")
  }
  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axiosReq.get(
          `https://buddy-sale.herokuapp.com/posts/?ordering=${price}&search=${query}`
        );
        setSale(data);
        loadedcomplete(true);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    loadedcomplete(false);
    handleData();
  }, [query,price]);

  return (
    <div>
      total ads :{sale.results.length}
      <Container>
        <Row md={12}>
          <Col>
            <Form onSubmit={(event) => event.preventDefault()}>
              <Form.Control
                type="text"
                placeholder="Search ad"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className={styles.SearchBar}
              />
            </Form>
            <i
              className={`fa fa-solid fa-sort ${styles.SymBolHover}`}
              onClick={handleShow}
            ></i>

          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Link to="citys" className={styles.LinkStyle}>
            <i className="fas fa-solid fa-city"> </i> <span> City </span>
          </Link>
          <p>
            <Link to="category" className={styles.LinkStyle}>
              <i className="fas fa-solid fa-bars"> </i> <span> Category </span>
            </Link>
          </p>

          <p>
          <Link onClick={priceOrder}>
              Sort
            </Link> <span> from lowest to highest</span>
          </p>

          <p>
          <Link onClick={priceHighOrder}>
              Sort
            </Link> <span> from highest to lowest</span>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {loaded ? (
        <>
          {sale.results.map((sale) => {
            return <FilterProps key={sale.id} {...sale} />;
          })}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SalePage;
