import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class Projects extends Component {

  click(focus, others) { 
    var myImg = document.getElementsByClassName(focus);
    for (var i=0; i<myImg.length; i++) {
      var displaySetting = myImg[i].style.opacity;
      if (displaySetting == '0') { myImg[i].style.opacity = 0.9; myImg[i].style.zIndex = 3}
      if (displaySetting == '1') { myImg[i].style.opacity = 0.2; }
      if (displaySetting == '0.9') { myImg[i].style.opacity = 0; myImg[i].style.zIndex = -1}
      if (displaySetting == '0.2') { myImg[i].style.opacity = 1; }
    }
    var otherImg = [];
    for (var i=0; i<others.length; i++) {
      otherImg.push(document.getElementsByClassName(others[i]));
    }
    for (var i=0; i<otherImg.length; i++) {
      for (var j=0; j<otherImg[i].length; j++) {
        var displaySetting = otherImg[i][j].style.opacity;
        if (displaySetting == '0.9') { otherImg[i][j].style.opacity = 0; otherImg[i][j].style.zIndex = -1}
        if (displaySetting == '0.2') { otherImg[i][j].style.opacity = 1;}
      }
    }
  }

  render () {
    return (
      <projects>
        <section id='project-list'>
          <div id='flex'>
            <p>
              <input type='image' class='project-image audios' src='images/audios.png' style={{ opacity: 1 }} focus={ 'audios' } others={ ['coquill', 'meltdown', 'deep', 'butterfly', 'award'] } onClick={ () => this.click('audios', ['coquill', 'meltdown', 'deep', 'butterfly', 'award'],) } />
              <text class='project-name audios' style={{ opacity: 0 }}>
                <b>OCTOPOST</b>
              </text>
            </p>
            <p>
              <input type='image' class='project-image coquill' src='images/burnt_quill.png' style={{ opacity: 1 }} focus={ 'coquill' } others={ ['audios', 'meltdown', 'deep', 'butterfly', 'award'] } onClick={ () => this.click('coquill', ['audios', 'meltdown', 'deep', 'butterfly', 'award'],) } />
              <text class='project-name coquill' style={{ opacity: 0 }}>
                <b>COQUILL</b>
              </text>
            </p>

            <p>
              <input type='image' className='project-image meltdown' src='images/finalmeltdown.png' style={{ opacity: 1 }} focus={ 'meltdown' } others={ ['audios', 'coquill', 'deep', 'butterfly', 'award'] } onClick={ () => this.click('meltdown', ['audios', 'coquill', 'deep', 'butterfly', 'award'],) } />
              <text className='project-name meltdown' style={{ opacity: 0 }}>
                <b>FINAL MELTDOWN</b>
              </text>
            </p>

             <p>
              <input type='image' className='project-image deep' src='images/whale.png' style={{ opacity: 1 }} focus={ 'deep' } others={ ['audios', 'coquill', 'meltdown', 'butterfly', 'award'] } onClick={ () => this.click('deep', ['audios', 'coquill', 'meltdown', 'butterfly', 'award'],) } />
              <text className='project-name deep' style={{ opacity: 0 }}>
                <b>HACK THE DEEP</b>
              </text>
            </p>
            
            <p>
              <input type='image' className='project-image butterfly' src='images/butterfly.png' style={{ opacity: 1 }} focus={ 'butterfly' } others={ ['audios', 'coquill', 'meltdown', 'deep', 'award'] } onClick={ () => this.click('butterfly', ['audios', 'coquill', 'meltdown', 'deep', 'award'],) } /> 
              <text className='project-name butterfly' style={{ opacity: 0 }}>
                <b>BUTTERFLY HUNT</b>
              </text>
            </p>

            <p>
              <input type='image' className='project-image award' src='images/award.png' style={{ opacity: 1 }} focus={ 'award' } others={ ['audios', 'coquill', 'meltdown', 'butterfly', 'deep'] } onClick={ () => this.click('award', ['audios', 'coquill', 'meltdown', 'butterfly', 'deep'],) } />
              <text className='project-name award' style={{ opacity: 0 }}>
                <b>AWARDS</b>
              </text>
            </p>
          </div>

          <div>
            <p class='project-text audios' style={{ opacity: 0, zIndex: -1}}>
              A mobile app for Audi car owners to receive deliveries straight to their car trunk and watch a livestream of the delivery.<br /><br />
              During a three-month intensive program working with Audi, I developed a plug-in to the myAudi app where customers receive notifications and a video when a delivery is made to their car. <br />
              I also developed a mobile app for the service side where a delivery person can navigate to and request access to a customer's car trunk.<br /><br />
              <b style={{ fontSize: 12 }}>React-Native CSS HTML Firebase Raspberry Pi</b><br /><br />
              <a href='https://youtu.be/6htUATgGSJs'><button class='button'>watch me</button></a>
            </p>

            <p class='project-text coquill' style={{ opacity: 0, zIndex: -1}}>
              A web-based tool for screenwriters to collaborate in real time on a document that automatically formats into a screenplay.<br /><br />
              For my capstone project at the Grace Hopper program, I learned how to use Google Firebase to update data in real-time as well as construct a series of text editors that automatically format to screenplay standards.<br /><br />
              <b style={{ fontSize: 12 }}>Javascript CSS HTML Firebase</b><br /><br />
              <a href='https://coquill-e559a.firebaseapp.com/'><button class='button'>try me</button></a>
            </p>

            <p class='project-text meltdown' style={{ opacity: 0, zIndex: -1}}>
              A virtual reality app that depicts the effects of climate change on the Arctic Circle by placing the viewer in a melting icescape.<br /><br />
              I attended SheHacks Boston, where I learned A-Frame and Glitch, and developed a platform for the Samsung Gear VR over the course of 48 hours. Out of a 100 teams, ours won Best Open Source Project.<br /><br />
              <b style={{ fontSize: 12 }}>Javascript HTML A-Frame Glitch Samsung Gear VR</b><br /><br />
              <a href='https://thefinalmeltdown.glitch.me/'><button class='button'>try me</button></a>
            </p>

            <p class='project-text deep' style={{ opacity: 0, zIndex: -1}}>
              A data visualization of ocean currents to plot and predict the most likely path of plastics that end up in the North Pacific Garbage Patch.<br /><br />
              I attended Hack the Deep, the American Museum of Natural History's yearly hackathon, where I assisted a research professor of oceanography with his work in ocean physics and marine biology. <br /><br />
              <b style={{ fontSize: 12 }}>HTML Python Pandas CartoJS</b><br /><br />
              {/* <a href='https://hackthedeep.github.io/flotsam-and-jetsam'> */}
              <button class='button-construction'>try me</button>
            </p>

            <p class='project-text butterfly' style={{ opacity: 0, zIndex: -1}}>
              A mobile augmented reality game where Grace Hopper students search for butterflies that appear on the the GH logo.<br /><br />
              <b style={{ fontSize: 12 }}>Unity C# Vuforia Android Studio</b><br /><br />
              <a href='https://www.youtube.com/watch?v=Y9MLgQTFiHk'><button class='button'>watch me</button></a>
            </p>
            
            <p class='project-text award' style={{ opacity: 0, zIndex: -1}}>
              <b>Red Hat Best Open Source Project</b><br />
              <i>SheHacks Boston</i>
            </p> 
          </div>
        </section>
      </projects>
    );
  }
}

