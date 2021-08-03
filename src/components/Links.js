import React from "react";

const myLinks = [
  "Best App I've Seen",
  "My Vietnamese YouTube channel",
  "My Instagram",
  "My LinkedIn",
  "My GitHub",
  "My Twitter for Programming",
];
const url = [
  "https://sharethemeal.org/donate",
  "https://www.youtube.com/c/khoiuna",
  "https://www.instagram.com/khoi.una/",
  "https://www.linkedin.com/in/khoiuna",
  "https://github.com/KhoiUna",
  "https://twitter.com/KhoiUna",
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
