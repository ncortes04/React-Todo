import logo from './logo.svg';
import {useState, useRef, useEffect} from 'react'
import './App.css';
function App() {
  const [togglesidebar, setToggleSidebar] = useState(false)
  const profile = {name: "John Doe", calendar:{1:["jodajdsjadoasdjsjos", "asdasdadsdadad"], 2:["31313", "12313111"], 4:["31313", "12313111"]}}
  const CalendarArray = useRef([])

useEffect(() => {
    for(let i = 1; i < 31; i++){
        if (profile.calendar[i]){
          CalendarArray.current[i] = (profile.calendar[i])
        } else {
          CalendarArray.current[i] = ([])
        }
}
}, [profile.Calendar])

console.log(CalendarArray.current)
var joe = function(event) {
  let jsx = []
  for(let i = 0; i < event.length; i++){
    jsx.push(<div className='event-box'>{event[i]}</div>)
  }
  return jsx
}
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
              {CalendarArray.current.map((item, index) => {
                return(
                  [<div className='calendar-box'>
                       <p>{index}</p>
                       {joe(item)}
                  </div>
                 ]
                )
              })}
            </div> 
          </section>
      </main>
       
    </div>
  );
}

export default App;
