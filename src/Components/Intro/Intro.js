
import classes from "./Intro.module.css"
import ProfilePic from "../../assets/home.jpg";


const Intro=(props)=>{
    return(
    <div className={classes.Intro} id="About">
            <div className={classes.IntroContent}>
                <p className={classes.Hello}>Hello, I'm Harsh Shah</p>
                <p className={classes.About}>
                    I'm MEng Computer Engineering graduate from University of Guelph.
                    Looking for full time opporunity as a Data Analyst or Software Developer.
                    <br/>
                    <br/>
                I'm a passionate, self-proclaimed designer who specializes in full stack development 
                (React.js & Node.js). I am very enthusiastic about bringing the technical and visual 
                aspects of digital products to life. User experience, pixel perfect design, and writing 
                clear, readable, highly performant code matters to me.
                <br/>
                <br/>
                I began my journey as a web developer in 2015, and since then, 
                I've continued to grow and evolve as a developer, taking on new 
                challenges and learning the latest technologies along the way. 
                
                
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