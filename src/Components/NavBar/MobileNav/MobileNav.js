import classes from "./MobileNav.module.css";
import NavItem from "../NavRight/NavItem/NavItem";
import Button from "../../../UI/Button/Button";
import { BiSun } from "react-icons/bi";


const NavRight = (props) => {

  return (
    <div className={classes.MobileNav}>
        <div className={classes.MobileNavContent}>
        <div className={classes.Navigation}>
          <NavItem title="About" LinkTo="#About" CloseBackdrop={props.changeState}/>
          <NavItem title="Experience" LinkTo="#Experience" CloseBackdrop={props.changeState}/>
          <NavItem title="Projects" LinkTo="#Projects" CloseBackdrop={props.changeState}/>
          <NavItem title="Contact" LinkTo="#Contact" CloseBackdrop={props.changeState}/>
        </div>
        <div className={classes.NavAction}>
          <div className={classes.ModeChange}><p>Mode Change</p><BiSun className={classes.iconbutton} /></div>
          <Button>Download CV</Button>
        </div>
        </div>
    </div>
  );
};

export default NavRight;
