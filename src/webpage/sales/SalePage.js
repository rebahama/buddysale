import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefault";

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
      <p> tst </p>

      {sale.results.length}

      {sale.results.map((sales) => {
        return (
          <div key={sales.id}>
            <p> {sales.owner}</p>

            {sales.images.map((image, index) => (
              <img key={index} src={image.image} alt="user uploads" />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default SalePage;
