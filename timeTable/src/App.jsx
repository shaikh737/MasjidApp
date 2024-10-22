import * as React from "react";
import image from "../img/mImg.jpg";
import "./App.css";
import "./index.css";
import NamazTable from "./table";

export default function App() {
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={image} className="logo" alt="Masjid logo" />
        <h1>الآ اِلَهَ اِ لّا اللّهُ مُحَمَّدٌ رَسُوُل اللّهِ</h1>
        <NamazTable />
      </div>
    </div>
  );
}
