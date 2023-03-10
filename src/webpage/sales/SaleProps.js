import React, { useState } from "react";
import {
  Carousel,
  Col,
  Container,
  DropdownButton,
  Dropdown,
  Row,
} from "react-bootstrap";
import styles from "../../styles/SaleProps.module.css";
import { axiosRes } from "../../api/axiosDefault";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import ByUser from "./ByUser";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

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
    phone_number,
    email,
    setSale,
    owner_name,
    favorite_id,
  } = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const navigate = useNavigate();
  const currentUser = useCurrentUser();
  const [message, setMessage] = useState("");
  const is_owner = currentUser?.username === owner_name;

  const handleLikes = async () => {
    try {
      const { data } = await axiosRes.post("/favorites/", {
        post: id,
      });
      setMessage("Ad saved!");
      setShow(true);
      setSale((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,

                favorite_id: data.id,
              }
            : post;
        }),
      }));
    } catch (err) {}
  };
  const updatePage = () => {
    navigate(0);
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/favorites/${favorite_id}`);
      setMessage("Successfully unsaved");
      setShow(true);
      setSale((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,

                favorite_id: null,
              }
            : post;
        }),
      }));
    } catch (err) {}
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      alert("Your ad have been successfully deleted");
      navigate("/sales");
    } catch (err) {}
  };

  const RealLoggedIn = (
    <>
      <DropdownButton id="dropdown-basic-button" variant="dark" title="View">
        <Dropdown.Item>
          <i
            onClick={handleDelete}
            className={`fas fa-solid fa-trash ${styles.EditDeleteBtn}`}
          ></i>
        </Dropdown.Item>
        <Dropdown.Item href={`/sales/${id}/edit`}>
          <i className={`fas fa-solid fa-pen ${styles.EditDeleteBtn}`}></i>
        </Dropdown.Item>
      </DropdownButton>
    </>
  );

  const loggedinFavorite = (
    <>
      {favorite_id ? (
        <i
          className={`fas fa-solid fa-trash ${styles.FavoriteAd}`}
          onClick={handleUnlike}
        ></i>
      ) : (
        <i
          className={`fas fa-solid fa-star ${styles.FavoriteAd}`}
          onClick={handleLikes}
        ></i>
      )}
    </>
  );

  const renderImages = () => {
    if (images?.length > 2) {
      return images.slice(0, 3).map((image, index) => (
        <Carousel.Item key={index}>
          <img
            src={image.image}
            alt="user uploads"
            className={styles.CarouselImg}
          />
        </Carousel.Item>
      ));
    } else if (images?.length === 2) {
      return images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            src={image.image}
            alt="user uploads"
            className={styles.CarouselImg}
          />
        </Carousel.Item>
      ));
    } else if (images?.length === 1) {
      return images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            src={image.image}
            alt="user uploads"
            className={styles.CarouselImg}
          />
        </Carousel.Item>
      ));
    } else {
      return <p> No images available</p>;
    }
  };

  return (
    <div>
      <Container fluid>
        <Carousel>{renderImages()}</Carousel>
      </Container>

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

              {is_owner && RealLoggedIn}

              <p> Seller: {owner_name}</p>

              <p> Member since: {created_at}</p>

              {currentUser ? loggedinFavorite : "log in to save ad"}

              <Modal show={show} onHide={handleClose} onClick={updatePage}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body> {message}</Modal.Body>
               
                <Modal.Footer>
                <Button> Ok </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>
        </Row>
        <hr className={styles.HrLine} />
        <div className={styles.FactContainer}>
          <h3> Information: </h3>
          <p> Category: {category_name}</p>
          <p> Price: {price} <i className="fas fa-solid fa-euro-sign"></i> </p> 
          <p> City: {city_name}</p>
          <p> Email: {email}</p>
          <p> Number: {phone_number}</p>
          <p> Created: {created_at}</p>
        </div>
        <hr className={styles.HrLine} />
        <p className={styles.ContentText}>{content}</p>
        <ByUser owner={owner} />
      </Container>
    </div>
  );
};

export default SaleProps;
