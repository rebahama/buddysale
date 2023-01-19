import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";
import FilterProps from "./FilterProps";

const CategoryShow = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({
    results: [],
  });

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axiosReq.get(
          `https://buddy-sale.herokuapp.com/posts/?category=${id}`
        );
        setCategory(data);

        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    handleData();
  }, [id]);

  return (
    <div>
      {category.results.slice(0, 1).map((category) => {
        return (
          <div key={category.id}>
            <p>{category.category_name}</p>
          </div>
        );
      })}

      {category.results.map((category) => {
        return <FilterProps key={category.id} {...category} />;
      })}
    </div>
  );
};

export default CategoryShow;
