import React from "react";
import "./intro.css";
import human from "../images/human.png";
import saveAs from "file-saver";

const Intro = () => {
  const Downloadcv = () => {
    const pdfpath = "/resume/Aadilsresume.pdf";
    fetch(pdfpath)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "Aadilsresume.pdf");
      })
      .catch((error) => alert("Error Downloading CV", error));
  };

  return (
    <div className="MainIntro">
      <div className="IntroContent">
        <h2>Hi, I am Aadil</h2>
        <h4>Software Engineer</h4>
        <button onClick={Downloadcv}>Download CV</button>
      </div>
      <img src={human} alt="Here lies an image" />
    </div>
  );
};

export default Intro;
