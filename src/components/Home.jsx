import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Navbar } from "./Navbar";
import ItemOperation from "./ItemOperation";
import Balance from "./Balance";
import {urlApi} from "../constants/urls"


const Home = () => {
 
  let { data } = useFetch(`${urlApi}operations`);

  return (
    <>
      <Navbar className="  " />
    <Balance />
     <div className="mx-auto container ">
<div className="">
      
      {!data ? (
        <h3>cargando...</h3>
      ) : (
        <div className="text-center">
          {data.operations
            .slice(Math.max(data.operations.length - 10, 0))
            .reverse()
            .map((el, index) => (
              <ItemOperation key={el._id} dataEl={el} />
            ))}
        </div>
      )}
</div>
</div>
    </>
  );
};

export default Home;
