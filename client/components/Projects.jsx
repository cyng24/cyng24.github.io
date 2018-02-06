import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Projects extends Component {

  render () {

    return (
      <projects>
      {/* <h1>Projects</h1> */}
      {/* <img className="projects-arrow" src="images/down_arrow.png" /> */}
        <section id="project-list">
          <div id="flex">
            <p>
              <a className="project-title" href="https://coquill-e559a.firebaseapp.com/"><img className="project-image" src="images/burnt_quill.png" /></a>  
              <text className="project-text">
              <br /><br />
              <b>COQUILL</b><br />
              <b>_______</b><br />
              A web-based tool for screenwriters to collaborate in real time on a document that automatically formats into a screenplay.
              </text>
            </p>

            <p>
              <a className="project-title" href="https://thefinalmeltdown.glitch.me"><img className="project-image" src="images/finalmeltdown.png" /></a>
              <text className="project-text">
              <br /><br />
              <b>FINAL MELTDOWN</b><br />
              <b>______</b><br />
              A virtual reality app that depicts the effects of climate change by placing the viewer in a melting icescape.
              </text>
            </p>
            
            <p>
              <a className="project-title" href="https://youtube.com/watch?v=Y9MLgQTFiHk"><img className="project-image" src="images/butterfly.png" /></a>  
              <text className="project-text">
              <br /><br />
              <b>BUTTERFLY HUNT</b><br />
              <b>_______</b><br />
              A mobile augmented reality game where Grace Hopper students search for butterflies that appear on the the GH logo.
              </text>
            </p>

            <p>
              <a className="project-title"><img className="project-image" src="images/award.png" /></a>
              <text className="project-text">
                <br /><br />
                <b>AWARDS</b><br />
                <b>_______</b><br />
                <b>Red Hat Best Open Source Project</b>
                <br />
                <i>SheHacks Boston</i>
              </text>
            </p>
          </div>
        </section>
{/*         
        <h1>Awards</h1>
          <img id="awards-arrow" alt="image_not" src="images/down_arrow.png" />
          <section id="awards">
            <p>
              <text className="carousel-text">
              <b>Red Hat Best Open Source Project</b>
              <br></br>
              <i>SheHacks Boston</i>
              </text>
            </p>
          </section>
*/}
      </projects>
    );
  }
}

