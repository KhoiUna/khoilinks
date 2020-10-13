import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div id="background">
          <img
            id="avatar"
            src={require("../images/avatar.jpg")}
            alt="Khoi Nguyen profile"
          />
        </div>

        <div className="description">
          <h3>KHOI NGUYEN</h3>
          <p>
            <em>"Hi everyone! I am Khoi and here are my links!"</em>
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
