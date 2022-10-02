import React, { useEffect, useContext } from "react";
import { DragonContext } from "../../context/context";
import { Link } from "react-router-dom";

import "./Main.css";

const Main = () => {
  const { dragons, fetchDragonsData } = useContext(DragonContext);

  useEffect(() => {
    fetchDragonsData();
  }, []);

  // console.log(images[0], "d");

  return (
    <div className="app__wrapper" id="home">
      <div className="app__list">
        {dragons.map((dragon) => (
          <h1 className="app__header-h1" key={dragon.id}>
            <Link to={`/${dragon.id}`}>{dragon.name}</Link>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Main;
