import React from "react";
import { Icon } from "./SharedComponents";
import Sidebar from "./Sidebar";

function About() {
  return (
    <div class="main">
      <Sidebar />

      <div class="about bkg--white">
        <h2> Hi There, I'm Petek </h2>
        <div class="about-mainText">
          <p>
            I'm a versatile biomedical engineer with three years of experience
            in software development and medical device design. <br />
          </p>
          <p>
            Currently, I'm a software engineer at{" "}
            <a class="font--bold" href="http://microelastic.com">
              MicroElastic
            </a>
            , where I have designed and developed a front-end desktop
            application using React and built a back-end server with REST API
            using Python for an ultrasound device.
          </p>

          <p>
            I graduated from{" "}
            <a class="font--bold" href="https://bme.duke.edu">
              Duke University
            </a>{" "}
            with a B.S. in Engineering and Master of Engineering degrees in
            biomedical engineering.
          </p>

          <p>
            You can find more details about my professional work in my resume.
          </p>
        </div>
        <a class="link--nounderline" href="./PetekSener.pdf" download>
          <div class="iconLine">
            <Icon class="icon--medium icon--dark" id="fileResume" />
            <p>Resume</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default About;
