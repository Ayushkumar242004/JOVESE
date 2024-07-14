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
      <div className="justify-center text-center" >
          <div>
            <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2"><span style={{fontSize:'25px',margin:'10px'}}>Frontend</span></button>
            <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2"  ><span style={{fontSize:'25px',margin:'10px'}}>Backend</span></button>
            <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2"  ><span style={{fontSize:'25px',margin:'10px'}}>Full Stack</span></button>
            <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" ><span style={{fontSize:'25px',margin:'10px'}}>Devops</span></button>
            <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" ><span style={{fontSize:'25px',margin:'10px'}}>Cloud Engineering</span></button>           
            <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2"  ><span style={{fontSize:'25px',margin:'10px'}}>Data Science</span></button>
            <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2"  ><span style={{fontSize:'25px',margin:'10px'}}>Data Analyst</span></button>
            <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" ><span style={{fontSize:'25px',margin:'10px'}}>Product Engineer</span></button>
            <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" ><span style={{fontSize:'25px',margin:'10px'}}>UI/UX Designer</span></button>
            <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" ><span style={{fontSize:'25px',margin:'10px'}}>Artificial Intelligence/Machine Learning</span></button>
            <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" ><span style={{fontSize:'25px',margin:'10px'}}>Cybersecurity</span></button>
            <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" ><span style={{fontSize:'25px',margin:'10px'}}>Network Architecture</span></button>
            <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" ><span style={{fontSize:'25px',margin:'10px'}}>Project Management</span></button>
            <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" ><span style={{fontSize:'25px',margin:'10px'}}>Business Analyst</span></button>
          </div>         
      </div>
      </div>
      <div className="mainCard" style={{ display: "flex" }}>
  {Array(12).fill(0).map((_, index) => (
    <div
      key={index}
      className="top"
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        margin: "50px",
      }}
      onClick={() => window.location.href = '/demo_lectures'}
    >
      <MDBCard className="custom-card">
        <MDBCardImage
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
  ))}
</div>
     
  </>
  );
}
