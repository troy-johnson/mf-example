import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import Home from "@tjohnson/mf-example-home/dist/";
// import Details from "@tjohnson/mf-example-details";
// import Search from "@tjohnson/mf-example-search";
// import Settings from "@tjohnson/mf-example-settings";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <nav>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/details">Details</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" component={Home} />
          <Route path="/details" component={Details} />
          <Route path="/search" component={Search} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
