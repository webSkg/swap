"use client";

import Header from "./Components/header";
// import Countdown from './Countdown'
import Hero from "./Components/Hero";
import useMediaQuery from "@mui/material/useMediaQuery";
import Mobheader from "./Components/mobheader";
import Mobtop from "./Components/mobtop";


export default function Home() {
  const mobile = useMediaQuery("(max-width:600px)");

  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        display: mobile ? "flex" : "block",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      {mobile && <Mobtop />}
      {!mobile && <Header />}
      <Hero />
      {mobile && <Mobheader />}
      {/* <Link></Link> */}
    </main>
  );
}
