
import Container from "react-bootstrap/Container";
import StarsBg from "../Shared/StarsBg";
import NavBar from "../../navbar/NavBar";

const AboutMe = () => {

    return (
        <div className="text-center w-100 h-100 align-items-center justify-content-center  ">
       
        <h1>a little about me...</h1>
        <Container className="text-start"><p>Learning and Building - these are the two pillars that define my professional ethos. .</p>

<p>Currently, I'm delving into the intriguing universe of the MERN stack, exploring its vast potential to create robust, scalable
 applications. However, my learning aspirations don't end here. I harbor a keen interest in expanding my knowledge to data 
 analysis, machine learning, and particularly, the emerging realms of web3 and AI integration.</p>
 <h3>Education and Professional Certificates</h3>
 <ul>
    <li>B.S. Finance,  <i>FGCU</i></li>
    <li>Front End Development,   <i>Meta</i></li>
    <li>Python Specialization,   <i>University of Michigan</i></li>
    <li>AWS Cloud Practitioner Essentials,   <i>Amazon Web Services</i></li>
    <li>SQL for Data Science,   <i>U.C. Davis</i></li>
    <li>Google IT Support Professional Certificate,   <i>Google</i></li>
 </ul>



</Container>
<NavBar/>
   </div> 
   
   )
}

export default AboutMe;