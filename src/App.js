import logo from './logo.svg';
import './App.css';
// import C1 from './ClassComponent/C1.jsx'
// import App2 from './APP2/App2.jsx';
// import Counter from './Counter/counter.jsx';
// import Properties from './Properties/Properties.jsx';
//import Padding from './CSS/Padding/Inline/Pdding';
//import Border from './CSS/Border/Internal/Boder.jsx';
// import Margin from './CSS/Margin/External/Margin.jsx';
//import DisplayImage from './DisplayImages/DisplyImage.jsx';
//import Box from './Box/Box.jsx'
import Rendering from './Rendering/RenderData.jsx'
function App() {
  return (
    <div className="App">
      {/* <C1/>
      <App2/>
      <Counter/>
      <Properties name="John Doe" age={30} tech="react" /> */}
      {/* Properties(Jon,30) */}
      <Rendering/>
    </div>
  );
}

export default App;
