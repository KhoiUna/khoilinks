import React from "react";

const myLinks = [
  "Make an Impact",
  "The app I'm building",
//   "Register to my app now!",
  "My Vietnamese YouTube channel",
  "My Instagram",
  "My LinkedIn",
  "My GitHub",
];
const url = [
  "https://sharethemeal.org/donate",
  "https://www.instagram.com/chek.chat/",
//   "https://chekchat.xyz/",
  "https://www.youtube.com/c/khoiuna",
  "https://www.instagram.com/khoi.una/",
  "https://www.linkedin.com/in/khoiuna",
  "https://github.com/KhoiUna",
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
