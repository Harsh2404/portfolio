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
                    {/* <BiSun className={classes.iconbutton}/> */}
                    <a href="https://drive.google.com/file/d/1qmGVYZiMeiInzt_nMbMiRrYb4Z4Eufv2/view?usp=sharing">
                        <Button>Download CV</Button>
                    </a>
                </div> 
            </div>    
        
    )
}

export default NavRight;
