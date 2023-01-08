import React from "react";
import divider from "./constants/divider.png";
import profile from "./constants/profile.jpg";
import { Icon } from "./SharedComponents";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div class="home">
      <img class="home-profile" src={profile} />
      <div class="home-description">
        <h1>Hello!</h1>
        <h2>I’m Petek Sener, a biomedical and software engineer.</h2>
      </div>
      <img class="home-divider" src={divider} />
      <div class="home-options">
        <Link class="link--nounderline" to={`about`}>
          <div>
            <Icon class="icon--medium icon--dark" id="information" />
            <p>About</p>
          </div>{" "}
        </Link>

        <Link class="link--nounderline" to={`projects`}>
          <div>
            <Icon class="icon--medium icon--dark" id="lightbulb" />
            <p>Projects</p>
          </div>
        </Link>

        <Link class="link--nounderline" to={`contacts`}>
          <div>
            <Icon class="icon--medium icon--dark" id="paperPlane" />
            <p>Contact</p>
          </div>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Home;
