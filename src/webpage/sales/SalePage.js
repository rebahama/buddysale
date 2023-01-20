import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefault";
import Loader from "../../components/Loader";
import FilterProps from "./FilterProps";

const SalePage = () => {
  const [sale, setSale] = useState({
    results: [],
  });
  const [loaded, loadedcomplete] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axiosReq.get(
          `https://buddy-sale.herokuapp.com/posts/?search=${query}`
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
  }, [query]);

  return (
    <div>
      total ads :{sale.results.length}
      <Form onSubmit={(event) => event.preventDefault()}>
            <Form.Control type="text"  placeholder= "Search a review" value={query} onChange={(event) => setQuery(event.target.value)}  />
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

export default SalePage;
