import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";
import Loader from "../../components/Loader";
import styles from "../../styles/CategoryPage.module.css";
import FilterProps from "./FilterProps";

const CategoryShow = () => {
  const { id } = useParams();
  const [loaded, loadedcomplete] = useState(false);
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
        loadedcomplete(true);

        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    loadedcomplete(false);

    handleData();
  }, [id]);

  return (
    <div>
      {category.results.slice(0, 1).map((category) => {
        return (
          <div key={category.id}>
            <h3 className={styles.HeadingStyle }>{category.category_name}</h3>
          </div>
        );
      })}
      {loaded ? (
        <>
          {category.results.map((category) => {
            return <FilterProps key={category.id} {...category} />;
          })}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CategoryShow;
