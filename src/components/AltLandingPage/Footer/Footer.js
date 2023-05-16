import Button from "react-bootstrap/Button";
import "./Footer.css";


const Footer = ({setKey}) => {

    return (
        <div className="footer">
       
            
            <Button variant="warning" className="w-50 m-2" onClick={() => {setKey('contactMe')}} >Contanct Me</Button>
        </div>
    );
};

export default Footer;