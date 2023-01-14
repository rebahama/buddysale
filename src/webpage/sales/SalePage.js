import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefault";
import SaleProps from "./SaleProps";

const SalePage = () => {
  const [sale, setSale] = useState({
    results: [],
  });

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axiosReq.get(
          "https://buddy-sale.herokuapp.com/posts/"
        );
        setSale(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    handleData();
  }, []);

  return (
    <div>
      total ads :{sale.results.length}

      {sale.results.map((sale) => {
        return <SaleProps key={sale.id} {...sale} />;
      })}
    </div>
  );
};

export default SalePage;
