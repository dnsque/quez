import logo from './questionmark.png';
import SurButton from './SurButton.js';
function HomePage() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Sukurk savo apklausą, testą arba dalyvauk pats!
          </p>
            <SurButton />
        </header>
      </div>
    );
  }
  
  export default HomePage;