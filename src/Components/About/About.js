import AboutContent from "./AboutContent/AboutContent";
import classes from "./About.module.css"
import ProfilePic from "../../assets/ProfilePic(280x320).jpeg";
import TagBar from "../../UI/TagBar/TagBar";

const About=(props)=>{
    return(
    <div className={classes.About} id="About">
        <div className={classes.AboutBox}>
            <TagBar tagText={"About Me"}/>
            <div className={classes.Box}>
                <div className={classes.PhotoContainer}>
                        
                </div>
                <AboutContent/>
            </div>
           
        </div>
        
        
    </div>
    )
}
export default About;