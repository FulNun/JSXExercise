
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Tweet component that takes props for username, name, date, and message
function Tweet({ username, name, date, message }) {
  return (
    <div className="tweet">
      <h3>@{username} ({name})</h3>
      <p>{message}</p>
      <small>{date}</small>
    </div>
  );
}

// App component that renders multiple tweets
function App() {
  return (
    <div>
      <Tweet 
        username="user1" 
        name="John Doe" 
        date="09/11/2024" 
        message="This is my first tweet!" 
      />
      <Tweet 
        username="user2" 
        name="Jane Smith" 
        date="09/10/2024" 
        message="Hello Twitter!" 
      />
      <Tweet 
        username="user3" 
        name="Alice Johnson" 
        date="09/09/2024" 
        message="React is awesome!" 
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
