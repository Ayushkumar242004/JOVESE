import React, { useContext } from "react";
import Heading from "../common/heading/Heading";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardLink,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const AboutCard = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "400px", // Example height
          display: "flex",
          position: "relative",
          marginBottom:'30px',
          // Position relative for absolute positioning of the image
        }}
        className="container"
      >
        <MDBCard
          style={{
            width: "250px",
            height: "330px",
            position: "absolute",
            left: "50px",
            top: "30px",
            objectFit: "cover",
            border: "4px solid black",
            borderRadius: "10px",
          }}
        >
          <MDBCardImage
            style={{ height: "200px", width: "243px" }}
            src="./images/about/man1.jpg"
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>
              <h1 style={{ textAlign: "center" }}>Ayush Kumar</h1>
            </MDBCardTitle>
            <MDBCardText style={{ fontSize: "15px" }}>
              <div style={{ marginLeft: "7px" }}>
                <b>For</b>: Fresher|working professional
              </div>
              <div style={{ marginLeft: "7px" }}>
                <b>Targeting Domain</b>: Front-end Developer
              </div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <div
          style={{
            width: "75%",
            backgroundColor: "#1eb2a6", // Example background color
            marginBottom: "20px",
            marginLeft: "20px", // Add margin to the left of the container
            display: "flex",
            flexDirection: "column", // Align items vertically
          }}
          className="column"
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* First tag */}
            <div
              style={{
                width: "30%",
                height: "50px",
                backgroundColor: "lightblue",
                marginBottom: "10px",
                position: "relative",
                top: "30px",
                left: "290px",
                textAlign: "center",
                fontSize: "20px",
                padding: "0px",
                borderRadius: "10px",
              }}
            >
              FrontEnd Enginner
            </div>

            {/* Second tag */}
            <div
              style={{
                width: "30%",
                height: "50px",
                backgroundColor: "lightgreen",
                marginBottom: "10px",
                position: "relative",
                top: "30px",
                left: "290px",
                marginLeft: "10px",
                textAlign: "center",
                fontSize: "20px",
                borderRadius: "10px",
              }}
            >
              3yrs of Experience
            </div>
          </div>

          <div
            style={{
              height: "100px",
              width: "42%",
              position: "absolute",
              top: "100px",
              left: "312px",
              border: "4px solid black",
             
              textAlign: "left",
            }}
            className="help"
          >
            aiybceibcwe ebui ueb cewoubceo obdj cweuob cj cwe webowebuof
            weouebouef fouwe jfeboec ouwecbc ojwebuof owbf ojwebouf ouweb o wecu
            ..
            <div>
              <a href="#" style={{ textDecoration: "underline" }}>
                Read more
              </a>
            </div>
          </div>

          <div
            className="tags"
            style={{
              position: "absolute",
              top: "190px",
              left: "320px",
              width: "42%",
              height: "5%",
              marginBottom: "10px",
              marginTop: "0px !important",
            }}
          >
            {/* <button style={{width:'50px !important',height:'30px',textAlign:'center',paddingTop:'7px',}} className="tags">HTML</button> */}
            <button>HTML</button>
            <button>CSS</button>
            <button>React</button>
            <button>ReactJs</button>
            <button>React Native</button>
            <button>Frontend Architecture</button>
            <button>DSA</button>
          </div>
        </div>

        <div
          style={{
            width: "25%",
            backgroundColor:'#1eb2a6',
            marginBottom: "20px",
           
          }}
          className="column"
        >
          <MDBCard style={{
            
          }}>
            <MDBCardBody
              className="custom-card"
              style={{
                border: "2px solid black",
                backgroundColor: "#E7ACF2",
                
              }}
            >
              <div
                className="container"
                style={{
                  display: "flex",

                  marginLeft: "3px",
                  border: "4px soild black",
                  marginTop: "0px",
                }}
              >
                <button
                  style={{
                    marginTop: "5px",
                    height: "60px",
                    width: "90px",
                    textAlign: "center",
                  }}
                >
                  6 months
                </button>
                <button
                  style={{
                    marginTop: "5px",
                    height: "60px",
                    width: "90px",
                    textAlign: "center",
                  }}
                >
                  3 months
                </button>
                <button
                  style={{
                    marginTop: "5px",
                    height: "60px",
                    width: "90px",
                    textAlign: "center",
                  }}
                >
                  1 months
                </button>
              </div>

              <div style={{ marginTop: "20px" }}>
                <MDBCardText style={{ marginTop: "100px," }}>
                  <div style={{ marginBottom: "10px" }}>
                    <MDBIcon icon="phone-alt" className="me-2" /> 1X1 sessions
                    per week.{" "}
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <MDBIcon icon="comment-alt" className="me-2" /> Unlimited
                    chat with mentor.{" "}
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <MDBIcon icon="wallet" className="me-2" /> Job referrals top
                    companies.{" "}
                  </div>
                </MDBCardText>
              </div>
            </MDBCardBody>
            <div
              className="5000"
              style={{
                border: "2px solid black",
                marginTop: "5px",
                fontSize: "40px",
                textAlign: "center",
                backgroundColor: "black",
                color: "white",
                
              }}
            >
              ₹ 5000
            </div>
            <div style={{ display: "flex" }}>
              <div
                className="button"
                style={{
                  border: "2px solid black",
                  marginTop: "5px",
                  fontSize: "25px",
                  textAlign: "center",
                  backgroundColor: "red",
                  color: "white !important",
                  
                  width: "70%",
                }}
              >
                <div style={{ color: "white !important", paddingTop: "10px" ,}}>
                  View Profile
                </div>
              </div>
              <MDBIcon
                icon="comment-alt"
                fas
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  marginTop: "12px",
                  marginBottom: "5px",
                  marginLeft: "15px",
                  padding: "12px",
                }}
              />
            </div>
            <div style={{
               border: "2px solid black",
               marginTop: "5px",
               fontSize: "30px",
               textAlign: "center",
               backgroundColor: "blue",
               color: "white",
               
            }}> Book Now</div>
          </MDBCard>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "400px", // Example height
          display: "flex",
          position: "relative",
          marginBottom:'30px',
          // Position relative for absolute positioning of the image
        }}
        className="container"
      >
        <MDBCard
          style={{
            width: "250px",
            height: "330px",
            position: "absolute",
            left: "50px",
            top: "30px",
            objectFit: "cover",
            border: "4px solid black",
            borderRadius: "10px",
          }}
        >
          <MDBCardImage
            style={{ height: "200px", width: "243px" }}
            src="./images/about/man1.jpg"
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>
              <h1 style={{ textAlign: "center" }}>Ayush Kumar</h1>
            </MDBCardTitle>
            <MDBCardText style={{ fontSize: "15px" }}>
              <div style={{ marginLeft: "7px" }}>
                <b>For</b>: Fresher|working professional
              </div>
              <div style={{ marginLeft: "7px" }}>
                <b>Targeting Domain</b>: Front-end Developer
              </div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <div
          style={{
            width: "75%",
            backgroundColor: "#1eb2a6", // Example background color
            marginBottom: "20px",
            marginLeft: "20px", // Add margin to the left of the container
            display: "flex",
            flexDirection: "column", // Align items vertically
          }}
          className="column"
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* First tag */}
            <div
              style={{
                width: "30%",
                height: "50px",
                backgroundColor: "lightblue",
                marginBottom: "10px",
                position: "relative",
                top: "30px",
                left: "290px",
                textAlign: "center",
                fontSize: "20px",
                padding: "0px",
                borderRadius: "10px",
              }}
            >
              FrontEnd Enginner
            </div>

            {/* Second tag */}
            <div
              style={{
                width: "30%",
                height: "50px",
                backgroundColor: "lightgreen",
                marginBottom: "10px",
                position: "relative",
                top: "30px",
                left: "290px",
                marginLeft: "10px",
                textAlign: "center",
                fontSize: "20px",
                borderRadius: "10px",
              }}
            >
              3yrs of Experience
            </div>
          </div>

          <div
            style={{
              height: "100px",
              width: "42%",
              position: "absolute",
              top: "100px",
              left: "312px",
              border: "4px solid black",
             
              textAlign: "left",
            }}
            className="help"
          >
            aiybceibcwe ebui ueb cewoubceo obdj cweuob cj cwe webowebuof
            weouebouef fouwe jfeboec ouwecbc ojwebuof owbf ojwebouf ouweb o wecu
            ..
            <div>
              <a href="#" style={{ textDecoration: "underline" }}>
                Read more
              </a>
            </div>
          </div>

          <div
            className="tags"
            style={{
              position: "absolute",
              top: "190px",
              left: "320px",
              width: "42%",
              height: "5%",
              marginBottom: "10px",
              marginTop: "0px !important",
            }}
          >
            {/* <button style={{width:'50px !important',height:'30px',textAlign:'center',paddingTop:'7px',}} className="tags">HTML</button> */}
            <button>HTML</button>
            <button>CSS</button>
            <button>React</button>
            <button>ReactJs</button>
            <button>React Native</button>
            <button>Frontend Architecture</button>
            <button>DSA</button>
          </div>
        </div>

        <div
          style={{
            width: "25%",
            backgroundColor:'#1eb2a6',
            marginBottom: "20px",
           
          }}
          className="column"
        >
          <MDBCard style={{
            
          }}>
            <MDBCardBody
              className="custom-card"
              style={{
                border: "2px solid black",
                backgroundColor: "#E7ACF2",
                
              }}
            >
              <div
                className="container"
                style={{
                  display: "flex",

                  marginLeft: "3px",
                  border: "4px soild black",
                  marginTop: "0px",
                }}
              >
                <button
                  style={{
                    marginTop: "5px",
                    height: "60px",
                    width: "90px",
                    textAlign: "center",
                  }}
                >
                  6 months
                </button>
                <button
                  style={{
                    marginTop: "5px",
                    height: "60px",
                    width: "90px",
                    textAlign: "center",
                  }}
                >
                  3 months
                </button>
                <button
                  style={{
                    marginTop: "5px",
                    height: "60px",
                    width: "90px",
                    textAlign: "center",
                  }}
                >
                  1 months
                </button>
              </div>

              <div style={{ marginTop: "20px" }}>
                <MDBCardText style={{ marginTop: "100px," }}>
                  <div style={{ marginBottom: "10px" }}>
                    <MDBIcon icon="phone-alt" className="me-2" /> 1X1 sessions
                    per week.{" "}
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <MDBIcon icon="comment-alt" className="me-2" /> Unlimited
                    chat with mentor.{" "}
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <MDBIcon icon="wallet" className="me-2" /> Job referrals top
                    companies.{" "}
                  </div>
                </MDBCardText>
              </div>
            </MDBCardBody>
            <div
              className="5000"
              style={{
                border: "2px solid black",
                marginTop: "5px",
                fontSize: "40px",
                textAlign: "center",
                backgroundColor: "black",
                color: "white",
                
              }}
            >
              ₹ 5000
            </div>
            <div style={{ display: "flex" }}>
              <div
                className="button"
                style={{
                  border: "2px solid black",
                  marginTop: "5px",
                  fontSize: "25px",
                  textAlign: "center",
                  backgroundColor: "red",
                  color: "white !important",
                  
                  width: "70%",
                }}
              >
                <div style={{ color: "white !important", paddingTop: "10px" ,}}>
                  View Profile
                </div>
              </div>
              <MDBIcon
                icon="comment-alt"
                fas
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  marginTop: "12px",
                  marginBottom: "5px",
                  marginLeft: "15px",
                  padding: "12px",
                }}
              />
            </div>
            <div style={{
               border: "2px solid black",
               marginTop: "5px",
               fontSize: "30px",
               textAlign: "center",
               backgroundColor: "blue",
               color: "white",
               
            }}> Book Now</div>
          </MDBCard>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "400px", // Example height
          display: "flex",
          position: "relative",
          marginBottom:'30px',
          // Position relative for absolute positioning of the image
        }}
        className="container"
      >
        <MDBCard
          style={{
            width: "250px",
            height: "330px",
            position: "absolute",
            left: "50px",
            top: "30px",
            objectFit: "cover",
            border: "4px solid black",
            borderRadius: "10px",
          }}
        >
          <MDBCardImage
            style={{ height: "200px", width: "243px" }}
            src="./images/about/man1.jpg"
            alt="..."
          />
          <MDBCardBody>
            <MDBCardTitle>
              <h1 style={{ textAlign: "center" }}>Ayush Kumar</h1>
            </MDBCardTitle>
            <MDBCardText style={{ fontSize: "15px" }}>
              <div style={{ marginLeft: "7px" }}>
                <b>For</b>: Fresher|working professional
              </div>
              <div style={{ marginLeft: "7px" }}>
                <b>Targeting Domain</b>: Front-end Developer
              </div>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>

        <div
          style={{
            width: "75%",
            backgroundColor: "#1eb2a6", // Example background color
            marginBottom: "20px",
            marginLeft: "20px", // Add margin to the left of the container
            display: "flex",
            flexDirection: "column", // Align items vertically
          }}
          className="column"
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            {/* First tag */}
            <div
              style={{
                width: "30%",
                height: "50px",
                backgroundColor: "lightblue",
                marginBottom: "10px",
                position: "relative",
                top: "30px",
                left: "290px",
                textAlign: "center",
                fontSize: "20px",
                padding: "0px",
                borderRadius: "10px",
              }}
            >
              FrontEnd Enginner
            </div>

            {/* Second tag */}
            <div
              style={{
                width: "30%",
                height: "50px",
                backgroundColor: "lightgreen",
                marginBottom: "10px",
                position: "relative",
                top: "30px",
                left: "290px",
                marginLeft: "10px",
                textAlign: "center",
                fontSize: "20px",
                borderRadius: "10px",
              }}
            >
              3yrs of Experience
            </div>
          </div>

          <div
            style={{
              height: "100px",
              width: "42%",
              position: "absolute",
              top: "100px",
              left: "312px",
              border: "4px solid black",
             
              textAlign: "left",
            }}
            className="help"
          >
            aiybceibcwe ebui ueb cewoubceo obdj cweuob cj cwe webowebuof
            weouebouef fouwe jfeboec ouwecbc ojwebuof owbf ojwebouf ouweb o wecu
            ..
            <div>
              <a href="#" style={{ textDecoration: "underline" }}>
                Read more
              </a>
            </div>
          </div>

          <div
            className="tags"
            style={{
              position: "absolute",
              top: "190px",
              left: "320px",
              width: "42%",
              height: "5%",
              marginBottom: "10px",
              marginTop: "0px !important",
            }}
          >
            {/* <button style={{width:'50px !important',height:'30px',textAlign:'center',paddingTop:'7px',}} className="tags">HTML</button> */}
            <button>HTML</button>
            <button>CSS</button>
            <button>React</button>
            <button>ReactJs</button>
            <button>React Native</button>
            <button>Frontend Architecture</button>
            <button>DSA</button>
          </div>
        </div>

        <div
          style={{
            width: "25%",
            backgroundColor:'#1eb2a6',
            marginBottom: "20px",
           
          }}
          className="column"
        >
          <MDBCard style={{
            
          }}>
            <MDBCardBody
              className="custom-card"
              style={{
                border: "2px solid black",
                backgroundColor: "#E7ACF2",
                
              }}
            >
              <div
                className="container"
                style={{
                  display: "flex",

                  marginLeft: "3px",
                  border: "4px soild black",
                  marginTop: "0px",
                }}
              >
                <button
                  style={{
                    marginTop: "5px",
                    height: "60px",
                    width: "90px",
                    textAlign: "center",
                  }}
                >
                  6 months
                </button>
                <button
                  style={{
                    marginTop: "5px",
                    height: "60px",
                    width: "90px",
                    textAlign: "center",
                  }}
                >
                  3 months
                </button>
                <button
                  style={{
                    marginTop: "5px",
                    height: "60px",
                    width: "90px",
                    textAlign: "center",
                  }}
                >
                  1 months
                </button>
              </div>

              <div style={{ marginTop: "20px" }}>
                <MDBCardText style={{ marginTop: "100px," }}>
                  <div style={{ marginBottom: "10px" }}>
                    <MDBIcon icon="phone-alt" className="me-2" /> 1X1 sessions
                    per week.{" "}
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <MDBIcon icon="comment-alt" className="me-2" /> Unlimited
                    chat with mentor.{" "}
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <MDBIcon icon="wallet" className="me-2" /> Job referrals top
                    companies.{" "}
                  </div>
                </MDBCardText>
              </div>
            </MDBCardBody>
            <div
              className="5000"
              style={{
                border: "2px solid black",
                marginTop: "5px",
                fontSize: "40px",
                textAlign: "center",
                backgroundColor: "black",
                color: "white",
                
              }}
            >
              ₹ 5000
            </div>
            <div style={{ display: "flex" }}>
              <div
                className="button"
                style={{
                  border: "2px solid black",
                  marginTop: "5px",
                  fontSize: "25px",
                  textAlign: "center",
                  backgroundColor: "red",
                  color: "white !important",
                  
                  width: "70%",
                }}
              >
                <div style={{ color: "white !important", paddingTop: "10px" ,}}>
                  View Profile
                </div>
              </div>
              <MDBIcon
                icon="comment-alt"
                fas
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "1.5rem",
                  textAlign: "center",
                  marginTop: "12px",
                  marginBottom: "5px",
                  marginLeft: "15px",
                  padding: "12px",
                }}
              />
            </div>
            <div style={{
               border: "2px solid black",
               marginTop: "5px",
               fontSize: "30px",
               textAlign: "center",
               backgroundColor: "blue",
               color: "white",
               
            }}> Book Now</div>
          </MDBCard>
        </div>
      </div>
      
    </>
  );
};

export default AboutCard;
