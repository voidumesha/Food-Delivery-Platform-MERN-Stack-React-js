import React from "react";
import list from "../Data";
import "../Styles/Food.css";
import Cards from "./Cards";


const Food = ({handleClick}) => {
  return (
  <section>
    {
        list.map((item)=>(
            <Cards item={item} key={item.id} handleClick={handleClick} />

        ))
    }
  </section>
  )

};

export default Food;
