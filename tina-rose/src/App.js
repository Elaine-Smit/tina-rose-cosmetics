import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
          <ul className="">
            <li>Welcome</li>
            <li>Shop</li>
            <li>Account</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
