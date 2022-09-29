import React, { useEffect, useContext } from "react";
import { DragonContext } from "../../context/context";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const { data, images, fetchDragonData } = useContext(DragonContext);

  useEffect(() => {
    fetchDragonData();
  }, []);

  console.log(images[0], "d");

  return (
    <div className="app__wrapper" id="home">
      <div className="app__wrapper_info">
        <h1 className="app__header-h1">{data.name}</h1>
        <p className="app__text" style={{ margin: "2rem 0" }}>
          {data.description}
        </p>
        <div>
          <a href={data.wikipedia}>
            <button type="button" className="app__button">
              Learn more
            </button>
          </a>
          <Link className="link" to="/details">
            <button type="button" className="app__button">
              Details
            </button>
          </Link>
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images[0]} alt="dragon1" />
      </div>
    </div>
  );
};

export default Header;
