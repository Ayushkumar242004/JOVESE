import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Heading from "../common/heading/Heading";
import "../exploreOurMentors/about.css";
import { homeAbout } from "../../dummydata";

// Define styled components
const Container = styled.div`
  width: 100%;
  padding: 0 1rem; /* Add padding for smaller screens */
`;

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('https://i1.wp.com/www.titanui.com/wp-content/uploads/2017/03/23/Minimal-Clean-Resume-PSD-Templates-3-Colors.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: white;    
  }
`;

const Jumbotron = styled.div`
  padding: 5rem;
  text-align: center;
  background-color: black;
  border-radius: 0.75rem;
  margin: 10px;

  @media screen and (max-width: 768px) {
    padding: 3rem;
  }
`;

const Icon = styled.svg`
  margin-top: 4rem;
  margin-bottom: 3rem;
  color: var(--bs-indigo);
`;

const Title = styled.h1`
  font-weight: bold;
  color: white;
`;

const Text = styled.p`
  margin-left: auto;
  margin-right: auto;
  font-size: 1.25rem;
  color: grey;
`;

const ButtonWrapper = styled.div`
  display: inline-flex;
  gap: 0.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center; /* Center buttons on smaller screens */
`;

const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 2rem;
  background-color: #1EB2A6;
  color: black;
  cursor: pointer;

  
`;

const PrimaryButton1 = styled(PrimaryButton)`
  position: relative;
  left: 60rem;
  top: -60px;

  @media screen and (max-width: 768px) {
    position: static;
    margin-top: 20px; /* Add margin for better spacing */
  }
`;

const SecondaryButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.25rem;
  border: 1px solid #6c757d;
  border-radius: 2rem;
  background-color: transparent;
  color: #6c757d;
  cursor: pointer;

  &:hover {
    background-color: rgba(108, 117, 125, 0.1);
  }
`;

const StyledCard = styled.div`
  width: 18rem;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  overflow: hidden;
  margin-bottom: 1rem;
  position: relative;
  top: 10rem;
  transition: transform 0.3s ease;

  &:hover {
    background-color: #1eb2a6;
    cursor: pointer;
    color: white;
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    top: 0;
  }
`;

const CardBody = styled.div`
  padding: 1.25rem;
`;

const CardTitle = styled.h5`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const CardText = styled.p`
  margin-bottom: 1rem;
  color: white;
`;

const CardLink = styled.a`
  text-decoration: none;
  color: #0d6efd;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const ResponsiveFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 1200px) {
    margin-top:8rem;
    
    
  }

  @media (max-width: 768px) {
    flex: 1 1 80%; /* Grow to 80% of the container on smaller screens */
    max-width: 80%;
   margin-left:140px;
  }

  @media (max-width: 576px) {
    flex: 1 1 100%; /* Full width on the smallest screens */
    max-width: 100%;
    
  }
`;

const Image = styled.img`
  width: 500px;
  margin-left: 5em;
  margin-top: 7rem;
  height: 715px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 2rem;
    height: auto;
  }
`;

const AboutSection = styled.section`
  margin-top: 100px;
  margin-bottom: 5rem;
  background-color: white;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

function ResumeBuilder() {
  return (
    <Container>
      <GlobalStyle />
      <Jumbotron>
        <Icon width="100" height="100" viewBox="0 0 118 94">
          <use xlinkHref="#bootstrap"/>
        </Icon>
        <Title>Build the best resume here</Title>
        <Text style={{ marginTop: '20px', marginBottom: '20px' }}>
          This is a custom jumbotron featuring an SVG image at the top, some longer text that wraps early thanks to a responsive <code>.col-*</code> class, and a customized call to action.
        </Text>
        <PrimaryButton as="a" href="https://www.canva.com/resumes/templates/" target="_blank" style={{textDecoration:'none'}}>
            <h4>Choose the template</h4>
        </PrimaryButton>
      </Jumbotron>
      <div className="container2" style={{}}>
      <div className="container3" style={{}}>
        <div className="title2" style={{
          border: '4px solid black',
          height: '100px',
          position: 'relative',
          top: '8rem',
          textAlign: 'center',
          justifyContent: 'center',
          display: 'flex',
          backgroundColor: '#1eb2a6',
        }}>
          <h1 style={{ marginTop: '20px', color: 'black' }}>Build the best resume with us</h1>
        </div>
      </div>
        
        <div className="cards" style={{ marginBottom: '140px', marginTop: '60px' }}>
          <ResponsiveFlexContainer>
            <StyledCard>
              <CardBody style={{ backgroundColor: 'black', border: '4px solid black', borderRadius: '10px' }}>
                <CardTitle style={{ fontWeight: 'bold' }}>Step 1</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </StyledCard>
            <StyledCard>
              <CardBody style={{ backgroundColor: 'black', border: '4px solid black', borderRadius: '10px' }}>
                <CardTitle style={{ fontWeight: 'bold' }}>Step 2</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </StyledCard>
            <StyledCard>
              <CardBody style={{ backgroundColor: 'black', border: '4px solid black', borderRadius: '10px' }}>
                <CardTitle style={{ fontWeight: 'bold' }}>Step 3</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </StyledCard>
          </ResponsiveFlexContainer>
        </div>
      </div>
      <div className="container3" style={{}}>
        <div className="title2" style={{
          border: '4px solid black',
          height: '100px',
          position: 'relative',
          top: '8rem',
          textAlign: 'center',
          justifyContent: 'center',
          display: 'flex',
          backgroundColor: '#1eb2a6',
        }}>
          <h1 style={{ marginTop: '20px', color: 'black' }}>Our resume builder includes a review from our experts</h1>
        </div>
      </div>
      <section className='aboutHome'>
        <div className='container flexSB' style={{
          marginTop:'120px',
          backgroundColor:'white',
        }}>
         
          <div className='left row'>
            <img src='./images/about.webp' alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items' >
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB' style={{display:'flex !important',flexDirection:'row', justifyContent:'space-between'}}>
                   
                    <div className='text1'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
     <div className="icons" style={{ display: 'flex', justifyContent: 'space-between', width: '80%', margin: 'auto', marginBottom: '80px', flexWrap: 'wrap',marginTop:'100px' }}>
       <img alt="Forbes" src="https://assets.resume-now.com/lp/_next/image?url=/blobimages/rna/sem/images/optimistic_forbes.svg&amp;w=320&amp;h=undefined&amp;q=100" decoding="async" data-nimg="intrinsic"></img>
       <img alt="USA Today" src="https://assets.resume-now.com/lp/_next/image?url=/blobimages/rna/sem/images/optimistic_usa_today.svg&amp;w=320&amp;h=undefined&amp;q=100" decoding="async" data-nimg="intrinsic"></img>
       <img alt="CNBC" src="https://assets.resume-now.com/lp/_next/image?url=/blobimages/rna/sem/images/optimistic_cnbc.svg&amp;w=320&amp;h=undefined&amp;q=100" decoding="async" data-nimg="intrinsic"></img>
       <img alt="The New York Times" src="https://assets.resume-now.com/lp/_next/image?url=/blobimages/rna/sem/images/optimistic_new_york_times.svg&amp;w=640&amp;h=undefined&amp;q=100" decoding="async" data-nimg="intrinsic"></img>
       <img alt="CNET.com" src="https://assets.resume-now.com/lp/_next/image?url=/blobimages/rna/sem/images/optimistic_cnet.svg&amp;w=320&amp;h=undefined&amp;q=100" decoding="async" data-nimg="intrinsic"></img>
     </div>
   </Container>
 );
}

export default ResumeBuilder;
