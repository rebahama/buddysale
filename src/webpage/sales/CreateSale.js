import React, { useRef } from "react";
import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefault";

function CreateSale() {
  const [createSale, setSale] = useState({
    title: "",
    content: "",
    price: "",
    image: "",
    uploaded_images: [],
    category: 1,
    city: 1,
  });

  const { title, content, price, image, category, city, uploaded_images } =
    createSale;
  const [error, setError] = useState({});
  const imageInput = useRef(null);
  const uploadedImage = useRef(null);

  const [categorySub] = useState({
    cars: 1,
    electronics: 2,
  });

  const { cars, electronics } = categorySub;

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
    formData.append("image", imageInput.current.files[0]);
    uploaded_images.forEach((file) => formData.append("uploaded_images", file));
    formData.append("category", category);
    formData.append("city", city);
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

        <Form.Label> Image upload </Form.Label>
        <input
          type="file"
          id="image-upload"
          onChange={handleImage}
          ref={imageInput}
          accept="image/*"
        ></input>
        {error?.image?.map((message, idx) => (
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
            <option value={city}> Stockholm </option>
          </Form.Control>
        </Form.Group>
        {error?.category?.map((message, idx) => (
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
