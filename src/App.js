import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {

  const [isOpenedAtApp, setIsOpenedAtApp] = useState(false);
  const [isOpenedAtAppTwo, setIsOpenedAtAppTwo] = useState(false);

  useEffect(() => {
    setIsOpenedAtApp(isApp())
    setIsOpenedAtAppTwo(isAppTwo())
  }, [])

  const isApp = () => {
    return window.self === window.top;
  }

  const isAppTwo = () => {

  return navigator.userAgent.includes("Android") && (navigator.userAgent.includes("wv") || navigator.userAgent.includes("WebView"))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>{`${window.navigator.userAgent}`}</p>

        <p>{`${window.location.href}`}</p>

        <p>{`${navigator.userAgent} <==> ${navigator.vendor} <==> ${window.opera}`}</p>

        {isOpenedAtApp ? 
        <p>This is Opened at Browser</p>
        :
        <p>This is Opened at App Email</p>
        }

        {isOpenedAtAppTwo ? 
        <p>This is Opened at App Two</p>
        :
        <p>This is Opened at Browser Two</p>
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
