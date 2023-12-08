import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>just an average joe trying to play their part</p>
    <img src={image} alt="I made this"/>
    </div>)
}

export default About;
