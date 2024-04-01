import React from 'react';
import "./MapCources.css";

const MapCourses = () => {
  return (
    <div className="map-courses-container">
  
      <div className="course-list">
        <h2>Featured Courses</h2>
        <ul>
          <li>
            <a href="https://developers.google.com/maps/documentation" className='a-map' title="Introduction to Google Maps API - Google Developers">
              Introduction to Google Maps API - Google Developers
            </a>
            <p>
              This comprehensive course offered by Google Developers introduces you to the Google Maps API, allowing you to integrate dynamic maps into your web and mobile applications. You'll learn how to display maps, customize map appearance, add markers, overlays, and much more. Whether you're a beginner or an experienced developer, this course will equip you with the skills to leverage the power of Google Maps in your projects.
            </p>
            <img src="Courses/map.jpg" className='img-map' alt="Google Maps API" title="Google Maps API" />
          </li>
          <li>
            <a href="https://developers.arcgis.com/documentation/" className='a-ars' title="ArcGIS Developer Documentation - Esri">
              ArcGIS Developer Documentation - Esri
            </a>
            <img src="Courses/ars.png" alt="ArcGIS Developer Documentation" className='img-arg' title="ArcGIS Developer Documentation" />
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API" className='a-geo' title="Geolocation API - MDN Web Docs">
              Geolocation API - MDN Web Docs
            <img src="Courses/geolocation.web" className='img-geo' alt="Geolocation API" title="Geolocation API" />
            </a>
          </li>
        </ul>
      </div>

      <div className="course-video">
        <h2>Course Videos</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FSs_JYwnAdI" title="Programming Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div className="free-courses">
        <h2>Free Courses</h2>
        <ul>
          <li><a href="https://developer.apple.com/documentation/corelocation" title="Core Location Framework - Apple Developer Documentation">Core Location Framework - Apple Developer Documentation</a></li>
          <li><a href="https://developers.arcgis.com/documentation/analysis/" title="Spatial Analysis - ArcGIS Developer Documentation">Spatial Analysis - ArcGIS Developer Documentation</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MapCourses;
