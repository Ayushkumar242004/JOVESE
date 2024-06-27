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
       
        <button className="hero-button"   style={{margin:'10px',backgroundColor:'black', color:'white',borderRadius:'10px'}}><span style={{fontSize:'25px',margin:'10px'}}>Frontend</span></button>
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
          {/* card 2 */}
        <div
          className="top"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            margin: "50px",
          }}
        >
          <MDBCard className="custom-card">
            <MDBCardImage
              src="https://tse3.mm.bing.net/th?id=OIP.j8yd8dJ5215WbgQ0NsLzuAHaNK&pid=Api&P=0&h=220"
              alt="..."
              position="top"
              className="custom-card-image"
            />
            <MDBCardBody className="custom-card-body">
              <MDBCardTitle>Card title</MDBCardTitle>
              <div className="tags">
                <span className="tag">Frontend Developer</span>
              </div>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
              <div className="tags2">
                <span className="tag2">Amazon</span>
                <span className="tag2">Facebook</span>
                <span className="tag2">Oracle</span>
              </div>
            </MDBCardBody>
          </MDBCard>
        </div>

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

        <div
          className="top"
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            margin: "50px",
          }}
        >
          <MDBCard className="custom-card">
            <MDBCardImage
              src="https://tse2.mm.bing.net/th?id=OIP.ntzGohTfvU6Jn50XXxFHBgHaJA&pid=Api&P=0&h=220"
              alt="..."
              position="top"
              className="custom-card-image"
            />
            <MDBCardBody className="custom-card-body">
              <MDBCardTitle>Card title</MDBCardTitle>
              <div className="tags">
                <span className="tag">Frontend Developer</span>
              </div>
              <MDBCardText>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
              <div className="tags2">
                <span className="tag2">Amazon</span>
                <span className="tag2">Facebook</span>
                <span className="tag2">Oracle</span>
              </div>
            </MDBCardBody>
          </MDBCard>
         
        </div>
        </div>
      ))}
  

      </div>
    </>
  );
}
