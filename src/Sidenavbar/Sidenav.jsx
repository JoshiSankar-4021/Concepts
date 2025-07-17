import { NavLink } from "react-router-dom";
import './Sidenav.css';
function Sidenav(){
    
    return(
        <div className="sideNavbar">
            <div className="sideNavItem">
                <NavLink to='/counter' className="sideNavLinkStyle">COUNTER</NavLink>
            </div>
           <div className="sideNavItem">
                <NavLink to='/'className="sideNavLinkStyle">Routing</NavLink>
           </div>
            <div className="sideNavItem">
                 <NavLink to='displayimages'className="sideNavLinkStyle">Display</NavLink>
            </div>
            <div className="sideNavItem">
             <NavLink to='/Rendering'className="sideNavLinkStyle">Rendering</NavLink>
            </div>
        </div>
    );
}
export default Sidenav
