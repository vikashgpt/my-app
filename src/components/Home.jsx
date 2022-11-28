import React from "react";
import HeroSection from './Hero_Section';
import {CourseCard, CourseBenifits} from './Card';
import {coursesDescription, courseBenifits} from '../Content';
import 'bootstrap/dist/css/bootstrap.min.css';



function courseCard(coursesDescription){
    return(    
      <div className="col-xl-3 col-md-6 col-lg-4 col-sm-12 mb-30">  
      <CourseCard
        name={coursesDescription.name}
        img={coursesDescription.imgURL}
        details={coursesDescription.details}
        courselink={coursesDescription.courselink}
      />      
      </div>
    );
  }
  function courseBenifit(coursesDescription){
    return(    
      <div className="col-xl-3 col-md-6 col-lg-4 col-sm-12 mb-30">  
      <CourseBenifits
        name={coursesDescription.name}
        img={coursesDescription.imgURL}
        details={coursesDescription.details}
        courselink={coursesDescription.courselink}
      />      
      </div>
    );
  }
 

function Home(){
    return (
        <div>
        <HeroSection/>
      <div className="content-wrapper">
        <section className="section-padding" id="course">
          <h2 className="heading center-align">Our Courses</h2>
          <div className="row">
            {coursesDescription.map(courseCard)}
          </div>
        </section>
        <section className="section-padding" id="course-details">
          <h2 className="heading center-align">Course Benifits</h2>
          <div className="row">
            {courseBenifits.map(courseBenifit)}
          </div>
        </section>
      </div>
    </div>
    )
}


export default Home;