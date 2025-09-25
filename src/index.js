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
    <div className="skill-list">
      <Skill name="HTML+CSS" emoji="💪" color="#edd222ff" />
      <Skill name="JavaScript" emoji="💪" color="#cadf8bff" />
      <Skill name="Web Design" emoji="💪" color="#d5056dff" />
      <Skill name="Git and GitHub" emoji="👍" color="#22ceedff" />
      <Skill name="Svelte" emoji="👶" color="#ed2222ff" />
    </div>
  );
}

// #ed2222ff  #22ceedff    #d5056dff  #cadf8bff  #edd222ff

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
