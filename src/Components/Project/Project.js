import classes from "./Project.module.css";
import TagBar from "../../UI/TagBar/TagBar";
import Subtitle from "../../UI/Subtitle/Subtitle";
import Projectimg from "../../assets/project-img.png";
import ProjectBlock from "./ProjectBlock/projectBlock";

const projectList = [
  {
    logo: Projectimg,
    content: {
      title: "Fiskil",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      tags: "React, JS, HTML, CSS",
      link: "link",
    },
  },
  {
    logo: Projectimg,
    content: {
      title: "Fiskil",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      tags: "React, JS, HTML, CSS",
      link: "link",
    },
  },
  {
    logo: Projectimg,
    content: {
      title: "Fiskil",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      tags: "React, JS, HTML, CSS",
      link: "link",
    },
  },
];

const Project = (props) => {
  return (
    <div className={classes.project} id="Projects">
      <div className={classes.projectContainer}>
        <TagBar tagText="Projects" />
        <Subtitle subtitle="Some of the noteworthy projects I have built:" />
        {projectList.map((project, index) => {
          if (index % 2)
            return <ProjectBlock key={index} project={project} even={true} />;
          return <ProjectBlock key={index} project={project} even={false} />;
        })}
      </div>
    </div>
  );
};
export default Project;
