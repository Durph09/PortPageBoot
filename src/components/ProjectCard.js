
import Card from 'react-bootstrap/Card';

const ProjectCard = ({src, title, pageLink, codeLink, description}) => {

    return (
        <Card  className=" text-dark border-0 h-100">
      <Card.Img variant="top" src={src}  alt={title}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Link href={pageLink} target="_blank">See the page ➜ </Card.Link>
        <Card.Link href={codeLink} target="_blank">See the Code ➜</Card.Link>
      </Card.Body>
    </Card>

    )
};

export default ProjectCard;