import React from "react";
import Back from "../common/back/Back";
import "./price.css";
import { explore_mentors } from '../../dummydata';

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function Pricing() {
  return (
    <>
      <Back title="Explore mentors" />

      <div>
      <div className="button-container " >
       
        <button className="hero-button" style={{margin:'10px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Frontend</span></button>
        <button className="hero-button"  style={{margin:'10px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Backend</span></button>
        <button className="hero-button"  style={{margin:'10px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Full Stack</span></button>
        <button className="hero-button"  style={{margin:'10px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Devops</span></button>
        <button className="hero-button"  style={{margin:'10px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Cloud Engineering</span></button>       
        <button className="hero-button"  style={{margin:'10px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Data Science</span></button>
        <button className="hero-button"  style={{margin:'10px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Data Analyst</span></button>
        <button className="hero-button"  style={{margin:'10px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Product Engineer</span></button>
        <button className="hero-button" style={{margin:'10px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>UI/UX Designer</span></button>
        <button className="hero-button"  style={{margin:'10px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Marketing</span></button>
        <button className="hero-button"  style={{margin:'10px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Full Stack</span></button>
        <button className="hero-button"  style={{margin:'10px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Devops</span></button>
        <button className="hero-button"  style={{margin:'10px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Cloud Engineering</span></button>       
       <button className="hero-button"  style={{margin:'10px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Data Science</span></button>
       
       
      </div>
      </div>
      <div className="mainCard" style={{ display: "flex" }}>

      {explore_mentors.map((mentor) => (
        <div
          className="top"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            margin: "50px",
          }}
        >
          <MDBCard className="custom-card" key={mentor.title}>
            <MDBCardImage
              src={mentor.image}
              alt="..."
              position="top"
              className="custom-card-image"
              style={{ objectFit: 'cover' }}
            />
            <MDBCardBody className="custom-card-body">
              <MDBCardTitle>{mentor.title}</MDBCardTitle>
              <div className="tags">
                <span className="tag">{mentor.job}</span>
              </div>
              <MDBCardText>{mentor.description}</MDBCardText>
              <div className="tags2">
                {mentor.companies.split(', ').map((company) => (
                  <span className="tag2">{company}</span>
                ))}
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>
      ))}
  
      </div>
    </>
  );
}
