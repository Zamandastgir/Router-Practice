import React from "react";

function Navbar() {
  return (
    <div
      style={{
        width: "25%",
        height: "100vh",
        backgroundColor: "ActiveCaption",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "ButtonHighlight",
        }}
      >
        <img
          style={{ width: 200, height: 200, borderRadius: 100, marginTop: 20 }}
          src="https://i.pinimg.com/originals/b4/38/e5/b438e517360e50e4a3da902734f0bc72.png"
          alt="img"
        />
      </div>
      <div
        style={{
          display: "flex",
          height: "69vh",
          backgroundColor: "lightgreen",
          flexDirection: "column",
          padding: 30,
        }}
      >
        <h1 style={{ marginBottom: 10 }}>ZAMAN BHATTI</h1>
        <h3 style={{ marginBottom: 20 }}>Home</h3>
        <h3 style={{ marginBottom: 20 }}>Aboute Us</h3>
        <h3 style={{ marginBottom: 20 }}>Resume</h3>
        <h3 style={{ marginBottom: 20 }}>Portfolio</h3>
        <h3 style={{ marginBottom: 20 }}>Blog</h3>
        <h3 style={{ marginBottom: 20 }}>Contact Me</h3>
      </div>
    </div>
  );
}

export default Navbar;
