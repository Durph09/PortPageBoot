import Column3Toast from "./Column3Toast";
import FloatingBox from "./FloatingBox";
import tftdarkpage from "../images/tftdarkpage.png";
import TFTHome from "../images/TFTHome.png";
import TFTFAQ from "../images/TFTFAQ.png";

const TFTProj = () => {
  return (
    <div>
      <FloatingBox
        src1={tftdarkpage}
        alt1="Top Form Tea Product Area"
        src2={TFTHome}
        alt2="Top Form Tea Portfolio Home Page"
        src3={TFTFAQ}
        alt3="TFT Custom Accordion"
        pageLink="https://durph09.github.io/TopFormTea1/"
      />

      <Column3Toast
        headline1="Top Form Tea"
        bText1={
          <>
            Top Form Tea is an example ecommerce store completed front end. The site is
            hosted on Firebase and constructed primarily with React and React
            libraries. Most components were custom built.
            <ul>
              <li> <a href="https://github.com/Durph09/TopFormTea1">See the code on GitHub ➜</a> </li>
              <li> <a href="https://durph09.github.io/TopFormTea1/">Visit the hosted Site ➜</a></li>
            </ul>
          </>
        }
        headline2="Tech"
        bText2={
          <>
            The technologies / Frameworks / Libraries used in creating Top Form Tea include:
            <ul>
              <li>JS HTML5 CSS3</li>
              <li>React</li>
              <li>React-Bootstrap</li>
              <li>React-Router-Dom</li>
              <li>React-Parallax</li>
              <li>React-Awesome-Reveal</li>
              <li>Firebase</li>
              <li> <a href="https://github.com/Durph09/TopFormTea1">See the code on GitHub ➜</a> </li>
              <li> <a href="https://durph09.github.io/TopFormTea1/">Visit the hosted Site ➜</a></li>
            </ul>
          </>
        }
        headline3="Features"
        bText3={
          <>
            <ul>
              <li>Custom built shopping cart</li>
              <li>Custom React state handling</li>
              <li>Mobile responsive design</li>
              <li>Custom Carousel component</li>
              <li>All products defined in an object</li>
              <li>
                <a href="https://github.com/Durph09/TopFormTea1">
                  See the code on GitHub ➜
                </a>
              </li>
              <li>
                <a href="https://durph09.github.io/TopFormTea1/">
                  Visit the hosted Site ➜
                </a>
              </li>
            </ul>
          </>
        }
      />
    </div>
  );
};

export default TFTProj;
