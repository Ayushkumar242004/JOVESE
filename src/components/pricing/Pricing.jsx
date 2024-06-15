import React from "react";
import Back from "../common/back/Back";
// import PriceCard from "./PriceCard";
import "./price.css";
// import Faq from "./Faq";
// import "../blog/blog.css";
// import { blog } from "../../dummydata";
// import Heading from "../common/heading/Heading";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
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
              src="https://tse4.mm.bing.net/th?id=OIP.LtLk-vQkLJGggWTN032pPwHaLH&pid=Api&P=0&h=220"
              alt="..."
              position="top"
              className="custom-card-image"
              style={{objectFit:'cover'}}
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
              src="https://tse4.mm.bing.net/th?id=OIP.cDhRJSU3YESH2cX-Drsu5gAAAA&pid=Api&P=0&h=220"
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
              src="https://tse4.mm.bing.net/th?id=OIP.FzW-DDNoSlc87wAofxswfwHaE7&pid=Api&P=0&h=220"
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
              src="https://tse1.mm.bing.net/th?id=OIP.9sDhF4sLO_eNblwkFcrIBQHaE7&pid=Api&P=0&h=220"
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
              src="https://tse3.mm.bing.net/th?id=OIP.t4GFHj0Q8km0AwfOmDstsQHaFj&pid=Api&P=0&h=220"
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
              src="https://tse1.mm.bing.net/th?id=OIP.8Jrw-yduhN6fdp5JjQNXUwHaFY&pid=Api&P=0&h=220"
              alt="..."
              position="top"
              className="custom-card-image"
            />
            <MDBCardBody className="custom-card-body">
              <MDBCardTitle>Card title</MDBCardTitle>
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
    </>
  );
}
