import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../../styles/SaleProps.module.css";
import { axiosReq } from "../../api/axiosDefault";
import FilterProps from "./FilterProps";
import { Button } from "react-bootstrap";

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
        const datauser = data.results[0].owner;
        setSale(data);
        console.log(datauser);
      } catch (err) {
        console.log(err);
      }
    };
    handleData();
  }, []);

  let btnShow = document.getElementById("showAll");

  function myFunction() {
    let getSale = document.getElementById("saleShow");

    getSale.style.display = "block";
  }

  btnShow?.addEventListener("click", myFunction);

  

  function showId (){
    if(id===46){
      console.log("hello")
    }
  }

  const categoryShow = () => {
    const getSale = document.getElementById("saleShow");

    if (getSale.style.display === "block") {
      getSale.style.display = "none";
    } else {
      getSale.style.display = "block";
    }
  };

  if(id)

  return (
    <div>
      
      <Button onClick={categoryShow}> Show all sales from user</Button>
      <div id="saleShow" className={styles.hideUserSales}>
        {sale.results.map((sale) => {
          return <FilterProps key={sale.id} {...sale} />;
        })}
      </div>
    </div>
  );
};

export default ByUser;
