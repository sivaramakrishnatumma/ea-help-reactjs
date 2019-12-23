import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Accounts from "./pages/accounts/Accounts";
import ContactUs from "./pages/contactus/ContactUs";
import Games from "./pages/games/Games";
import Home from "./pages/home/Home";
import Footer from "./shared/components/Footer/Footer";
import NavBar from "./shared/components/Navigation/NavBar";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/accounts" exact>
            <Accounts />
          </Route>
          <Route path="/contact-us" exact>
            <ContactUs />
          </Route>
          <Route path="/games" exact>
            <Games />
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
