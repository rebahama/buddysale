import React from "react";
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
    <div>
      <div>
        <div>
          <p> ths is filter prop</p>
          <p> {owner}</p>
          <p> {title}</p>
          <p> {category_name}</p>
          <p> {price}</p>
          <p> {city_name}</p>
          {images?.map((image, index) => (
            <img key={index} src={image.image} alt="user uploads" />
          ))}
          <p> {created_at}</p>
          <Link to={`/sales/${id}`}>View more</Link>
        </div>
      </div>
    </div>
  );
};

export default FilterProps;
