import React from "react";
import { Icon } from "./SharedComponents";
import Sidebar from "./Sidebar";

function Contact() {
  return (
    <div class="main">
      <Sidebar />

      <div class="contact bkg--white">
        <p class="contact-title">
          Here are links to my online profiles and my contact email <br />
        </p>
        <div class="contact-itemContainer">
          <a
            class="font--bold link--nounderline"
            href="mailto:peteksener9@gmail.com"
          >
            <div class="contact-item">
              <Icon
                class="icon--medium icon--dark contact-item-logo"
                id="email"
              />
              <p class="contact-item-title">Email</p>
              <p class="font--small font--disabled contact-item-link">
                peteksener9@gmail.com
              </p>
            </div>
          </a>

          <a
            class="font--bold link--nounderline"
            href="https://github.com/ps178"
          >
            <div class="contact-item">
              <Icon
                class="icon--medium icon--dark contact-item-logo"
                id="github"
              />
              <p class="contact-item-title">GitHub</p>
              <p class="font--small font--disabled contact-item-link">
                https://github.com/ps178
              </p>
            </div>
          </a>

          <a
            class="font--bold link--nounderline"
            href="https://www.linkedin.com/in/petek-sener-3a331312b/"
          >
            <div class="contact-item">
              <Icon
                class="icon--medium icon--dark contact-item-logo"
                id="linkedin"
              />
              <p class="contact-item-title">LinkedIn</p>
              <p class="font--small font--disabled contact-item-link">
                https://www.linkedin.com/in/petek-sener-3a331312b/
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
