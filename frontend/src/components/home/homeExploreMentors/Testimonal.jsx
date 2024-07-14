import React,{useState} from "react";
import { explore_mentors } from "../../../dummydata";
import Heading from "../../common/heading/Heading";
import "./style.css";
import { useHistory} from "react-router-dom"; // Import useHistory for navigation
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

const Testimonial = () => {
  const history = useHistory(); // Initialize useHistory

  const handleExploreMore = () => {
    history.push("/explore_mentors"); // Redirect to /explore_mentors
  };
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const filteredMentors = selectedCategory === 'All' ? explore_mentors: explore_mentors.filter(mentor => mentor.job.toLowerCase().includes(selectedCategory.toLowerCase()));
  const handleMoreInfoClick = (id) => {
    history.push(`/demo_lectures/${id}`);
  };
  return (
    <>
      <Heading subtitle="Know more about our mentors" title="Our Top Mentors" />
      <div className="justify-center text-center" style={{marginTop:'1rem'}} >
        <div >
        <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" onClick={() => handleCategoryClick('All')} >
            <span style={{ fontSize: '25px', margin: '10px' }}>All</span>
          </button>
          <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" onClick={() => handleCategoryClick('Frontend')}>
            <span style={{ fontSize: '25px', margin: '10px' }}>Frontend</span>
          </button>
          <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" onClick={() => handleCategoryClick('Backend')} >
            <span style={{ fontSize: '25px', margin: '10px' }}>Backend</span>
          </button>
          <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" onClick={() => handleCategoryClick('Full Stack')} >
            <span style={{ fontSize: '25px', margin: '10px' }}>Full Stack</span>
          </button>
          <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" onClick={() => handleCategoryClick('DevOps Engineer')}>
            <span style={{ fontSize: '25px', margin: '10px' }}>Devops</span>
          </button>
          <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" onClick={() => handleCategoryClick('Cloud Engineer')} >
            <span style={{ fontSize: '25px', margin: '10px' }}>Cloud Engineering</span>
          </button>
          <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" onClick={() => handleCategoryClick('Data Scientist')}>
            <span style={{ fontSize: '25px', margin: '10px' }}>Data Science</span>
          </button>
          <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" onClick={() => handleCategoryClick('Data Analyst')}>
            <span style={{ fontSize: '25px', margin: '10px' }}>Data Analyst</span>
          </button>
          <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" onClick={() => handleCategoryClick('Cybersecurity Specialist')}>
            <span style={{ fontSize: '25px', margin: '10px' }}>Cybersecurity</span>
          </button>
          <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" onClick={() => handleCategoryClick('UI/UX Designer')} >
            <span style={{ fontSize: '25px', margin: '10px' }}>UI/UX Designer</span>
          </button>
          <button className="mx-2 bg-[#1EB2A6] text-white rounded-lg my-2" onClick={() => handleCategoryClick('Blockchain Developer')}>
            <span style={{ fontSize: '25px', margin: '10px' }}>Blockchain</span>
          </button>
        </div>
      </div>
      <div className="mainCard" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {filteredMentors.length === 0 ? (
          <h3 style={{ textAlign: "center", margin: "50px" }}>Currently no mentors are working under this domain</h3>
        ) : (
          filteredMentors.slice(0,12).map((mentor) => (
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
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          className="hero-button"
          style={{
            margin: "10px",
            backgroundColor: "#1EB2A6",
            color: "white",
            borderRadius: "10px",
            padding: "10px 20px",
            fontSize: "18px",
            cursor: "pointer",
          }}
          onClick={handleExploreMore}
        >
          Explore more mentors
        </button>
      </div>
    </>
  );
};

export default Testimonial;
