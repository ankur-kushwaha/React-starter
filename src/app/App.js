import React, { PropTypes } from "react";
import { Link } from "react-router-dom";

const App = (props) => (
  <div className="page-container">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/counter">Counter</Link></li>
    </ul>
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
