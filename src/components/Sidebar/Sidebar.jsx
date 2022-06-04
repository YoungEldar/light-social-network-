import React from 'react';
import lol from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';


const Sidebar = () =>{
    return( 
    <nav className={lol.nav}>
            <div className={lol.item}>
                <NavLink to='/profile' activeClassName={lol.activeLink} >Profile</NavLink>
            </div>      
            <div className={lol.item}>
                <NavLink to='/dialogs' activeClassName={lol.activeLink}>Message</NavLink>
            </div>  
            <div className={lol.item}>
                <NavLink to='/news' activeClassName={lol.activeLink} >News</NavLink>
            </div>  
            <div className={lol.item}>
                <NavLink to='/music' activeClassName={lol.activeLink} >Music</NavLink>
            </div>    
            <div className={lol.item}>
                <NavLink to='/settings' activeClassName={lol.activeLink} >Settings</NavLink>
            </div>        
    </nav>
    );
}


export default Sidebar;