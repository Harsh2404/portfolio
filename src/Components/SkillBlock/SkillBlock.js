import classes from "./SkillBlock.module.css";
import Skill from "./Skill/Skill";
import TagBar from "../../UI/TagBar/TagBar";
import Subtitle from "../../UI/Subtitle/Subtitle";
import logo from "../../assets/Logo.png";

const skillBlock =(props)=>{
    const skillList = [
      { name: "logo", url: logo },
      { name: "logo", url: logo },
      { name: "logo", url: logo },
      { name: "logo", url: logo },
      { name: "logo", url: logo },
      { name: "logo", url: logo },
      { name: "logo", url:logo },
      { name: "logo", url:logo },
      { name: "logo", url: logo },
      { name: "logo", url: logo },
      { name: "logo", url: logo },
      { name: "logo", url: logo },
      { name: "logo", url: logo },
      { name: "logo", url: logo },
      { name: "logo", url:logo },
      { name: "logo", url:logo },
      { name: "logo", url:logo },
      { name: "logo", url:logo },
      { name: "logo", url:logo },
    ];
    return(
        <div className={classes.SkillBlock}>
            <div className={classes.SkillContainer}>
                <TagBar tagText="Skills"/>
                <Subtitle subtitle="The skills, tools and technologies I am really good at:"/>
                <div className={classes.SkillList}>
                    {skillList.map((skill, index)=>(<Skill key={index} skill={skill.name} url={skill.url}/>))}
                </div>
            </div>
        </div>
    )
}

export default skillBlock;