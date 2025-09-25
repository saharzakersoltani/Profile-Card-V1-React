import React, { StrictMode } from "react";
import ReactDom from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img
        className="profile"
        src="profile-card/profile.jpg"
        alt="profile card"
      />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>jonas schmedtmann</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook(and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div>
      <ul className="skill-list">
        <li className="skill" style={{ backgroundColor: "blue" }}>
          HTML and CSS 💪
        </li>
        <li className="skill" style={{ backgroundColor: "#edd222ff" }}>
          JavaScript 💪
        </li>
        <li className="skill" style={{ backgroundColor: "#cadf8bff" }}>
          Web Design 💪
        </li>
        <li className="skill" style={{ backgroundColor: "#d5056dff" }}>
          Git and GitHub 👍
        </li>
        <li className="skill" style={{ backgroundColor: "#22ceedff" }}>
          React 💪
        </li>
        <li className="skill" style={{ backgroundColor: "#ed2222ff" }}>
          Svelte 👶
        </li>
      </ul>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
