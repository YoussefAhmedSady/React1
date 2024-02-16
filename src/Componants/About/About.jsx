import React from 'react';

const About = () => {
    return <>
        <div className="main-color d-flex justify-content-center align-items-center hgt">
        <div className="text-white text-center py-5">
            <h2 className='fw-bolder mt-3 mb-3'>ABOUT COMPONENT</h2>
            <div className="d-flex justify-content-center align-items-center">
            <div className="line me-2"></div>
            <div className="position-relative star "><i className="fa-solid fa-star"></i></div>
            <div className="line ms-2"></div>
            </div>
            <div className="d-flex justify-content-between align-items-center w-75 mx-auto text-start">
                <p className='me-5'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source  files including HTML,
                     CSS, and JavaScript as well as optional SASS stylesheets for easy customization</p>
                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, 
                    CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            </div>
        </div>
    
    </>
}

export default About;
