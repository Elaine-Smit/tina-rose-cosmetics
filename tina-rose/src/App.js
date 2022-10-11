import './App.css';
import tinaLogo from "./images/logo/logo-text-dark.png"
import Banner from "./components/Banner"
import Agent from "./components/Agent"
import Featured from "./components/Featured"

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="top">
          <p id="contacts">
            <a href="mailto:support@tinarose.co.za"><i class="fa-solid fa-envelope"></i> : support@tinarose.co.za </a>
            <span id="phone"><i class="fa-solid fa-phone"></i> : 068 2444 998</span>
          </p>
          <p id="socials">
            <a href="https://www.facebook.com/TinaRoseCosmetics" target="_blank" rel="noreferrer" id="fb-top">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </p>
        </div>
        <nav>
          <img src={tinaLogo} alt="Tina Rose Cosmetics logo" className="tina-logo"/>
          <ul className="top-menu">
            <li><a href="index">Welcome</a></li>
            <li><a href="shop">Shop</a></li>
            <li><a href="account">Account</a></li>
          </ul>
        </nav>
      </header>
      <Banner />
      <Agent />
      <Featured />
    </div>
  );
}

export default App;
