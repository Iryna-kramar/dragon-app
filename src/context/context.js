import React, { useState } from "react";

const DragonContext = React.createContext();

const DragonProvider = ({ children }) => {
  const [dragons, setDragons] = useState([]);
  const [dragon, setDragon] = useState([]);
  const [images, setImages] = useState([]);
  const [firstImage, setFirstImage] = useState([]);

  let dragon1Url = "https://api.spacexdata.com/v4/dragons";

  const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };

  const fetchDragonsData = async () => {
    const allData = await fetchData(`${dragon1Url}`, {
      method: "GET",
    });
    setDragons(allData);
  };

  console.log(dragons, "data");

  const fetchDragonData = async (id) => {
    const dragonData = await fetchData(
      `https://api.spacexdata.com/v4/dragons/${id}`,
      {
        method: "GET",
      }
    );
    setDragon(dragonData);
    setFirstImage(dragonData.flickr_images[0]);
    setImages(dragonData.flickr_images);    
  };

  return (
    <DragonContext.Provider
      value={{
        dragons,
        dragon1Url,
        dragon,
        images,
        firstImage,
        fetchData,
        fetchDragonsData,
        fetchDragonData
      }}
    >
      {children}
    </DragonContext.Provider>
  );
};

export { DragonProvider, DragonContext };
