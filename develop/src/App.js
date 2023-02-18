import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {
  const [togglesidebar, setToggleSidebar] = useState(true)
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-calendar-div">
          <button onClick={() => setToggleSidebar(!togglesidebar)} className="togglesidebar-btn"></button>
          <p>Calendar</p>
        </div>
        <div className="navbar-controls-div">
          <input className="searchbox" placeholder="Search"></input>
          <button>Days</button>
          <button>Weeks</button>
          <button>Month</button>
          <button>Agenda</button>
          <button className="profile"></button>
        </div>
      </nav>
      <main  className="container">
        <aside className={togglesidebar ? "sidebar" : "sidebar hidden"}>
            <div className="sidebarheader">
            
            </div>
          </aside>
          <section className="maincontainer">

            <div className="callendarcontainer">
                
            </div>
          </section>
      </main>
       
    </div>
  );
}

export default App;
