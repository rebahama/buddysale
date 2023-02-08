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
      <h3> Category</h3>
      {loaded ? (
        <>
          
          {categoryLinks.results[0].title}
          <Link to={`${categoryLinks.results[0].id}`}> <i className="fas fa-solid fa-couch"></i>   </Link>

          {categoryLinks.results[1].title}
          <Link to={`${categoryLinks.results[1].id}`}> <i className="fas fa-solid fa-futbol"></i>   </Link>

          {categoryLinks.results[2].title}
          <Link to={`${categoryLinks.results[2].id}`}> <i className="fas fa-solid fa-user-tie"></i>   </Link>

          {categoryLinks.results[3].title}
          <Link to={`${categoryLinks.results[3].id}`}> <i className="fas fa-solid fa-laptop"></i>   </Link>

          
          {categoryLinks.results[4].title}
          <Link to={`${categoryLinks.results[4].id}`}> <i className="fas fa-solid fa-car"></i>   </Link>

        {/* {categoryLinks.results.map((category) => {
            return (
              <div key={category.id}>
                <Link key={category.id} to={`${category.id}`}>
                  {category.title}
                </Link>
              </div>
            );
          })}

        */}
          
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Category;
