import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "1em 0",
        background: "#3b0764",
        color: "white",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "auto",
        paddingBottom: "3em",
        textAlign: "center",
      }}
    >
      <h1 style={{ marginTop: ".25em", fontSize: "2em" }}>
        made by{" "}
        <a href="https://quinnpatwardhan.com" style={{ fontStyle: "italic" }}>
          quinnpatwardhan.com
        </a>{" "}
      </h1>
      <h1
        style={{
          fontFamily: "pt-mono",
          marginTop: "1em",
          fontSize: "1.25em",
        }}
      >
        © copyright 2023{" "}
      </h1>
      <h1
        style={{
          fontFamily: "pt-mono",

          fontSize: "1.25em",
        }}
      >
        questions? email quinn@qpxdesign.com
      </h1>
    </footer>
  );
}
