import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";
import Loader from "../../components/Loader";

const Category = () => {
  const [loaded, loadedcomplete] = useState(false);
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
        loadedcomplete(true);
      } catch (err) {}
    };
    loadedcomplete(false);
    handleData();
  }, []);

  return (
    <div>
      {loaded ? (
        <>
          
          {categoryLinks.results.map((category) => {
            return (
              <div key={category.id}>
                <Link key={category.id} to={`${category.id}`}>
                  {category.title}
                </Link>
              </div>
            );
          })}
          
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Category;
