
import React from "react";
import ReactDOM from "react-dom";

// FirstComponent - renders an h1 with the text “My very first component”
function FirstComponent() {
  return <h1>My very first component</h1>;
}

// NamedComponent - renders a p tag that accepts a name prop
function NamedComponent(props) {
  return <p>My name is {props.name}</p>;
}

// App - renders both FirstComponent and NamedComponent inside a div
function App() {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Jerrad" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
