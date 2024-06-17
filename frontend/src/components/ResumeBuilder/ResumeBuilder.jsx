import React from 'react';
import styled,  { createGlobalStyle } from 'styled-components';
import Heading from "../common/heading/Heading"
import "../about/about.css"
import Back from "../common/back/Back"
import { homeAbout } from "../../dummydata"
// Define styled components
const Container = styled.div`
 
`;
const GlobalStyle = createGlobalStyle`
  body {
  
      
  }

 
`;

const Jumbotron = styled.div`
  padding: 5rem;
  text-align: center;
  background-color: black; /* Use your preferred background color */
  border-radius: 0.75rem;
  marginLeft:10px;
  marginright:10px;
`;

const Icon = styled.svg`
  margin-top: 4rem;
  margin-bottom: 3rem;
  color: var(--bs-indigo); /* Assuming you have defined this color variable */
`;

const Title = styled.h1`
  font-weight: bold;
  color:white;
`;

const Text = styled.p`
  margin-left: auto;
  margin-right: auto;
  font-size: 1.25rem;
  color: grey; /* Use your preferred text color */
`;

const ButtonWrapper = styled.div`
  display: inline-flex;
  gap: 0.5rem;
  margin-bottom: 3rem;
`;

const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 2rem;
  background-color: #0d6efd; /* Use your preferred primary color */
  color: #fff; /* Use your preferred text color */
  cursor: pointer;

  &:hover {
    background-color: #0b5ed7; /* Use your preferred hover color */
  }
`;

const PrimaryButton1 = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  border: none;
  border-radius: 2rem;
  background-color: #0d6efd; /* Use your preferred primary color */
  color: #fff; /* Use your preferred text color */
  cursor: pointer;
  position:absolute;
  right:10rem;

  &:hover {
    background-color: #0b5ed7; /* Use your preferred hover color */
  }
`;

const SecondaryButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.25rem;
  border: 1px solid #6c757d; /* Use your preferred border color */
  border-radius: 2rem;
  background-color: transparent;
  color: #6c757d; /* Use your preferred text color */
  cursor: pointer;

  &:hover {
    background-color: rgba(108, 117, 125, 0.1); /* Use your preferred hover background color */
  }
`;
/////////////////
const StyledCard = styled.div`
  width: 18rem;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  overflow: hidden;
  margin-bottom: 1rem;
  position:relative;
  top:10rem;
  transition: transform 0.3s ease;

  &:hover {
   backgroundColor:'#1eb2a6';
   cursor:pointer;
   color:white;
   transform: scale(1.1);
  }
`;

const CardBody = styled.div`
  padding: 1.25rem;
 
`;

const CardTitle = styled.h5`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const CardSubtitle = styled.h6`
  margin-bottom: 0.5rem;
  color: #6c757d;
`;

const CardText = styled.p`
  margin-bottom: 1rem;
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


function ResumeBuilder() {
  return (
    <>
    <Back title='Resume Builder' />
    <Container style={{backgroundColor:'red'}}>
      <GlobalStyle />
      <Jumbotron>
        <Icon width="100" height="100" viewBox="0 0 118 94">
          <use xlinkHref="#bootstrap"/>
        </Icon>
        <Title>Build the best resume here</Title>
        <Text style={{marginTop:'20px',marginBottom:'20px'}}>
          This is a custom jumbotron featuring an SVG image at the top, some longer text that wraps early thanks to a responsive <code>.col-*</code> class, and a customized call to action.
        </Text>
        <ButtonWrapper>
          <PrimaryButton>
            Choose the template
           
          </PrimaryButton>
          
        </ButtonWrapper>
      </Jumbotron>
      <div className="container2">
        <div className="title2" style={{
          border:'4px solid black',
          
          height:'100px',
          position:'relative',
          top:'5rem',
          
          display:'flex',
          backgroundColor:'#1eb2a6',
          color:'black',
        }}>
        <h1 style={{marginTop:'30px',marginLeft:'25rem'}}>Build the resume that gets the result</h1>
        
        </div>
        <PrimaryButton1 style={{marginLeft:'200px !important'}}>
            Choose the template
           
        </PrimaryButton1>
        <div className="cards" style={{marginBottom:'120px'}}>
          <div className="card1" style={{display:'flex', justifyContent:'space-between',width:'70rem', margin:'auto'}}>
          <StyledCard>
              <CardBody style={{  backgroundColor:'black',border:'4px solid black', borderRadius:'10px',}}>
                <CardTitle style={{fontWeight:'bold',color:'white'}}>Step 1</CardTitle>
                {/* <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle> */}
                <CardText style={{marginTop:'20px', color:'white'}}>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </CardText>
                
              </CardBody>
          </StyledCard>  

          <StyledCard >
              <CardBody style={{ backgroundColor:'black',border:'4px solid black', borderRadius:'10px'}}>
                <CardTitle style={{fontWeight:'bold',color:'white'}}>Step 2</CardTitle>
                {/* <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle> */}
                <CardText style={{marginTop:'20px', color:'white'}}>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </CardText>
                
              </CardBody>
          </StyledCard>  

          <StyledCard>
              <CardBody style={{ backgroundColor:'black',border:'4px solid black', borderRadius:'10px'}}>
                <CardTitle style={{fontWeight:'bold',color:'white'}}>Step 3</CardTitle>
                {/* <CardSubtitle className="mb-2 text-muted">Card Subtitle</CardSubtitle> */}
                <CardText style={{marginTop:'20px', color:'white'}}>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </CardText>
                
              </CardBody>
          </StyledCard>  
          </div>
        </div>
      </div>

    <div style={{}} className="container3">
      <div className="title2" style={{
          border:'4px solid black',
         
          height:'100px',
          position:'relative',
          top:'5rem',
          textAlign:'center',
          justifyContent:'center',
          display:'flex',
          backgroundColor:'#1eb2a6',
          marginTop:'10px',
        }}>
        <h1 style={{marginTop:'100px', color:'black',marginTop:''}}>Our resume builder includes a review from one of our experts</h1>
        
        </div>
      </div>
      <div style={{display:'flex',backgroundColor:'white', }}>
      <section className='aboutHome' style={{marginTop:'100px',marginBottom:'5rem',}}>
        <div className='container flexSB' style={{display:'flex'}}>
         
          <div className='left row' >
            <img className="image"style={{width:'30rem', marginLeft:'14rem',marginTop:'7rem',height:'40rem'}}src='./images/resume.webp' alt='' />
          </div>
          <div className='right row' >
            <Heading  style={{color:'black'}} title='Get the best resume from us' />
            <div className='items' style={{marginTop:'-30px',marginLeft:'-20px'}} >
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB' >
                   
                    <div className='text1'>
                      <h2 style={{color:'black'}}>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      </div>
      <div className="icons" style={{display:'flex',justifyContent:'space-between',width:'80%',margin:'auto',marginTop:'-80px',marginBottom:'100px'}}>
      <img alt="Forbes" src="https://assets.resume-now.com/lp/_next/image?url=/blobimages/rna/sem/images/optimistic_forbes.svg&amp;w=320&amp;h=undefined&amp;q=100" decoding="async" data-nimg="intrinsic" ></img>
      
      <img alt="USA Today" src="https://assets.resume-now.com/lp/_next/image?url=/blobimages/rna/sem/images/optimistic_usa_today.svg&amp;w=320&amp;h=undefined&amp;q=100" decoding="async" data-nimg="intrinsic" ></img>
      <img alt="CNBC" src="https://assets.resume-now.com/lp/_next/image?url=/blobimages/rna/sem/images/optimistic_cnbc.svg&amp;w=320&amp;h=undefined&amp;q=100" decoding="async" data-nimg="intrinsic" ></img>
      <img alt="The New York Times" src="https://assets.resume-now.com/lp/_next/image?url=/blobimages/rna/sem/images/optimistic_new_york_times.svg&amp;w=640&amp;h=undefined&amp;q=100" decoding="async" data-nimg="intrinsic"></img>
      <img alt="CNET.com" src="https://assets.resume-now.com/lp/_next/image?url=/blobimages/rna/sem/images/optimistic_cnet.svg&amp;w=320&amp;h=undefined&amp;q=100" decoding="async" data-nimg="intrinsic"></img>
      </div>
    </Container>
    </>
  );
}

export default ResumeBuilder;
