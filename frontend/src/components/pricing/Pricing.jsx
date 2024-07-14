import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Assuming you're using react-router-dom for navigation
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
  const [selectedCategory, setSelectedCategory] = useState('All');
  const history = useHistory();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredMentors = selectedCategory === 'All' ? explore_mentors : explore_mentors.filter(mentor => mentor.job.toLowerCase().includes(selectedCategory.toLowerCase()));

  const handleMoreInfoClick = (id) => {
    history.push(`/demo_lectures/${id}`);
  };

  return (
    <>
      <Back title="Explore mentors" />

      <div>
        <div className="button-container">
          <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" onClick={() => handleCategoryClick('All')} style={{ margin: '10px', backgroundColor: 'black', color: 'white', borderRadius: '10px' }}>
            <span style={{ fontSize: '25px', margin: '10px' }}>All</span>
          </button>
          <button className="hero-button" onClick={() => handleCategoryClick('Frontend')} style={{ margin: '10px', backgroundColor: 'black', color: 'white', borderRadius: '10px' }}>
            <span style={{ fontSize: '25px', margin: '10px' }}>Frontend</span>
          </button>
          <button className="hero-button" onClick={() => handleCategoryClick('Backend')} style={{ margin: '10px', backgroundColor: 'black', color: 'white', borderRadius: '10px' }}>
            <span style={{ fontSize: '25px', margin: '10px' }}>Backend</span>
          </button>
          <button className="hero-button" onClick={() => handleCategoryClick('Full Stack')} style={{ margin: '10px', backgroundColor: 'black', color: 'white', borderRadius: '10px' }}>
            <span style={{ fontSize: '25px', margin: '10px' }}>Full Stack</span>
          </button>
          <button className="hero-button" onClick={() => handleCategoryClick('DevOps Engineer')} style={{ margin: '10px', backgroundColor: 'black', color: 'white', borderRadius: '10px' }}>
            <span style={{ fontSize: '25px', margin: '10px' }}>Devops</span>
          </button>
          <button className="hero-button" onClick={() => handleCategoryClick('Cloud Engineer')} style={{ margin: '10px', backgroundColor: 'black', color: 'white', borderRadius: '10px' }}>
            <span style={{ fontSize: '25px', margin: '10px' }}>Cloud Engineering</span>
          </button>
          <button className="hero-button" onClick={() => handleCategoryClick('Data Scientist')} style={{ margin: '10px', backgroundColor: 'black', color: 'white', borderRadius: '10px' }}>
            <span style={{ fontSize: '25px', margin: '10px' }}>Data Science</span>
          </button>
          <button className="hero-button" onClick={() => handleCategoryClick('Data Analyst')} style={{ margin: '10px', backgroundColor: 'black', color: 'white', borderRadius: '10px' }}>
            <span style={{ fontSize: '25px', margin: '10px' }}>Data Analyst</span>
          </button>
          <button className="hero-button" onClick={() => handleCategoryClick('Cybersecurity Specialist')} style={{ margin: '10px', backgroundColor: 'black', color: 'white', borderRadius: '10px' }}>
            <span style={{ fontSize: '25px', margin: '10px' }}>Cybersecurity</span>
          </button>
          <button className="hero-button" onClick={() => handleCategoryClick('UI/UX Designer')} style={{ margin: '10px', backgroundColor: 'black', color: 'white', borderRadius: '10px' }}>
            <span style={{ fontSize: '25px', margin: '10px' }}>UI/UX Designer</span>
          </button>
          <button className="hero-button" onClick={() => handleCategoryClick('Blockchain Developer')} style={{ margin: '10px', backgroundColor: 'black', color: 'white', borderRadius: '10px' }}>
            <span style={{ fontSize: '25px', margin: '10px' }}>Blockchain</span>
          </button>
        </div>
      </div>

      <div className="mainCard" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {filteredMentors.length === 0 ? (
          <h3 style={{ textAlign: "center", margin: "50px" }}>Currently no mentors are working under this domain</h3>
        ) : (
          filteredMentors.map((mentor) => (
            <div
              key={mentor.id}
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
                  src={mentor.image}
                  alt={mentor.name}
                  position="top"
                  className="custom-card-image"
                  style={{ objectFit: 'cover' }}
                />
                <MDBCardBody className="custom-card-body">
                  <MDBCardTitle>{mentor.name}</MDBCardTitle>
                  <div className="tags">
                    <span className="tag">{mentor.job}</span>
                  </div>
                  <MDBCardText>{mentor.description}</MDBCardText>
                  <div className="tags2">
                    {mentor.companies.split(', ').map((company, index) => (
                      <span key={index} className="tag2">{company}</span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleMoreInfoClick(mentor.id)}
                    className="more-info-button"
                    style={{ marginTop: '10px', backgroundColor: '#1EB2A6', color: 'white', borderRadius: '10px', padding: '10px 20px' }}
                  >
                    More Info
                  </button>
                </MDBCardBody>
              </MDBCard>
            </div>
          ))
        )}
      </div>
    </>
  );
}
