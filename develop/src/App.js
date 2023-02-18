import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
function App() {
  const [togglesidebar, setToggleSidebar] = useState(true)
  const profile = {name: "John Doe", events:{}}
  const calendar =
   ['', '', '', '', '',
  '', '', '', '', '',
  '', '', '', '', '',
  '', '', '', '', '',
  '', '', '', '', '',
  '','','', '', '', ''
]
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-calendar-div">
          <button onClick={() => setToggleSidebar(!togglesidebar)} className="togglesidebar-btn"></button>
          <p>Calendar</p>
        </div>
        <div className="navbar-controls-div">
          <input className="searchbox" placeholder="Search"></input>
          <a>Days</a>
          <a>Weeks</a>
          <a>Month</a>
          <a>Agenda</a>
        </div>
        <button className="profile"></button>
      </nav>
      <main  className="container">
        <aside className={togglesidebar ? "sidebar" : "sidebar hidden"}>
            <div className='profile-div'>
                <img src={logo} loading="lazy"></img>
                <p>{profile.name}</p>
            </div>
            <div className='sidebar-btn-div'><p>Calendar</p></div>
            <div className='sidebar-btn-div'><p>Events</p></div>
            <div className='sidebar-btn-div'><p>Taks</p></div>
            <div className='sidebar-btn-div'><p>Upcoming</p></div>
          </aside>
          <section className="maincontainer">
            <div className="calendarcontainer">
              {calendar.map((item, index) => {
                return(<div className='calendar-box'>{index + 1}</div>)
              })}
            </div>
          </section>
      </main>
       
    </div>
  );
}

export default App;
