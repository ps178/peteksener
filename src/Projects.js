import React from "react";
import { Icon } from "./SharedComponents";
import Sidebar from "./Sidebar";
import microelasticWebsite from "./constants/microelastic_website.png";
import figma from "./constants/figma.png";
import sketch from "./constants/sketch.png";
import sketchColor from "./constants/sketch_color.png";
import caseStudy from "./constants/case_study.png";
import adobeIllustrator from "./constants/adobe_illustrator.png";

function Projects() {
  const [selectedProject, setSelectedProject] = React.useState(null);

  function SelectedProject() {
    switch (selectedProject) {
      case "desktop_application":
        return (
          <div class="project-detail">
            <div class="project-detail-title">
              <Icon
                id="arrowBack"
                class="icon--medium icon--dark"
                onClick={() => setSelectedProject(null)}
              />
              <h2>Desktop Application</h2>
            </div>
            <div class="project-badgeContainer">
              <div class="badge">
                <p>React</p>
              </div>
              <div class="badge">
                <p>Electron</p>
              </div>
              <div class="badge">
                <p>JavaScript (ES6)</p>
              </div>
              <div class="badge">
                <p>HTML/CSS</p>
              </div>
              <div class="badge">
                <p>Material UI</p>
              </div>
              <div class="badge">
                <p>Sketchy</p>
              </div>
              <div class="badge">
                <p>Adobe Illustrator</p>
              </div>
            </div>
            <p>
              MicroElastic’s ultrasound device application is a desktop
              application built using{" "}
              <a class="font--bold" href="https://reactjs.org">
                React
              </a>
              ,{" "}
              <a class="font--bold" href="https://react-redux.js.org">
                React-Redux
              </a>
              ,{" "}
              <a class="font--bold" href="https://electronjs.org">
                Electron
              </a>
              , and{" "}
              <a class="font--bold" href="https://mui.com">
                Material UI
              </a>
              . Limited online demos of two different iterations of the
              application are available:{" "}
              <a
                class="font--bold"
                href="https://ps178.github.io/microelastic-demo-application/"
              >
                latest iteration
              </a>
              ,{" "}
              <a
                class="font--bold"
                href="https://microelastic.github.io/microelastic_client_demo/"
              >
                previous iteration
              </a>
              . Check out the{" "}
              <a
                class="font--bold"
                href="https://github.com/ps178/microelastic-demo-application"
              >
                project
              </a>{" "}
              on GitHub.
            </p>
            <p>
              {" "}
              When designing the application, I used{" "}
              <a class="font--bold" href="https://www.sketch.com">
                Sketch
              </a>{" "}
              to create prototypes of the application visuals and test the color
              palette.
            </p>
            <p>
              This project required unique icons so, I created custom icons and
              illustrations for the application. I drew SVG icons using{" "}
              <a
                class="font--bold"
                href="https://www.adobe.com/creativecloud/business/teams.html?sdid=B16P3W9X&mv=search&ef_id=Cj0KCQiAzeSdBhC4ARIsACj36uGH9Y5K2oYfjX4lh5--3a1GQspInetf3MUXieTXap1DVnO0o_yEg6waAm8xEALw_wcB:G:s&s_kwcid=AL!3085!3!566814725007!e!!g!!adobe%20illustrator!15482932269!136265038448"
              >
                Adobe Illustrator
              </a>
              .
            </p>
            <div class="project-detail-desktop-row">
              <img src={sketch} />
              <img src={sketchColor} />
              <img src={adobeIllustrator} />
            </div>
          </div>
        );

      case "single_page_website":
        return (
          <div class="project-detail">
            <div class="project-detail-title">
              <Icon
                id="arrowBack"
                class="icon--medium icon--dark"
                onClick={() => setSelectedProject(null)}
              />
              <h2>Single Page Website</h2>
            </div>
            <div class="project-badgeContainer">
              <div class="badge">
                <p>HTML/CSS</p>
              </div>
            </div>

            <p>
              I remodeled MicroElastic’s single page company{" "}
              <a class="font--bold" href="https://microelastic.com">
                website
              </a>{" "}
              using HTML and CSS. The website publishes company updates for
              stakeholders.
            </p>

            <img class="project-detail-singleImage" src={microelasticWebsite} />
          </div>
        );

      case "portfolio_website":
        return (
          <div class="project-detail">
            <div class="project-detail-title">
              <Icon
                id="arrowBack"
                class="icon--medium icon--dark"
                onClick={() => setSelectedProject(null)}
              />
              <h2>Portfolio Website</h2>
            </div>

            <div class="project-badgeContainer">
              <div class="badge">
                <p>React</p>
              </div>

              <div class="badge">
                <p>JavaScript (ES6)</p>
              </div>
              <div class="badge">
                <p>HTML/CSS</p>
              </div>
              <div class="badge">
                <p>Figma</p>
              </div>
            </div>

            <p>
              I decided to use a new tool,{" "}
              <a class="font--bold" href="https://www.figma.com">
                Figma
              </a>
              , when creating my portfolio website. I used Figma to design the
              layout of the website. The actual website is created using{" "}
              <a class="font--bold" href="https://reactjs.org">
                React
              </a>
              , HTML and CSS. The website is hosted by Github Pages. Checkout
              the{" "}
              <a
                class="font--bold"
                href="https://www.figma.com/community/file/1193767041538091190"
              >
                project
              </a>{" "}
              on Github and the layout design on{" "}
              <a
                class="font--bold"
                href="https://www.figma.com/file/fucwDw6Qd71qcCzhIl55vo/Personal-Website?node-id=0%3A1&t=MB1tWUt1wVJuYOoV-1"
              >
                my Figma page.
              </a>{" "}
            </p>

            <img class="project-detail-singleImage" src={figma} />
          </div>
        );

      case "case_study":
        return (
          <div class="project-detail">
            <div class="project-detail-title">
              <Icon
                id="arrowBack"
                class="icon--medium icon--dark"
                onClick={() => setSelectedProject(null)}
              />
              <h2>Data Analysis Case Study</h2>
            </div>

            <div class="project-badgeContainer">
              <div class="badge">
                <p>SQL (MySQL)</p>
              </div>
              <div class="badge">
                <p>R</p>
              </div>
              <div class="badge">
                <p>Tableau</p>
              </div>
            </div>

            <p>
              I wanted to expand my skillset in data analytics so I completed{" "}
              <a
                class="font--bold"
                href="https://www.coursera.org/professional-certificates/google-data-analytics?utm_source=gg&utm_medium=sem&utm_campaign=15-GoogleDataAnalytics-US&utm_content=B2C&campaignid=12504215975&adgroupid=149456125571&device=c&keyword=&matchtype=&network=g&devicemodel=&adpostion=&creativeid=636646752659&hide_mobile_promo&gclid=CjwKCAiA8OmdBhAgEiwAShr40yOUPljdPPszeOGMBIHDkXtScnxgjIypvcF4ayjNa62kQzct_wIbUhoChK8QAvD_BwE"
              >
                Google’s Data Analytics course
              </a>{" "}
              on Coursera. Through this course I learned{" "}
              <a class="font--bold" href="https://www.r-project.org">
                R
              </a>
              , SQL, and{" "}
              <a class="font--bold" href="https://www.tableau.com">
                Tablaue
              </a>
              . I later expanded on my SQL knowledge by delving into{" "}
              <a class="font--bold" href="https://www.mysql.com">
                MySQL
              </a>
              . As part of the course, I worked on a case study where I cleaned,
              prepared, and analyzed a data set using the previously mentions
              programming tools. Check out the{" "}
              <a
                class="font--bold"
                href="
                https://github.com/ps178/case_study_bellabeat"
              >
                project
              </a>{" "}
              on Github. The RMarkdown html file below also shows all my work
              and code for the case study.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="./Bellabeat.html"
            >
              <div class="iconLine">
                <Icon class="icon--medium icon--dark" id="fileCode" />
                <p>Case Study Code Documentation</p>
              </div>
            </a>
            <img class="project-detail-singleImage" src={caseStudy} />
          </div>
        );

      case "3d_design":
        return (
          <div class="project-detail">
            <div class="project-detail-title">
              <Icon
                id="arrowBack"
                class="icon--medium icon--dark"
                onClick={() => setSelectedProject(null)}
              />
              <h2>3D Design</h2>
            </div>

            <div class="project-badgeContainer">
              <div class="badge">
                <p>Fusion350</p>
              </div>
              <div class="badge">
                <p>Solidworks</p>
              </div>
            </div>

            <p>
              During my time at Duke University and MicroElastic, I used 3D CAD
              to design various enclosures and objects.{" "}
            </p>

            <p>
              While at Duke, I used{" "}
              <a class="font--bold" href="https://www.solidworks.com">
                SolidWorks
              </a>{" "}
              to design mechanism that holds a pin camera attached to the end of
              a largnescope. This was a part of my senior biomedical design
              project.{" "}
            </p>
            <p>
              At MicroElastic, I used{" "}
              <a
                class="font--bold"
                href="https://www.autodesk.com/campaigns/education/fusion-360-education?mktvar002=4246565%7CSEM%7C11094403154%7C112744811230%7Ckwd-11029869505&ef_id=CjwKCAiA8OmdBhAgEiwAShr4074lo3cC5ehU7vLnMRLqm1aXHM8nw9zHhJZtAimXYfk-jH4t9sqL2BoCgUcQAvD_BwE:G:s&s_kwcid=AL!11172!3!463597523401!e!!g!!fusion%20360!11094403154!112744811230&mkwid=s%7Cpcrid%7C463597523401%7Cpkw%7Cfusion%20360%7Cpmt%7Ce%7Cpdv%7Cc%7Cslid%7C%7Cpgrid%7C112744811230%7Cptaid%7Ckwd-11029869505%7Cpid%7C&utm_medium=cpc&utm_source=google&utm_campaign=&utm_term=fusion%20360&utm_content=s%7Cpcrid%7C463597523401%7Cpkw%7Cfusion%20360%7Cpmt%7Ce%7Cpdv%7Cc%7Cslid%7C%7Cpgrid%7C112744811230%7Cptaid%7Ckwd-11029869505%7C&gclid=CjwKCAiA8OmdBhAgEiwAShr4074lo3cC5ehU7vLnMRLqm1aXHM8nw9zHhJZtAimXYfk-jH4t9sqL2BoCgUcQAvD_BwE"
              >
                Fusion360
              </a>{" "}
              to design various enclosures for an ultrasound device components.
            </p>
            <div class="project-detail-desktop-row">
              <img src={sketch} />
              <img src={sketchColor} />
              <img src={adobeIllustrator} />
            </div>
          </div>
        );

      default:
        return;
    }
  }
  return (
    <div class="main">
      <Sidebar />
      <div class="projects bkg--white">
        {selectedProject === null && (
          <div class="projects-summary">
            <div
              class="project-summary-item"
              onClick={() => setSelectedProject("desktop_application")}
            >
              <p class="font--bold">Desktop Application</p>
              <p>
                Desktop application for an ultrasound device at MicroElastic
                with online demos.
              </p>

              <div class="project-badgeContainer">
                <div class="badge">
                  <p>React</p>
                </div>
                <div class="badge">
                  <p>Electron</p>
                </div>
                <div class="badge">
                  <p>JavaScript (ES6)</p>
                </div>
                <div class="badge">
                  <p>HTML/CSS</p>
                </div>
                <div class="badge">
                  <p>Sketchy</p>
                </div>
                <div class="badge">
                  <p>Adobe Illustrator</p>
                </div>
              </div>
            </div>
            <div
              class="project-summary-item"
              onClick={() => setSelectedProject("case_study")}
            >
              <p class="font--bold">Data Analytics Case Study</p>
              <p>Case study from Google’s Data Analytics course.</p>

              <div class="project-badgeContainer">
                <div class="badge">
                  <p>SQL (MySQL)</p>
                </div>
                <div class="badge">
                  <p>R</p>
                </div>
                <div class="badge">
                  <p>Tableau</p>
                </div>
              </div>
            </div>

            <div
              class="project-summary-item"
              onClick={() => setSelectedProject("single_page_website")}
            >
              <p class="font--bold">Single Page Website</p>
              <p>Single page company website for MicroElastic.</p>

              <div class="project-badgeContainer">
                <div class="badge">
                  <p>HTML/CSS</p>
                </div>
              </div>
            </div>

            <div
              class="project-summary-item"
              onClick={() => setSelectedProject("portfolio_website")}
            >
              <p class="font--bold">Portfolio Website</p>
              <p>It’s getting meta! My work on building this website.</p>

              <div class="project-badgeContainer">
                <div class="badge">
                  <p>React</p>
                </div>

                <div class="badge">
                  <p>JavaScript (ES6)</p>
                </div>
                <div class="badge">
                  <p>HTML/CSS</p>
                </div>
                <div class="badge">
                  <p>Figma</p>
                </div>
              </div>
            </div>

            <div
              class="project-summary-item"
              onClick={() => setSelectedProject("3d_design")}
            >
              <p class="font--bold">3D Design</p>
              <p>
                Various 3D CAD designs that were printed with FDM and SLA
                printers.
              </p>

              <div class="project-badgeContainer">
                <div class="badge">
                  <p>Fusion350</p>
                </div>
                <div class="badge">
                  <p>Solidworks</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedProject !== null && SelectedProject()}
      </div>
    </div>
  );
}

export default Projects;
