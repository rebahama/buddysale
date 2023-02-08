import React, { useRef } from "react";
import { useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Alert, Button, Form } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefault";

function CreateSale() {
  const currentUser = useCurrentUser();
  const [createSale, setSale] = useState({
    title: "",
    content: "",
    price: "",
    image: "",
    phone_number: "",
    email: "",
    uploaded_images: [],
    category: 1,
    city: 1,
  });

  const [citys] = useState({
    stockholm: 1,
    uppsala: 2,
  });
  const { uppsala, stockholm } = citys;
  const {
    title,
    content,
    price,
    category,
    city,
    uploaded_images,
    email,
    phone_number,
    image,
  } = createSale;
  const [error, setError] = useState({});
  const imageInput = useRef(null);
  const uploadedImage = useRef(null);

  const [categorySub] = useState({
    cars: 1,
    electronics: 2,
    clothes: 3,
    hobby: 4,
    furniture: 5,
  });

  const { cars, electronics, clothes, hobby, furniture } = categorySub;

  const handleSale = (event) => {
    setSale({
      ...createSale,
      [event.target.name]: event.target.value,
    });
  };

  const handleImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setSale({
        ...createSale,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleUploadedImages = (event) => {
    if (event.target.files.length) {
      if (event.target.files.length > 3) {
        alert("You can only upload 3 images");
        return;
      }
      setSale({
        ...createSale,
        uploaded_images: [...event.target.files],
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (uploaded_images.length > 3) {
      alert("You can only upload 3 images");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("price", price);
    uploaded_images.forEach((file) => formData.append("uploaded_images", file));
    formData.append("category", category);
    formData.append("city", city);
    formData.append("email", email);
    formData.append("owner", currentUser.profile_id);
    formData.append("phone_number", phone_number);
    try {
      const { data } = await axiosReq.post("/posts/", formData);
      console.log(data);
    } catch (err) {
      if (err.response?.data !== 401) {
        setError(err.response?.data);
        console.log(err.response);
      }
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label> Title </Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter title"
            value={title}
            onChange={handleSale}
          />
        </Form.Group>
        {error?.title?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label> Body content </Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            value={content}
            onChange={handleSale}
          ></Form.Control>
        </Form.Group>

        {error?.content?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            name="price"
            value={price}
            onChange={handleSale}
            min="0"
            max="1000000"
          />
        </Form.Group>
        {error?.price?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Label> multiple upload </Form.Label>
        <input
          type="file"
          id="image-upload-multiple"
          onChange={handleUploadedImages}
          ref={uploadedImage}
          multiple
          accept="image/*"
        ></input>

        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            name="category"
            value={category}
            onChange={handleSale}
          >
            <option> </option>
            <option value={electronics}>Electronics </option>
            <option value={cars}>Cars</option>
            <option value={clothes}> Clothes </option>
            <option value={hobby}> Hobby </option>
            <option value={furniture}> Furniture</option>
          </Form.Control>
        </Form.Group>
        {error?.category?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control
            as="select"
            name="city"
            value={city}
            onChange={handleSale}
          >
            <option> </option>
            <option value={stockholm}> Stockholm </option>
            <option value={uppsala}> Uppsala </option>
          </Form.Control>
        </Form.Group>
        {error?.category?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label>Phone number</Form.Label>

          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter phone"
              name="phone_number"
              value={phone_number}
              onChange={handleSale}
              min="0"
              max="1000000"
            />
          </Form.Group>
        </Form.Group>
        {error?.phone_number?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group>
          <Form.Label> Title </Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={handleSale}
          />
        </Form.Group>
        {error?.email?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Button variant="primary" type="submit">
          Create review
        </Button>
      </Form>
    </div>
  );
}

export default CreateSale;
