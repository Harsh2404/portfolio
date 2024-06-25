import classes from "./MobileNav.module.css";
import NavItem from "../NavRight/NavItem/NavItem";
import Button from "../../../UI/Button/Button";


const NavRight = (props) => {

  return (
    <div className={classes.MobileNav}>
        <div className={classes.MobileNavContent}>
        <div className={classes.Navigation}>
          <NavItem title="About" LinkTo="#About" CloseBackdrop={props.changeState}/>
          <NavItem title="Experience" LinkTo="#Experience" CloseBackdrop={props.changeState}/>
          <NavItem title="Projects" LinkTo="#Projects" CloseBackdrop={props.changeState}/>
          <NavItem title="Contact" LinkTo="#Contact" CloseBackdrop={props.changeState}/>
           <div className={classes.NavAction}>
            <a href="https://drive.google.com/file/d/1qmGVYZiMeiInzt_nMbMiRrYb4Z4Eufv2/view?usp=sharing">
              <Button>Download CV</Button>
            </a>
        </div>
        </div>
       
        </div>
    </div>
  );
};

export default NavRight;
