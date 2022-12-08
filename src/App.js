import logo from './shylock-logo.png';
import './App.css';
import twitterIcon from './twitter.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className="container">
       <img src={logo} className="App-logo" alt="logo" />
        <p>
          Comming Soon
        </p>
        <button className="twitter-btn">
          <a href="https://twitter.com/shylocknft">
          <img src={twitterIcon} className="twitter-logo" alt="twitter" />
          </a>
          </button>
       </div>
      </header>
    </div>
  );
}

export default App;
