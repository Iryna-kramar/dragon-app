import React, { useContext } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { DragonContext } from "../../context/context";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef();
  const { images } = useContext(DragonContext);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  console.log(images, 'dragon')

  return (
    <div className="app__gallery app__wrapper">
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {images.slice(1, 4).map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
