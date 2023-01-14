import React from "react";

const SaleProps = (props) => {
  const { owner, images, category_name, city_name, price, title,created_at } = props;

  return (
    <div>
      <div>
        <p> {owner}</p>
        <p> {title}</p>
        <p> {category_name}</p>
        <p> {price}</p>
        <p> {city_name}</p>
        {images?.map((image, index) => (
          <img key={index} src={image.image} alt="user uploads" />
        ))}
        <p> {created_at}</p>
      </div>
    </div>
  );
};

export default SaleProps;
