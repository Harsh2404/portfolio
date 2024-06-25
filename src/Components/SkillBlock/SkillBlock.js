import classes from "./SkillBlock.module.css";
import Skill from "./Skill/Skill";
import TagBar from "../../UI/TagBar/TagBar";
import Subtitle from "../../UI/Subtitle/Subtitle";



const skillBlock =(props)=>{

  const images = require.context('../../assets/skills', false);
  const skillList = images.keys().map((image)=>({name: image.replace('./', '').replace(/\.[^/.]+$/, ""), url: images(image)}));
  console.log(skillList);



    return(
        <div className={classes.SkillBlock}>
            <div className={classes.SkillContainer}>
                <TagBar tagText="Skills"/>
                <Subtitle subtitle="The skills, tools and technologies I am have worked with:"/>
                <div className={classes.SkillList}>
                    {skillList.map((skill, index)=>(<Skill key={index} skill={skill.name} url={skill.url}/>))}
                </div>
            </div>
        </div>
    )
}

export default skillBlock;