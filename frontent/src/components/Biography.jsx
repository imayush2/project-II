import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Founded with a steadfast commitment to revolutionize 
          healthcare environments globally, Hospital Deko Company
          has emerged as a leading force in healthcare 
          infrastructure solutions. Established insert founding
          year, our journey began with a clear vision: to elevate
          medical facilities to new standards of excellence, blending 
          functionality, aesthetics, and patient-centric design.          </p>
          
          <p>We are all in 2024!</p>
          <p>
          At Hospital Deko Company, we envision a world 
          where healthcare spaces not only meet but exceed 
          the expectations of patients and healthcare professionals
          alike. Through innovative design, advanced technology 
          integration, and meticulous attention to detail, 
          we aim to create environments that foster healing, 
          comfort, and efficiency.
          </p>
          <p>Be Healthy</p>
        </div>
      </div>
    </>
  );
};


        


export default Biography;
