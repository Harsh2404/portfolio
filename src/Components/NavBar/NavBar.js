import React from "react";
import AppLogo from "./AppLogo";
import NavRight from "./NavRight/NavRight";
import classes from './NavBar.module.css';
import MobileNav from "./MobileNav/MobileNav";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState, useEffect } from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { Fragment } from "react";
import {IoClose} from "react-icons/io5";

const NavBar =(props)=>{
    const [ShowMobile, setShowMobile] = useState(false);

    function MobileOn(){
        setShowMobile(true);
        document.body.style.overflow = 'hidden';
        console.log(ShowMobile);
    }
    function MobileOff(){
        setShowMobile(false);
        document.body.style.overflow = 'auto';
        console.log(ShowMobile);
    }
    return(
    <div>
        <div className={classes.NavBar}>
            <AppLogo />
            <NavRight />
        {!ShowMobile && <HiMenuAlt1
          className={classes.Hamburger}
          onClick={MobileOn}
        />}
        {(ShowMobile) && <IoClose
          className={classes.Hamburger}
          onClick={MobileOff}
        />}
        {(ShowMobile) && (<Fragment><Backdrop/><MobileNav changeState={MobileOff}/></Fragment>)}
        {/* {ShowMobile ? ():""} */}
                       
        </div>
        
    </div>    
    
    
    )
}

export default NavBar;  