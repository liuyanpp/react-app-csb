import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import App from './App';
import Users from './components/Users';
import Profile from './components/Profile';
import "./index.css"

const Root = () => {
  const handleClick = () => {
    console.log('Thanks for clicking!')
  };
  return (
    <BrowserRouter>
      <div>
        {/* <Link to="/">App</Link>
        <Link to="/users">Users</Link>
        <Link to="/users/1">Andrew's Profile</Link> */}
        {/* <Link to="/" onClick={handleClick}>App with click handler</Link> */}
        <NavLink exact={true} to="/" activeStyle={{ fontWeight: "bold" }}>App</NavLink>
        <NavLink activeClassName="red" to="/users">Users</NavLink>
        <NavLink activeClassName="blue" to="/hello">Hello</NavLink>
        <NavLink activeClassName="green" to="/users/1">Andrew's Profile</NavLink>
        <NavLink exact={true} to="/" onClick={handleClick}>App with click handler</NavLink>
        <Switch>
          <Route path="/users/:userId">
            <Profile />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <App />
          </Route>
          <Route>
            <h1>404: Page not found</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
