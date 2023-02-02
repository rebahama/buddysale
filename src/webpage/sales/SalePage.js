import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
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

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axiosReq.get(
          `https://buddy-sale.herokuapp.com/posts/?search=${query}`
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
  }, [query]);

  return (
    <div>
      total ads :{sale.results.length}
      <Form onSubmit={(event) => event.preventDefault()}>
        <Form.Control
          type="text"
          placeholder="Search a review"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </Form>
      <i className="fa fa-solid fa-sort" onClick={handleShow}></i>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Link to="citys" className={styles.LinkStyle}> <i className="fas fa-solid fa-city"> </i> <span> City </span> </Link>
          <p>
            <Link to="category" className={styles.LinkStyle}> <i className="fas fa-solid fa-bars">  </i> <span> Category </span> </Link>
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
