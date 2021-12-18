import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/Tale";
import JourneySoFar from "./components/JourneySoFar/Ready";
import EventGenXNews from "./components/Event-Page/Sponsors";
import Community from "./components/Community/Community";
import Members from "./components/Members/Members";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Video from "./components/Video/Video";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <div className="content">
          <Switch>
            <Route path="/about">
              <About />
              <JourneySoFar />
            </Route>

            <Route path="/members">
              <Members />
            </Route>

            <Route path="/events">
              <Events />
            </Route>

            <Route path="/events.genx-news">
              <EventGenXNews />
            </Route>

            <Route path="/">
              <Landing />
              <Video url="https://www.youtube.com/watch?v=uwQOHutRJqU" />
              <About />
              <JourneySoFar />
              <Events />
              <Members />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
