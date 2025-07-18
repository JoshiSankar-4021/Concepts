import logo from './logo.svg';
import './App.css';
// import C1 from './ClassComponent/C1.jsx'
// import App2 from './APP2/App2.jsx';
import Counter from './Counter/counter.jsx';
// import Properties from './Properties/Properties.jsx';
//import Padding from './CSS/Padding/Inline/Pdding';
import Border from './CSS/Border/Internal/Boder.jsx';
// import Margin from './CSS/Margin/External/Margin.jsx';
import DisplayImage from './DisplayImages/DisplyImage.jsx';
//import Box from './Box/Box.jsx'
import {Routes,Route} from 'react-router-dom'
import Rendering from './Rendering/RenderData.jsx'
import Routing from './Routing/Routing.jsx'
import Nav from './Navbar/Navbar.jsx'
import SideNav from './Sidenavbar/Sidenav.jsx';
import Animations from'./Animations/Animation.jsx';
function App() {
  return (
    <>
  {/* <SideNav/> */}
  <Nav/>
    <Routes>
      <Route path='/' element={<Routing/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/displayimages' element={<DisplayImage/>}/>
      <Route path='/Rendering' element={<Rendering/>}/>
      <Route path='/Animations' element={<Animations/>}/>
    </Routes>
      </>
  );
}

export default App;
