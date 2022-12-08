import logo from './shylock-logo.png';
import './App.css';
import twitterIcon from './twitter.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="container">
          
          <div className="main-content">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Comming Soon
            </p>
            <button className="intent-tweet">
              <a href="http://twitter.com/intent/tweet?text=Welcome%20to%20Shylock%20Intent%20Tweet.">
              WAITING ROOM
              </a>
            </button>
          </div>

          <div className='header'>
          <button className="twitter-btn">
            <a href="https://twitter.com/shylocknft">
              <img src={twitterIcon} className="twitter-logo" alt="twitter" />
            </a>
          </button>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
