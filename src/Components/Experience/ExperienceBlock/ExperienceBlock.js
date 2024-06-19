import classes from "./ExperienceBlock.module.css";
import ExpContent from "./ExpContent/ExpContent";

const ExperienceBlock = (props) => {
  return (
    <div className={classes.ExperienceBlock}>
      <div className={classes.ExpLogo}>
        <img
          src={props.expList.logo}
          alt="logo"
          style={{ width: "80px", height: "80px" }}
        />
      </div>
      <ExpContent
        expTitle={props.expList.content.title}
        expText={props.expList.content.info}
      />
      <div className={classes.ExpYear}>{props.expList.year}</div>
    </div>
  );
};

export default ExperienceBlock;
