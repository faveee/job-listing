import React from "react";
// import bbImg from "../assets/background.svg";

export default function Header() {
  return (
    <div className="w-full h-full">
      <div
        className="w-screen h-[120px] bg-teal-600"
        style={{
          backgroundImage: `url(/background.svg)`,
        }}
      ></div>
    </div>
  );
}
