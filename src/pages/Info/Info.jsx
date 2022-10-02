import React, { useEffect, useContext } from "react";
import { DragonContext } from "../../context/context";
import { useParams, Link } from "react-router-dom";

import "./Info.css";

const Info = () => {
  const { dragon, fetchDragonData, firstImage } = useContext(DragonContext);

  const { id } = useParams();

  useEffect(() => {
    fetchDragonData(id);
  }, []);

  return (
    <div>
      <div className="app__wrapper_info app__wrapper">
        <h1 className="app__header-h1">{dragon.name}</h1>
        <p className="app__text" style={{ margin: "2rem 0" }}>
          {dragon.description}
        </p>
        <div>
          <a href={dragon.wikipedia}>
            <button type="button" className="app__button">
              Learn more
            </button>
          </a>
          <Link className="link" to={`/${id}/details`}>
            <button type="button" className="app__button">
              Details
            </button>
          </Link>
        </div>
        <div className="app__wrapper_img">
          <img src={firstImage} alt="dragon1" />
        </div>
      </div>
    </div>
  );
};

export default Info;
