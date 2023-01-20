import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefault";
import Loader from "../../components/Loader";
import FilterProps from "./FilterProps";

const CityFilter = () => {
  const [sale, setSale] = useState({
    results: [],
  });
  const [loaded, loadedcomplete] = useState(false);
  const [city, setCity] = useState({
    stockholm: 1,
    uppsala: 2,
  });

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axiosReq.get(
          `https://buddy-sale.herokuapp.com/posts/?&city=${city}`
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
  }, [city]);

  return (
    <div>
        <Form onSubmit={(event) => event.preventDefault()}>
      <Form.Control as="select" onChange={(event) => setCity(event.target.value)}>
        <option value={1} > Stockholm </option>
        <option value={2} > Uppsala </option>
      </Form.Control>
      </Form>
      {loaded ? (
        <>
          {sale.results.map((sale) => {
            return <FilterProps key={sale.id} {...sale} />;
          })}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CityFilter;
