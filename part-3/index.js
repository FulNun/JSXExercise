
import React from "react";
import ReactDOM from "react-dom";

// Person component that takes name, age, and hobbies as props
function Person({ name, age, hobbies }) {
  const displayName = name.length > 8 ? name.slice(0, 6) : name;
  return (
    <div>
      <p>Learn some information about this person</p>
      <h3>{age >= 18 ? "please go vote!" : "you must be 18"}</h3>
      <p>Name: {displayName}</p>
      <p>Age: {age}</p>
      <ul>
        {hobbies.map((hobby, idx) => (
          <li key={idx}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

// App component that renders multiple Person components
function App() {
  return (
    <div>
      <Person 
        name="Alexander" 
        age={21} 
        hobbies={["Reading", "Cycling", "Coding"]} 
      />
      <Person 
        name="Sam" 
        age={17} 
        hobbies={["Gaming", "Skating", "Drawing"]} 
      />
      <Person 
        name="Christopher" 
        age={25} 
        hobbies={["Hiking", "Music", "Traveling"]} 
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
