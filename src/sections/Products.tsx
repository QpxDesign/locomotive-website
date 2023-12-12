import React from "react";
import MarcMapAppIcon from "../assets/MarcMapAppIcon.png";
import LocomotiveAppIcon from "../assets/LocomotiveAppIcon.png";
import Github from "../assets/Github.png";
import AppleAppStore from "../assets/AppleAppStore.svg";
import GoogePlay from "../assets/GoogePlay.svg";

export default function Products() {
  return (
    <section style={{ background: "#f4f4f5" }}>
      <h1 style={{ padding: ".5em" }}>Our Products</h1>
      <div
        className="hstack hcenter"
        style={{ flex: 1, width: "95%", height: "100%", flexWrap: "wrap" }}
      >
        <div style={{ flex: 1, minWidth: "30em", alignItems: "flex-start" }}>
          <img
            src={LocomotiveAppIcon}
            style={{
              width: "10em",
              borderRadius: "2em",
              border: "3px solid black",
            }}
          />
          <h2>AmTrack: Track Amtrak Trains</h2>
          <ul
            className="vstack"
            style={{
              fontSize: "1.25rem",
              marginRight: "auto",
              padding: 0,
              gap: "1.25em",
            }}
          >
            <li>
              Allows users to track their Amtrak Trains Natively on IOS and
              Android{" "}
            </li>
            <li>Front-End Written in Typescript-Based React Native</li>
            <li>Back-End Written in Express.js, dockerized</li>
            <li>
              All assets designed in-house using Adobe Illustrator with a care
              for the history of the system
            </li>
            <li>
              Used by thousands across North America, even by those at the US
              DOT (Department of Transportation)
            </li>
            <li>
              Receives Dozens of Daily Downloads and Hundreds of Daily Users
            </li>
            <li>5-Star Rating on the Apple App Store</li>
            <li>Frequently Updated and Improved (5+ updates issued)</li>
            <li>Fully Open-Source</li>
          </ul>
          <div>
            <a href="https://github.com/qpxdesign/locomotive">
              <img
                src={Github}
                style={{
                  width: "4em",
                  border: "3px solid black",
                  padding: ".33em",
                  borderRadius: "1em",
                  cursor: "pointer",
                }}
              />
            </a>
            <a href="https://apps.apple.com/us/app/amtrack-track-amtrak-trains/id6449875541?platform=iphone">
              <img
                src={AppleAppStore}
                style={{
                  height: "4em",
                  padding: ".33em",
                  borderRadius: "1em",
                  cursor: "pointer",
                }}
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.amtrack&hl=en_US&gl=US">
              <img
                src={GoogePlay}
                style={{
                  height: "4em",
                  padding: ".33em",
                  borderRadius: "1em",
                  cursor: "pointer",
                }}
              />
            </a>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: "30em" }}>
          <img
            src={MarcMapAppIcon}
            style={{
              width: "10em",
              borderRadius: "2em",
              border: "3px solid black",
            }}
          />
          <h2>MarcMap</h2>
          <ul
            className="vstack"
            style={{
              fontSize: "1.25rem",
              marginRight: "auto",
              padding: 0,
              gap: "1.25em",
            }}
          >
            <li>
              Allows users to track their MARC (Maryland Area Commuter Rail)
              Trains on both IOS and Web
            </li>
            <li>
              Web Front-End Written in React.JS, Eloquently Designed for Mobile
              and Desktop with CSS
            </li>
            <li>
              Mobile Front-End Written in SwiftUI, written to ensure stability
              and ease-of-use
            </li>
            <li>
              Back-End Written in Express.js, parses Protobuf-Based GTFS and
              HTML Data provided by the MTA (Maryland Transit Authority),
              containerized with Docker
            </li>
            <li>
              Received 10,000+ Downloads on the Apple App Store and 100+ Daily
              Users
            </li>
            <li>Updated and Adapted App Based on User Feedback</li>
            <li>
              All assets designed in-house using Adobe Illustrator with a care
              for the history of the system
            </li>
            <li>Fully Open-Source</li>
          </ul>
          <div style={{ display: "flex", alignItems: "center" }}>
            <a href="https://github.com/qpxdesign/marc-map-ios">
              <img
                src={Github}
                style={{
                  width: "4em",
                  border: "3px solid black",
                  padding: ".33em",
                  borderRadius: "1em",
                  cursor: "pointer",
                }}
              />
            </a>
            <a href="https://apps.apple.com/us/app/marcmap-track-marc-trains/id6445867355?l=zh-Hans-CN">
              <img
                src={AppleAppStore}
                style={{
                  height: "4em",
                  padding: ".33em",
                  borderRadius: "1em",
                  cursor: "pointer",
                }}
              />
            </a>
            <a href="https://marcmap.app">
              <button
                style={{
                  height: "4em",
                  padding: ".33em",
                  border: "3px solid black",
                  fontFamily: "montserrat",
                  fontSize: "1.1em",
                  background: "white",
                  borderRadius: "1em",
                  cursor: "pointer",
                }}
              >
                Visit the Website
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
