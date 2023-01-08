import React from "react";
import profile from "./constants/profile.jpg";
import underline from "./constants/underline.png";
import { useLocation } from "react-router-dom";
import { Icon } from "./SharedComponents";
import { Link } from "react-router-dom";
import divider from "./constants/divider.png";

function Sidebar() {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <div class="sidebar">
      <div class="sidebar-image">
        <img src={profile} />
        <p class="font--small">Petek Sener</p>
      </div>

      <img class="sidebar-divider" src={divider} />

      <div class="sidebar-optionsContainer">
        <Link class="link--nounderline" to={`../`}>
          <div class="sidebar-option">
            <div class="iconLine sidebar-option-text">
              <Icon class="icon--medium icon--dark" id="home" />
              <p>Home</p>
            </div>
            <div class="sidebar-option-underline"></div>
          </div>
        </Link>
        <Link class="link--nounderline" to={`../about`}>
          <div class="sidebar-option">
            <div class="iconLine sidebar-option-text">
              <Icon class="icon--medium icon--dark" id="information" />
              <p>About</p>
            </div>
            <div class="sidebar-option-underline">
              {location === "/about" && <img src={underline} />}
            </div>
          </div>{" "}
        </Link>
        <Link class="link--nounderline" to={`../projects`}>
          <div class="sidebar-option">
            <div class="iconLine sidebar-option-text">
              <Icon class="icon--medium icon--dark" id="lightbulb" />
              <p>Projects</p>
            </div>
            <div class="sidebar-option-underline">
              {location === "/projects" && <img src={underline} />}
            </div>
          </div>{" "}
        </Link>
        <Link class="link--nounderline" to={`../contact`}>
          <div class="sidebar-option">
            <div class="iconLine sidebar-option-text">
              <Icon class="icon--medium icon--dark" id="paperPlane" />
              <p>Contact</p>
            </div>
            <div class="sidebar-option-underline">
              {location === "/contact" && <img src={underline} />}
            </div>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
