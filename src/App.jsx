import { SpeedInsights } from "@vercel/speed-insights/react";
import React from "react";
import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";
export default function App() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
      <SpeedInsights />
    </div>
  );
}
