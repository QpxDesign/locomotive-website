import React, { useState } from "react";
import { CustomAlert } from "../utils/CustomAlert";

export default function Contact() {
  const [messageTitle, setMessageTitle] = useState("");
  const [messageName, setMessageName] = useState("");
  const [messageBody, setMessageBody] = useState("");
  async function handleSendContactField() {
    let data = {
      author: messageName + "---LOCOMOTIVE_WEBSITE",
      title: messageTitle,
      messageBody: messageBody,
    };

    await fetch("https://api.quinnpatwardhan.com/send-contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    }).then(() => {
      CustomAlert("Message Sent.", "", "close");
      setMessageTitle("");
      setMessageName("");
      setMessageBody("");
    });
  }
  return (
    <section style={{ background: "#d4d4d8" }}>
      {" "}
      <h1 style={{ padding: ".5em" }}>Contact</h1>
      <div className="blog-editor-wrapper">
        <div className="form-item">
          <label>Email</label>
          <input
            onChange={(e) => setMessageTitle(e.target.value)}
            value={messageTitle}
          />
        </div>{" "}
        <div className="form-item">
          <label>Subject</label>
          <input
            onChange={(e) => setMessageName(e.target.value)}
            value={messageName}
          />
        </div>{" "}
        <div className="form-item">
          <label>Body</label>
          <textarea
            className="big"
            style={{ height: "40vh" }}
            onChange={(e) => setMessageBody(e.target.value)}
            value={messageBody}
          />
        </div>{" "}
        <button
          onClick={() => handleSendContactField()}
          className="cool-purple-button"
          style={{ fontSize: "1.5em" }}
        >
          Send
        </button>
      </div>
    </section>
  );
}
