import React from "react";

export default function Header() {
  return (
    <header className="hstack" style={{ zIndex: 100 }}>
      <img />
      <h1 style={{ fontFamily: "Inter", fontWeight: 800, zIndex: 5 }}>
        Locomotive
      </h1>
    </header>
  );
}
