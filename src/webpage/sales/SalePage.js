import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefault";
import FilterProps from "./FilterProps";

const SalePage = () => {
  const [sale, setSale] = useState({
    results: [],
  });
  const [loaded, loadedcomplete] = useState(false);

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axiosReq.get(
          "https://buddy-sale.herokuapp.com/posts/"
        );
        setSale(data);
        loadedcomplete(true);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    loadedcomplete(false);
    handleData();
  }, []);

  return (
    <div>
      total ads :{sale.results.length}
      {loaded ? (
        <>

          {sale.results.map((sale) => {
            return <FilterProps key={sale.id} {...sale} />;
          })}
        </>
      ) : (
        <Spinner/>
      )}
      {sale.results.map((sale) => {
        return <FilterProps key={sale.id} {...sale} />;
      })}
    </div>
  );
};

export default SalePage;
