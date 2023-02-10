import React, { useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/SaleProps.module.css";
import { axiosRes } from "../../api/axiosDefault";
import { Link } from "react-router-dom";
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
        {images?.length}
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
              <p> Seller: {owner_name}</p>

              <p> Member since: {created_at}</p>

              {currentUser ? loggedinFavorite : "log in to save ad"}

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body> {message}</Modal.Body>
                <Modal.Footer>
                  <Button onClick={updatePage}> Ok</Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Col>
        </Row>
        <hr className={styles.HrLine} />
        <div className={styles.FactContainer}>
          <h3> Facts:</h3>
          <p> Category: {category_name}</p>
          <p> Price: {price}</p>
          <p> City: {city_name}</p>
          <p> Email: {email}</p>
          <p> Number: {phone_number}</p>
          <p> Created: {created_at}</p>
        </div>
        <hr className={styles.HrLine} />
        {content}
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable. If you are
        going to use a passage of Lorem Ipsum, you need to be sure there isn't
        anything embarrassing hidden in the middle of text. All the Lorem Ipsum
        generators on the Internet tend to repeat predefined chunks as
        necessary, making this the first true generator on the Internet. It uses
        a dictionary of over 200 Latin words, combined with a handful of model
        sentence structures, to generate Lorem Ipsum which looks reasonable. The
        generated Lorem Ipsum is therefore always free from repetition, injected
        humour, or non-characteristic words etc.
        
        <ByUser owner={owner} />
      </Container>
    </div>
  );
};

export default SaleProps;
