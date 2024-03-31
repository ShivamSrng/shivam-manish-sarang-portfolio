import React from 'react'
import styles from './AboutPage.module.css'

import ProfileImage from '/assets/images/profile.jpg'

function About() {
  return (
    <div id="about" className={styles.aboutPage}>
      <div className={styles.movingText}>
        <div className={styles.textContainer}>
          <h1>ENTHUSIASTIC</h1>
          <div className={styles.orangeCircle}></div>
          <h1>CREATIVE</h1>
          <div className={styles.orangeCircle}></div>
          <h1>INNOVATIVE</h1>
          <div className={styles.orangeCircle}></div>
        </div>
        <div className={styles.textContainer}>
          <h1>ENTHUSIASTIC</h1>
          <div className={styles.orangeCircle}></div>
          <h1>CREATIVE</h1>
          <div className={styles.orangeCircle}></div>
          <h1>INNOVATIVE</h1>
          <div className={styles.orangeCircle}></div>
        </div>
        <div className={styles.textContainer}>
          <h1>ENTHUSIASTIC</h1>
          <div className={styles.orangeCircle}></div>
          <h1>CREATIVE</h1>
          <div className={styles.orangeCircle}></div>
          <h1>INNOVATIVE</h1>
          <div className={styles.orangeCircle}></div>
        </div>
      </div>

      <div className={styles.informationSection}>
        <div className={styles.pastInfoContainer}>
          <div className={styles.slider}>
            <a href="#educationContainer" onClick={() => {
              document.getElementById("data").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
              var educationContainer = document.getElementById('educationContainer');
              var experienceContainer = document.getElementById('experienceContainer');
              var h1Education = document.getElementById('h1Education');
              var h1Experience = document.getElementById('h1Experience');
              h1Education.style.color = 'white';
              h1Experience.style.color = 'rgb(148, 147, 147)';
              educationContainer.style.display = 'block';
              experienceContainer.style.display = 'none';
            }}><h1 id="h1Education">Education</h1></a>

            <a href="#experienceContainer" onClick={() => {
              document.getElementById("data").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
              var educationContainer = document.getElementById('educationContainer');
              var experienceContainer = document.getElementById('experienceContainer');
              var h1Education = document.getElementById('h1Education');
              var h1Experience = document.getElementById('h1Experience');
              h1Education.style.color = 'rgb(148, 147, 147)';
              h1Experience.style.color = 'white';
              educationContainer.style.display = 'none';
              experienceContainer.style.display = 'block';
            }}><h1 id="h1Experience">Experience</h1></a>
          </div>
          <div id="data" className={styles.data}>
            <div id="educationContainer" className={styles.educationContainer}>
              <div className={styles.education}>
                <h1 className={styles.course}><span className={styles.orangeText}>Master's in Computer Science</span></h1>
                <h3 className={styles.university}>New Jersey Institute of Technology</h3>
                <h4 className={styles.graduationDate}>Expected Graduation: May 2025</h4>
                <h5 className={styles.gpa}>Current G.P.A.: None</h5>
              </div>
              <div className={styles.education}>
                <h1 className={styles.course}><span className={styles.orangeText}>Bachelor's in Computer Engineering</span></h1>
                <h3 className={styles.university}>Gujarat Technological University</h3>
                <h4 className={styles.graduationDate}>Graduated: May 2023</h4>
                <h5 className={styles.gpa}>C.G.P.A.: 9.51/10</h5>
              </div>
              <div className={styles.coursework}>
                <h1 className={styles.courseworkIntro}><span className={styles.orangeText}>Relevant Coursework</span></h1>
                <p className={styles.courses}>Data Structures and Algorithms, Database Management System Design, Operating Systems, Computer Organization and Architecture, Machine Learning, Data Science, Data Visulaization, Artificial Intelligence, Computer Networks, Theory of Computation and Compiler Design.</p>
              </div>
            </div>
            <div id="experienceContainer" className={styles.experienceContainer}>
              <h1><span className={styles.orangeText}>Data Science Intern</span> at CRUV</h1>
              <div className={styles.experienceInfo}>
                <p className={styles.info}>
                  ~ Improvised the CRUV's existing news app using <span className={styles.orangeText}>Machine Learning</span> approach by removing the repeated paragraphs within the news. This encompassed developing a proper refinement and structuing of data that was present in the database and applying advanced <span className={styles.orangeText}>Sentence Boundary Detection</span> Algorithms.
                </p>
                <p className={styles.info}>
                  ~Developed the codebase from scratch for optimized <span className={styles.orangeText}>Voice Transcription</span> technique using the pre-existing <span className={styles.orangeText}>FasterWhisper Library</span> along with <span className={styles.orangeText}>ffmpeg</span> commands that outperformed almost every other voice transcription library, giving transcriptions for every time interval. It was a sub-project of a Face Cloning project.
                </p>
                <p className={styles.info}>
                  ~ For automatic generation of Clickbait Thumbnail, Video Title and Thumbnail Image selection for a video, developed entire codebase that based on the video provided by user performs all mentioned steps without the intervention of user. It encompassed usage of <span className={styles.orangeText}>HuggingFace Transformer</span> model, <span className={styles.orangeText}>ChatGPT API</span>, <span className={styles.orangeText}>Giphy API</span> (for adding emojis onto thumbnail or in video title) and <span className={styles.orangeText}>OpenCV</span> for all image processing tasks.
                </p>
                <p className={styles.info}>
                  ~ Worked on project pertaining to <span className={styles.orangeText}>Food and Beverage Distribution</span>, wherein I replicated and also overcame the shortcomings in the search functionality within the food-delivery apps based in India using <span className={styles.orangeText}>ElasticSearch</span> functionality of <span className={styles.orangeText}>tokenization</span> which resulted into proper distinction of search query into a food, restaurant or cuisine.
                </p>
                <p className={styles.info}>
                  ~ Implemented CRUV's food delivery app's most distinctive functionality of <span className={styles.orangeText}>Automatic Cart Generation</span> along with price comparision, using <span className={styles.orangeText}>Optical Charater Recognition</span>, <span className={styles.orangeText}>Template Matching library</span>, <span className={styles.orangeText}>OpenCV</span>, <span className={styles.orangeText}>ElasticSearch</span> and many other libraries.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <img src={ProfileImage} alt="Shivam Manish Sarang" />
          <p>I love to work with data and find out meaningful insights <span className={styles.redText}>;)</span><br />Focused on solving myraid of problems related to Data Science and Backend Development and exploring new technologies.</p>
        </div>
      </div>

      <div className={styles.gooey}>
      </div>
    </div>
  )
}

export default About