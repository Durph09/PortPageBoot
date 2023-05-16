import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { skillsObject } from "./SkillObject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const Skills = () => {

    const sortedSkills = [...skillsObject].sort((a, b) => b.skillLevel - a.skillLevel);

    return (
        <div className="d-flex flex-column w-100 h-100  align-items-center overflow-hidden">
      
        <h1>Skills assesment</h1>
       { sortedSkills.map(skill => (
          <Row key={skill.id} className=" w-100 align-items-center m-0  h-100">
            <Col xs={2}>
            <FontAwesomeIcon
              icon={skill.icon}
              size="3x"
              style={{ color: "white" }} />
            </Col>
            <Col xs={2}>
              {skill.id}
            </Col>
            <Col xs={8}>
              <div style={{ 
                height: '10px', 
                width: `${skill.skillLevel}%`, 
                backgroundColor: skill.color 
              }}></div>
            </Col>
          </Row>
        ))}
      </div>);
}

export default Skills;