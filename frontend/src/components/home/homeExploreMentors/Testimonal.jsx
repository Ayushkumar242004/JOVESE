import React from "react"
import { explore_mentors } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const Testimonal = () => {
  return (
    <>
      {/* <section className='testimonal padding'>
        <div className='container'>
          <Heading subtitle='Know more about our mentors' title='Our Top Mentors' />

          <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
        <Heading subtitle='Know more about our mentors' title='Our Top Mentors' />
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
  )
}

export default Testimonal
