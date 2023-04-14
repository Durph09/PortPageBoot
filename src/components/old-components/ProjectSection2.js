import StarsBg from "../StarsBg";
import TFTProj from "./TFTProj";
import PortPage from "./PortPage";

const ProjectSection2 = () => {
  return (
    <div
      id="projects"
      className=" min-vh-100 text-warning"
      style={{ hieght: "120vh", overflow: "hidden" }}
    >
      <StarsBg />
      <h1>Featured Projects</h1>
      <h2 className="text-center">Top Form Tea</h2>
      <TFTProj />

      <div style={{ marginTop: "15%" }}>
        <h2 className="text-center">This Portfolio Page</h2>
        <PortPage />
      </div>
    </div>
  );
};

export default ProjectSection2;
