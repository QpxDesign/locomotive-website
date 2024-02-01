import React from "react";
import Ticker from "../components/Ticker";

export default function Analytics() {
  return (
    <section style={{ background: "#e4e4e7" }}>
      <h1 style={{ padding: ".5em" }}>Our Results</h1>
      <div className="stats-grid full-center">
        <Ticker
          headlineNumber={22000}
          subtext={"Downloads on Apple App Store"}
        />
        <Ticker headlineNumber={15000} subtext={"Monthly Active Users"} />
        <Ticker headlineNumber={30} subtext={"Five Star Reviews"} />
        <Ticker headlineNumber={300} subtext={"Train Trips/Day"} />
        <Ticker headlineNumber={15} subtext={"Custom Graphics"} />
        <Ticker headlineNumber={50} subtext={"States With Users"} />
      </div>
    </section>
  );
}
