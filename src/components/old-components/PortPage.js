import Column3Toast from "./Column3Toast";
import FloatingBox from "./FloatingBox";
import PortProj from "./images/PortProg.png";
import PortLanding from "./images/PortLanding.png";
import PortContact from "./images/PortContact.png";

const PortPage = () => {
  return (
    <div className="">
      <FloatingBox
        src1={PortProj}
        alt1="Portfolio Page Project Section"
        src2={PortLanding}
        alt2="Portfolio Landing Section"
        src3={PortContact}
        alt3="Portfolio Contact Section"
        pageLink="https://Conormahaney.com/"
      />

      <Column3Toast
        headline1="Portfolio Page"
        bText1={
          <>
            This portolio page is a place where I experiment with new tech and
            libraries. The site is hosted on Firebase and constructed primarily
            with React and many other libraries / Frameworks.
            <ul>
              <li>
                {" "}
                <a href="https://github.com/Durph09/PortPageBoot">
                  See the code on GitHub ➜
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="https://ConorMahaney.Com/">Visit the hosted Site ➜</a>
              </li>
            </ul>
          </>
        }
        headline2="Tech"
        bText2={
          <>
            The technologies / Frameworks / Libraries used in creating Top Form
            Tea include:
            <ul>
              <li>JS HTML5 CSS3</li>
              <li>React</li>
              <li>React-Bootstrap</li>
              <li>React-Router-Dom</li>
              <li>React-Parallax</li>
              <li>React-Awesome-Reveal</li>
              <li>Firebase</li>
              <li>EmailJS</li>
              <li>Formik</li>
              <li>Yup</li>
              <li>React Three Fiber</li>
              <li>Drei</li>
              <li>
                {" "}
                <a href="https://github.com/Durph09/PortPageBoot">
                  See the code on GitHub ➜
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="https://ConorMahaney.Com/">Visit the hosted Site ➜</a>
              </li>
            </ul>
          </>
        }
        headline3="Features"
        bText3={
          <>
            <ul>
              <li>EmailJS integration</li>
              <li>Custom React state handling</li>
              <li>Mobile responsive design</li>
              <li>Custom animations</li>
              <li>Modular design</li>

              <li>
                {" "}
                <a href="https://github.com/Durph09/PortPageBoot">
                  See the code on GitHub ➜
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="https://ConorMahaney.Com/">Visit the hosted Site ➜</a>
              </li>
            </ul>
          </>
        }
      />
    </div>
  );
};

export default PortPage;
