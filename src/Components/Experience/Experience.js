import Subtitle from "../../UI/Subtitle/Subtitle";
import TagBar from "../../UI/TagBar/TagBar";
import classes from "./Experience.module.css";
import ExperienceBlock from "./ExperienceBlock/ExperienceBlock";
import logo from "../../assets/Logo.png";

const Experience = (props) => {
  const ExperienceList = [
    {
      logo: logo,
      content: {
        title: "Sr. FrontEnd Developer",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<li>Ut pretium arcu et massa semper, id fringilla leo semper.<li>Sed quis justo ac magna.<li>Sed quis justo ac magna.Sed quis justo ac magna.",
      },
      year: "Nov 2020 - Dec 2023"
    },
    {
        logo: logo,
        content: {
          title: "Jr. FrontEnd Developer",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<li>Ut pretium arcu et massa semper, id fringilla leo semper.<li>Sed quis justo ac magna.<li>Sed quis justo ac magna.Sed quis justo ac magna.",
        },
        year: "Nov 020 - Dec 202"
      },
      {
        logo: logo,
        content: {
          title: "FrontEnd Developer",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<li>Ut pretium arcu et massa semper, id fringilla leo semper.<li>Sed quis justo ac magna.<li>Sed quis justo ac magna.Sed quis justo ac magna.",
        },
        year: "Nov 202 - Dec 203"
      },
  ];
  return (
    <div className={classes.Experience} id="Experience">
      <div className={classes.ExperienceContainer}>
        <TagBar tagText="Experience" />
        <Subtitle subtitle="Here is a quick summary of my most recent experiences:" />
        {ExperienceList.map((expList, index)=>(<ExperienceBlock key={index} expList={expList}/>))}
      </div>
    </div>
  );
};

export default Experience;
