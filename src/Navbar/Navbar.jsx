import { NavLink } from "react-router-dom";
import './Navbar.css'
function Navbar(){
    
    return(
        <div className="Navbar">
            <div className="NavItem">
                <NavLink to='/counter' className="NavLinkStyle">COUNTER</NavLink>
            </div>
           <div className="NavItem">
                <NavLink to='/'className="NavLinkStyle">Routing</NavLink>
           </div>
            <div className="NavItem">
                 <NavLink to='displayimages'className="NavLinkStyle">Display</NavLink>
            </div>
            <div className="NavItem">
             <NavLink to='/Rendering'className="NavLinkStyle">Rendering</NavLink>
            </div>
        </div>
    );
}
export default Navbar
