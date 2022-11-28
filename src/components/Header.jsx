import React from "react";

function Header() {
return (
<header className="overlay">
    <div className="content-wrapper">
        <div className="flex justify-between align-center">
            <div className="text-white-h2 fw-7 all-margin-0">
            <h2>IVG Solutions</h2>
            </div>
            <div >
                <ul className="flex justify-end">
                    <li><a href = "/">Home </a></li>
                    <li><a href = "/contact">Contact us  </a></li>
                    <li><a href = "/about">About Us </a></li>
                    <li><a href = "#course">Courses </a></li>
                    <li><a href = "#course-details">Course Details </a></li>
                </ul>
            </div>
        </div>        
    </div>
</header>
); 
}

export default Header;