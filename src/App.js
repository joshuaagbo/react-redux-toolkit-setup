import React from "react";
import "./App.css";
import { PostsComponent } from "./components/posts";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>React Redux Toolkit Setup</h4>
      </header>

      <PostsComponent />
    </div>
  );
}

export default App;
