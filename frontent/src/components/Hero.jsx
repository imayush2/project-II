import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Hospital Deko Company is a pioneering healthcare solutions
           provider dedicated to enhancing the medical environment for
            patients and healthcare professionals alike. Established with
            a vision to innovate and elevate healthcare infrastructure, we 
            specialize in designing, equipping, and managing hospitals, clinics,
             and medical facilities worldwide.
            At Hospital Deko Company, our mission is to create exceptional
             healthcare spaces that prioritize patient care, comfort, and efficiency. 
             We strive to empower healthcare providers with state-of-the-art facilities
            and cutting-edge technology to deliver superior medical services.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};


export default Hero;
