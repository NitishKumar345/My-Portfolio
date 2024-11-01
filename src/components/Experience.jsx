import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1 >EXPERIENCE</h1>
        <div
          className="ex-items text-center my-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
           
          <div className="left ram">
            <img src={`/src/assets/${experience.imageSrc}`} alt="" />
          </div>
          <div className="right ram">
            <h2>{experience.role}</h2>
            <h4>
              <span style={{ color: "yellowgreen" }}>
                {experience.startDate}-{experience.endDate}{" "}
              </span>{" "}
              <span style={{ color: "yellow" }}></span>
              
            </h4>
           <h4>{experience.location}</h4>  
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
