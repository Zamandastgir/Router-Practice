import React from "react";
import styles from "../css/styles";

function Home() {
  //   const [bgmain, setbg] = React.useState(true);

  const HomeStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightcoral",
    width: "100%",
    height: "100vh",
  };
  //   const HomeStyle1 = {
  //     display: "flex",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     backgroundColor: "blue",
  //     width: "100%",
  //     height: "100vh",
  //   };
  return (
    <div style={styles.HomeStyle}>
      Home
      <button>change bg</button>
    </div>
  );
}

export default Home;
