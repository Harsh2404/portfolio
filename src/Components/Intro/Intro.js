
import classes from "./Intro.module.css"
import ProfilePic from "../../assets/home.jpg";


const Intro=(props)=>{
    return(
    <div className={classes.Intro} id="About">
            <div className={classes.IntroContent}>
                <p className={classes.Hello}>I'm Harsh Shah.</p>
                <p className={classes.About}>
                Hey there! I'm a recent MEng Computer Engineering graduate from the University of Guelph, 
                on the lookout for full-time opportunities as a Data Analyst or Software Developer.
                <br/>
                <br/>
                I have a knack for solving problems and a genuine love for learning new things. 
                Whether it's crafting elegant code or diving deep into data insights, 
                I'm always eager to tackle challenges head-on.
                    
                
                
                <br/>
                <br/>
                Toronto, CA</p>
            </div>
            <div className={classes.PhotoContainer}>
                <img src={ProfilePic} alt="ProfilePic"/> 
            </div>
    </div>
    )
}
export default Intro;