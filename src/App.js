import React from "react";
import app from "./css/app.css";

import Navbar from "./screens/Navbar";
import Container from "./screens/Container";

function App() {
  return (
    <div style={{ margin: 0, padding: 0, boxSizing: "border-box" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Navbar />
        <Container />
      </div>
    </div>
  );
}

export default App;
