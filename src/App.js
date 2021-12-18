import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/Tale";
import JourneySoFar from "./components/JourneySoFar/Ready";
import Community from "./components/Community/Community";
import Members from "./components/Members/Members";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Video from "./components/Video/Video";
import Blog from "./components/Blog/Blog";
import GenXArticles from "./components/Event-Pages/GenXArticles";
import EventGenXNews from "./components/Event-Pages/GenXNews";
import BPSDP from "./components/Event-Pages/BPSDP";
import GenXConference from "./components/Event-Pages/GenXConference";
import GenOMania from "./components/Event-Pages/GenOMania";
import MazeHunt from "./components/Event-Pages/MazeHunt";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  console.log("the public url is ", process.env.PUBLIC_URL);
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
            <Route path="/events.genx-articles">
              <GenXArticles />
            </Route>
            <Route path="/events.bpsdp">
              <BPSDP />
            </Route>
            <Route path="/events.genx-conference">
              <GenXConference />
            </Route>
            <Route path="/events.geno-mania">
              <GenOMania />
            </Route>
            <Route path="/events.maze-hunt">
              <MazeHunt />
            </Route>

            <Route path="/blogs">
              <Blog />
            </Route>

            <Route path="/">
              <Landing />
              <Video url="https://www.youtube.com/watch?v=uwQOHutRJqU" />
              <About />
              <JourneySoFar />
              <Blog />
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
