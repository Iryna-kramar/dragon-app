import React, { useState } from "react";

const DragonContext = React.createContext();

const DragonProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);

  let dragon1Url = 'https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f';

  const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  };

  const fetchDragonData = async () => {
    const allData = await fetchData(`${dragon1Url}`, {
      method: "GET",
    });
    setData(allData);
    setImages(allData.flickr_images)
  };

  console.log (data, 'data')

  return (
    <DragonContext.Provider
      value={{
        data,
        images,
        fetchData,
        fetchDragonData,
      }}
    >
      {children}
    </DragonContext.Provider>
  );
};

export { DragonProvider, DragonContext };
