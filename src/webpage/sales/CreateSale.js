import React, { useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefault";

function CreateSale() {
  const [createSale, setSale] = useState({
    title: "",
    content: "",
    price: "",
    image: "",
    category: 1,
    city: "",
  });

  const imageInput = useRef(null);

  const { title, content, price, image, category, city } = createSale;
  const [error, setError] = useState({});

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
    URL.revokeObjectURL(image);
    if (event.target.files.length) {
      setSale({
        ...createSale,
        import: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", imageInput.current.files[0]);
    formData.append("price", price);
    formData.append("city", city);
    formData.append("category", category);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
    } catch (err) {
      if (err.response?.data !== 401) {
        setError(err.response?.data);
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

        <Form.Label> Image upload </Form.Label>
       
        {error?.image?.map((message, idx) => (
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

        {error?.image?.map((message, idx) => (
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

        <Button variant="primary" type="submit">
          Create review
        </Button>
      </Form>
    </div>
  );
}

export default CreateSale;
