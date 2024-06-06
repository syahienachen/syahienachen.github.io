import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {

  const [isOpenedAtApp, setIsOpenedAtApp] = useState(false);

  useEffect(() => {
    setIsOpenedAtApp(isApp())
  }, [])

  const isApp = () => {
    return window.self === window.top;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {isOpenedAtApp ? 
        <p>This is Opened at Browser</p>
        :
        <p>This is Opened at App Email</p>
        }

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
