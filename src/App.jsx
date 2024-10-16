import React, { useEffect, useState } from "react";
import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  const[edittask,setedittask]=useState("loltest");
  return (
    
    <div>
      <p>{edittask}</p>

      <Header />
      <p>ajknkcjdnckjsndkjcnskdjcnksncksdnc</p>
      <Body edittask={edittask} setedittask={setedittask} />
      <Footer />
    </div>
  );
}
