import React from "react";

function CourseCard(props) {
    return (
    <div className="course-card">
        <div className="course-card shadow">
            <div className="top">
                <img className="" src={props.img} alt="avatar_img" />
            </div>
            <div className="bottom">
                <h4 className="name">{props.name}</h4>
                <p className="info">{props.details}</p>
                <div className="button-container primary_button ">
                    <a href="www.facebook.com" className="hs-button cta_button">{props.courselink}</a>
                </div>
            </div>
        </div>
    </div>
    )
    };

    function CourseBenifits(props) {
        return (
        <div className="course-card">
            <div className="course-benifits shadow">
                <div className="top pt-20">
                    <img className="circle-img" src={props.img} alt="avatar_img" />
                </div>
                <div className="bottom center-align">
                    <h4 className="name">{props.name}</h4>
                    <p className="info">{props.details}</p>
                    {/* <div className="button-container primary_button ">
                        <a href="www.facebook.com" className="hs-button cta_button">{props.courselink}</a>
                    </div> */}
                </div>
            </div>
        </div>
        )
        };
            
export {CourseCard, CourseBenifits} ;