import StarsBg from "../../StarsBg";
import FloatBox2 from "./FloatBox2";
import ProjectList from "./ProjectsList";


const ProjectSection3 = () => {
  return (
    <div
      id="projects"
      className=" text-warning"
      style={{ hieght: "120vh", overflow: "hidden" }}
    >
      <StarsBg />
      <h1>Featured Projects</h1>
      
      <ProjectList />

     
    </div>
  );
};

export default ProjectSection3;
