import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefault";
import SaleProps from "./SaleProps";

const DetaliedSale = () => {
  const { id } = useParams();
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
        console.log(data.owner);
      } catch (err) {
        console.log(err);
      }
    };
    handleData();
  }, [id]);

  return (
    <div>
      {saleDetail.content}

      <SaleProps key={saleDetail.id} {...saleDetail} />
    </div>
  );
};

export default DetaliedSale;
