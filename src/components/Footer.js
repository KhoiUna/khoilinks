import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <p>
          &copy; {new Date().getFullYear()} by Khoi Nguyen. Made with{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
