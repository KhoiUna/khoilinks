import React from "react";

const myLinks = [
  "My Vietnamese YouTube channel",
  "My Instagram",
  "My LinkedIn",
  "My GitHub",
  "My Twitter for Programming",
  "My Twitter for Investing",
  "My Investing Blog",
];
const url = [
  "https://www.youtube.com/c/khoiuna",
  "https://www.instagram.com/khoi.una/",
  "https://www.linkedin.com/in/khoiuna",
  "https://github.com/KhoiUna",
  "https://twitter.com/KhoiUna",
  "https://twitter.com/InvestingKhoi",
  "https://thorwaitson.wixsite.com/website",
];

class Links extends React.Component {
  render() {
    return (
      <div className="Links">
        <div className="link-boxes-container">
          {myLinks.map((link, index) => (
            <a
              href={url[index]}
              target="_blank"
              rel="noopener noreferrer"
              linkName={link}
            >
              <p id="linkbox">{link}</p>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Links;
