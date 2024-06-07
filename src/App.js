import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const App = () => {

  const [isOpenedAtAppTwo, setIsOpenedAtAppTwo] = useState(false);

  useEffect(() => {
    const inAppTwo = isAppTwo();

    setIsOpenedAtAppTwo(isAppTwo())

    if (inAppTwo || (document.referrer !== '')) {
      window.onload = () => {
        bukaDiChrome('https://syahienachen.vercel.app');
      }
      // window.location = "googlechrome://navigate?url=" + encodeURIComponent('https://syahienachen.vercel.app/');
    }
  }, [])

  const isAppTwo = () => {
    return navigator.userAgent.includes("Android") && (navigator.userAgent.includes("wv") || navigator.userAgent.includes("WebView"))
  }

  const bukaDiChrome = (url) => {
    // Membuat intent URL dengan paket aplikasi Chrome
    const intentURL = `intent://stackoverflow.com/#Intent;scheme=https;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;end;`;

    // Membuat elemen <a> baru dengan href yang disetel ke intent URL
    const link = document.createElement('a');
    link.setAttribute('href', intentURL);

    // Menyembunyikan elemen agar tidak terlihat oleh pengguna
    link.style.display = 'none';

    // Menambahkan elemen <a> ke dalam body
    document.body.appendChild(link);

    // Simulasikan klik pada tautan
    link.click();

    // Menghapus elemen <a> setelah klik
    document.body.removeChild(link);
  }

  // const bukaDiChrome = (url) => {
  //    window.open(url, '_system');
  // };

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
