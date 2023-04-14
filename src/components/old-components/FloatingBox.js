import { useEffect, useRef, useState } from "react";
import "./FloatingBox.css";
import StarsBg from "../StarsBg";

const FloatingBox = ({ src1, src2, src3, alt1, alt2, alt3, pageLink }) => {
  const childBoxRef1 = useRef();
  const childBoxRef2 = useRef();
  const childBoxRef3 = useRef();
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const parentBox = document.querySelector(".parentBox");
    const childBox1 = childBoxRef1.current;
    const childBox2 = childBoxRef2.current;
    const childBox3 = childBoxRef3.current;

    const maxMoveX = parentBox.clientWidth - childBox1.clientWidth;
    const maxMoveY = parentBox.clientHeight - childBox1.clientHeight;

    let x1 = Math.floor(Math.random() * maxMoveX);
    let y1 = Math.floor(Math.random() * maxMoveY);
    let x2 = Math.floor(Math.random() * maxMoveX);
    let y2 = Math.floor(Math.random() * maxMoveY);
    let x3 = Math.floor(Math.random() * maxMoveX);
    let y3 = Math.floor(Math.random() * maxMoveY);

    let dx1 = 2;
    let dy1 = 2;
    let dx2 = -2;
    let dy2 = -2;
    let dx3 = 3;
    let dy3 = -3;

    const move = () => {
      if (!isPausedRef.current) {
        x1 += dx1;
        y1 += dy1;
        x2 += dx2;
        y2 += dy2;
        x3 += dx3;
        y3 += dy3;

        if (x1 < 0 || x1 > maxMoveX) dx1 = -dx1;
        if (y1 < 0 || y1 > maxMoveY) dy1 = -dy1;
        if (x2 < 0 || x2 > maxMoveX) dx2 = -dx2;
        if (y2 < 0 || y2 > maxMoveY) dy2 = -dy2;
        if (x3 < 0 || x3 > maxMoveX) dx3 = -dx3;
        if (y3 < 0 || y3 > maxMoveY) dy3 = -dy3;

        childBox1.style.transform = `translate(${x1}px, ${y1}px)`;
        childBox2.style.transform = `translate(${x2}px, ${y2}px)`;
        childBox3.style.transform = `translate(${x3}px, ${y3}px)`;
      }

      requestAnimationFrame(move);
    };

    move();
  }, []);

  return (
    <div
      className="parentBox  border-bottom border-warning"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
    <StarsBg />
      <div
        className="childBox"
        ref={childBoxRef1}
        as="a"
        onClick={() => window.open(pageLink, "_blank")}
      >
        <img src={src1} alt={alt1} className="image focus-ring" />
      </div>
      <div
        className="childBox"
        ref={childBoxRef2}
        as="Button"
        onClick={() => window.open(pageLink, "_blank")}
      >
        <img src={src2} alt={alt2} className="image" />
      </div>
      <div
        className="childBox"
        ref={childBoxRef3}
        as="Button"
        onClick={() => window.open(pageLink, "_blank")}
      >
        <img src={src3} alt="alt3" className="image" />
      </div>
    </div>
  );
};

export default FloatingBox;
