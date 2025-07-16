import { useNavigate } from "react-router-dom";
import { NavLink ,Link} from "react-router-dom";
function Routing(){
var navigate=useNavigate();
    return(
        <div>
            <div>
                <h1>USE NAVIGATE</h1>
            <button onClick={()=>{navigate('/counter')}}>Counter</button>
            <button onClick={()=>{navigate('/displayimages')}}>Display Images</button>
            </div>
            <div>
                <h1>NAV LINK</h1>
                <NavLink to='/'>Counter</NavLink><br></br>
                <NavLink to='displayimages'>Display Images</NavLink>
            </div>
            <div>
                <h1>Link</h1>
                <Link to='/counter'>Counter</Link><br></br>
                <Link to='displayimages'>Display Images</Link>
            </div>
        </div>
    )
}
export default Routing