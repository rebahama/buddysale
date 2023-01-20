import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefault";
import FilterProps from "./FilterProps";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Loader from "../../components/Loader";

const MySales = () => {
  const [sale, setSale] = useState({
    results: [],
  });
  const [loaded, loadedcomplete] = useState(false);
  const currentuser = useCurrentUser();
  const id = currentuser?.profile_id;

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axiosReq.get(
          `https://buddy-sale.herokuapp.com/posts/?&owner__profile=${id}`
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

export default MySales;
