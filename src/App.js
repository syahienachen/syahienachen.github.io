import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {

  const [isOpenedAtAppTwo, setIsOpenedAtAppTwo] = useState(false);

  useEffect(() => {
    const inAppTwo = isAppTwo();

    setIsOpenedAtAppTwo(isAppTwo())

    if (inAppTwo || (document.referrer !== '')) {
      bukaDiChrome('https://syahienachen.vercel.app');
      // window.location = "googlechrome://navigate?url=" + encodeURIComponent('https://syahienachen.vercel.app/');
    }
  }, [])

  const isAppTwo = () => {
    return navigator.userAgent.includes("Android") && (navigator.userAgent.includes("wv") || navigator.userAgent.includes("WebView"))
  }

  const bukaDiChrome = (url) => {
    // Membuat intent URL dengan paket aplikasi Chrome
    const intentURL = 'intent://' + url + '#Intent;package=com.android.chrome;scheme='+url+';end;';

    // Membuat elemen <a> baru dengan href yang disetel ke intent URL
    var link = document.createElement('a');
    link.setAttribute('href', intentURL);

    // Simulasikan klik pada tautan
    link.click();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>{`${window.navigator.userAgent}`}</p>
        <p>{`${document.referrer}`}</p>

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
