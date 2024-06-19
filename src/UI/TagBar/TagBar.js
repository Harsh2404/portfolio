import Tag from "./Tag/Tag";
import classes from "./TagBar.module.css";

const TagBar = (props)=>{
    return(
        <div className={classes.TagBar}>
            <Tag text={props.tagText}/>
        </div>
    )
}

export default TagBar;