import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefault";
import Loader from "../../components/Loader";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import FilterProps from "./FilterProps";

const FavoritesList = () => {

const [favorite, setFavorite] = useState({
    results: [],
  });
  const [loaded, loadedcomplete] = useState(false);
  const currentuser = useCurrentUser();
  const id = currentuser?.profile_id;

  useEffect(() => {
    const handleData = async () => {
      try {
        const { data } = await axiosReq.get(
          `https://buddy-sale.herokuapp.com/posts/?&favorite__owner__profile=${id}`
          
        );
        setFavorite(data);
        loadedcomplete(true);
        
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
          {favorite.results.map((sale) => {
            return <FilterProps key={sale.id} {...sale} />;
          })}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
        
    

}

export default FavoritesList