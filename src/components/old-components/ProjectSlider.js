import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ProjectSlider({src1, altHeadline1, headline1, p1,src2, altHeadline2, headline2, p2, src3, altHeadline3, headline3, p3}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={src1}
          alt={altHeadline1}
        />
        <Carousel.Caption>
          <h3>{headline1}</h3>
          <p>{p1}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={src2}
          alt={altHeadline2}
        />

        <Carousel.Caption>
          <h3>{headline2}</h3>
          <p>{p2}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={src3}
          alt={altHeadline3}
        />

        <Carousel.Caption>
          <h3>{headline3}</h3>
          <p>
            {p3}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectSlider;