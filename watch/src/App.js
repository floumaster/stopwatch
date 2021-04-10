import './App.css';
import StopWatch from './components/stopWatch/StopWatch'
import Links from './components/links/Links'

function App() {
  return (
    <div className="App">
      <img className="stars" src="/images/bg-stars.svg" alt="stars"/>
      <img className="hills" src="/images/pattern-hills.svg" alt="hills"/>
      <StopWatch/>
      <Links/>
    </div>
  );
}

export default App;
