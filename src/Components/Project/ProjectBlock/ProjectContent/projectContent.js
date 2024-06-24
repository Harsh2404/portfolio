import Tag from "../../../../UI/TagBar/Tag/Tag";
import classes from "./projectContent.module.css";

const projectContent = (props) => {
  var projectTags = props.projectTags;

  projectTags = projectTags.split(",");

  return (
    <div className={classes.ProjectContent}>
      <div className={classes.ProjectTitle}><a href={props.link}>{props.projectTitle}</a></div>

      <div className={classes.ProjectText}>{props.projectText}</div>
      {/* style={{ display: "flex" }} */}
      <div className={classes.ProjectTags}>
        {projectTags.map((x, index) => (
          <Tag text={x} key={index}/>
        ))}
      </div>
      
    </div>
  );
};
export default projectContent;
