import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefault";
import FilterProps from "./FilterProps";
const Category = () => {
  const [category, setCategory] = useState({
    results: [],
  });

  const [categoryLinks, setCategoryLinks] = useState({
    results: [],
  });

  useEffect(() => {
    const handleData = async () => {
      try {
        const [{ data: category }, { data: categoryLinks }] = await Promise.all(
          [
            axiosReq.get("https://buddy-sale.herokuapp.com/posts/?category=1"),
            axiosReq.get("https://buddy-sale.herokuapp.com/category/"),
          ]
        );
        setCategory(category);
        console.log(category);
        setCategoryLinks(categoryLinks);
      } catch (err) {}
    };
    handleData();
  }, []);
  return (
    <div>
      {categoryLinks.results.map((category) => {
        return (
          <div key={category.id}>
            <p> {category.title}</p>
          </div>
        );
      })}

{category.results.map((category)=>{

return <FilterProps key={category.id} {...category}/>


})}
      
    </div>
  );
};

export default Category;
