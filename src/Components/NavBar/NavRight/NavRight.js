import classes from "./NavRight.module.css";
import NavItem from "./NavItem/NavItem";
import Button from "../../../UI/Button/Button";
import {BiSun} from "react-icons/bi";


const NavRight=(props)=>{
    return(
            <div className={classes.NavRight}>
                <div className={classes.Navigation}>
                    <NavItem title="About" LinkTo="#About"/>
                    <NavItem title="Experience" LinkTo="#Experience"/>
                    <NavItem title="Projects" LinkTo="#Projects"/>
                    <NavItem title="Contact" LinkTo="#Contact" />
                </div>
                <div className={classes.vl}></div>
                <div className={classes.NavAction}>
                    <BiSun className={classes.iconbutton}/>
                    <Button>Download CV</Button>
                </div> 
            </div>    
        
    )
}

export default NavRight;
