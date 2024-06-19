import classes from "./Subtitle.module.css";

const Subtitle=(props)=>{
    return(
        <div className={classes.Subtitle}>
            <div>{props.subtitle}</div>
        </div>
    )
}

export default Subtitle;