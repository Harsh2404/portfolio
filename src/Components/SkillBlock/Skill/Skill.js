import classes from "./Skill.module.css";

const Skill =(props)=>{
    return(
        <div className={classes.Skill}>
            {/* {props.skillList} */}
            <img src={props.url} alt={props.skill} />
            <div>{props.skill}</div>
            {/* {props.name} */}
        </div>
    )
}

export default Skill;
