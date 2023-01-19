import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";
import Loader from "../../components/Loader";
import SaleProps from "./SaleProps";

const DetaliedSale = () => {
  const { id } = useParams();
  const [loaded, loadedcomplete] = useState(false);
  const [saleDetail, setSaleDetail] = useState({
    results: [],
  });

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axiosReq.get(
          `https://buddy-sale.herokuapp.com/posts/${id}`
        );
        setSaleDetail(data);
        loadedcomplete(true);
      } catch (err) {
        console.log(err);
      }
    };
    loadedcomplete(false);
    handleData();
  }, [id]);

  return (
    <div>
      {loaded ? (
        <>
          <SaleProps key={saleDetail.id} {...saleDetail} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default DetaliedSale;
