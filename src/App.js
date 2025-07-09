import logo from './logo.svg';
import './App.css';
import C1 from './ClassComponent/C1.jsx'
import App2 from './APP2/App2.jsx';
import Counter from './Counter/counter.jsx';
import Properties from './Properties/Properties.jsx';

function App() {
  return (
    <div className="App">
      <C1/>
      <App2/>
      <Counter/>
      <Properties name="John Doe" age={30} tech="react" />
      {/* Properties(Jon,30) */}
    </div>
  );
}

export default App;
