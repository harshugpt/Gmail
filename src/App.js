import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import MailList from "./components/MailList";
import MailDetail from "./components/MailDetail";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Sidebar />
        <Routes>
          <Route exact path="/" component={MailList} />
          <Route exact path="/:tag" component={MailList} />
          <Route exact path="/:tag/:id" component={MailDetail} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
