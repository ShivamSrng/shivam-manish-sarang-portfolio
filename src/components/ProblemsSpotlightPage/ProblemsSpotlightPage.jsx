import React from 'react';
import styles from './ProblemsSpotlightPage.module.css';

import NewsEngineGIF from '/assets/images/aio.gif';
import VoiceTranscriptionGIF from '/assets/images/voice.gif';
import ClickbaitThumbnailGIF from '/assets/images/clickbait.gif';
import FoodGIF from '/assets/images/fooddelivery.gif';
import CartGenerationGIF from '/assets/images/ocr.gif';
import MovieBlitzGIF from '/assets/images/movieblitz.gif';


function ProblemsSpotlightPage() {
  return (
    <>
      <div id="fixedImage" className={styles.fixedImage}></div>
      <div id="problemsSpotlight" className={styles.problemSpotlight}>
        <div className={styles.title}>
          <div className={styles.orangeCircle}></div>
          <h1>PROBLEMS SPOTLIGHT</h1>
          <div className={styles.orangeCircle}></div>
        </div>

        <div onMouseEnter={() => {
          var fixedImage = document.getElementById('fixedImage');
          var windowWidth = window.innerWidth;
          if (windowWidth > 800)
            fixedImage.style.display = 'block';
        }} onMouseLeave={() => {
          var fixedImage = document.getElementById('fixedImage');
          fixedImage.style.display = 'none';
        }} className={styles.problemSpotlightContainer}>
          <div className={styles.problem} onMouseEnter={() => {
            var fixedImage = document.getElementById('fixedImage');
            fixedImage.style.backgroundImage = `url(${NewsEngineGIF})`;
          }}>
            <div className={styles.imageHolder}>
              <img src={NewsEngineGIF} alt="AIO News Engine" />
            </div>
            <div className={styles.overlay}></div>
            <h2>AIO News Engine</h2>
          </div>

          <div className={styles.problem} onMouseEnter={() => {
            var fixedImage = document.getElementById('fixedImage');
            fixedImage.style.backgroundImage = `url(${VoiceTranscriptionGIF})`;
          }}>
            <div className={styles.imageHolder}>
              <img src={VoiceTranscriptionGIF} alt="Voice Transcription" />
            </div>
            <div className={styles.overlay}></div>
            <h2>Voice Transcription</h2>
          </div>

          <div className={styles.problem} onMouseEnter={() => {
            var fixedImage = document.getElementById('fixedImage');
            fixedImage.style.backgroundImage = `url(${ClickbaitThumbnailGIF})`;
          }}>
            <div className={styles.imageHolder}>
              <img src={ClickbaitThumbnailGIF} alt="Clickbait Thumbnail" />
            </div>
            <div className={styles.overlay}></div>
            <h2>Clickbait Thumbnail Generation</h2>
          </div>

          <div className={styles.problem} onMouseEnter={() => {
            var fixedImage = document.getElementById('fixedImage');
            fixedImage.style.backgroundImage = `url(${FoodGIF})`;
          }}>
            <div className={styles.imageHolder}>
              <img src={FoodGIF} alt="Food Delivery" />
            </div>
            <div className={styles.overlay}></div>
            <h2>Search Distinction in Dish, Cuisine or Restaurant</h2>
          </div>

          <div className={styles.problem} onMouseEnter={() => {
            var fixedImage = document.getElementById('fixedImage');
            fixedImage.style.backgroundImage = `url(${CartGenerationGIF})`;
          }}>
            <div className={styles.imageHolder}>
              <img src={CartGenerationGIF} alt="Automatic Cart Generation" />
            </div>
            <div className={styles.overlay}></div>
            <h2>Automatic Cart Generation</h2>
          </div>

          <div className={styles.problem} onMouseEnter={() => {
            var fixedImage = document.getElementById('fixedImage');
            fixedImage.style.backgroundImage = `url(${MovieBlitzGIF})`;
          }}>
            <div className={styles.imageHolder}>
              <img src={MovieBlitzGIF} alt="MovieBlitz" />
            </div>
            <div className={styles.overlay}></div>
            <h2>MovieBlitz</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProblemsSpotlightPage