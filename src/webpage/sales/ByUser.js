import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../../styles/SaleProps.module.css";
import { axiosReq } from "../../api/axiosDefault";
import FilterProps from "./FilterProps";

const ByUser = (props) => {
  const { id } = useParams();
  const { owner } = props;
  
  const [sale, setSale] = useState({
    results: [],
  });

  useEffect(() => {
    const handleData = async () => {
      
      try {
        const { data } = await axiosReq.get(
          `https://buddy-sale.herokuapp.com/posts/?&owner__profile=${owner}`
        );
        const datauser=data.results[0].owner
        setSale(data);
        console.log(datauser);
        console.log(id)
      } catch (err) {
        console.log(err);
      }
    };
    handleData();
  }, []);

  return (
    <div className={styles.hideUserSales}>
      {sale.results.map((sale) => {
        return <FilterProps key={sale.id} {...sale} />;
      })}
    </div>
  );
};

export default ByUser;
