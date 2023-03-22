import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Col from 'react-bootstrap/Col';
 



const ProjectCard = ({src, title, pageLink, codeLink, description}) => {

    return (
        <Card  className=" text-dark m-2 h-100 border-0">
      <Card.Img variant="top" src={src}  alt={title}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Link href={pageLink}>See the page ➜ </Card.Link>
        <Card.Link href={codeLink}>See the Code ➜</Card.Link>
      </Card.Body>
    </Card>

    )
};

export default ProjectCard;