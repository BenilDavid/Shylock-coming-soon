import logo from './shylock-logo.png';
import './App.css';
import twitterIcon from './twitter.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Comming Soon
        </p>
        <button className="twitter-btn">
          <img src={twitterIcon} className="twitter-logo" alt="twitter" />
          @ SHYLOCK
          </button>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a> */}
      </header>
    </div>
  );
}

export default App;
