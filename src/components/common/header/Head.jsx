import React from "react";
import "./header.css";
const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
          <style>
        {`
          .search-input::placeholder {
            
          }
          .search-input {  
           font-size: 0.5em;         
            font-weight: normal; /* Make the font normal (non-bold) */
            color: black; /* Change the color to black */
          }
            
        `}
      </style>
            <div className="search">
              <h1 style={{ position: "relative", fontStyle: "italic" }}>
                JOVESE
                <i
                  className="fas fa-search"
                  style={{
                    position: "absolute",
                    top: "60%",
                    left: "180px",
                    transform: "translateY(-50%)",
                    color: "black",
                    fontSize: "0.6em",
                  }}
                ></i>
                <div
                  className="AI"
                  style={{
                    position: "absolute",
                    top: "60%",
                    left: "210px",
                    transform: "translateY(-50%)",
                    backgroundColor: "red",
                    padding: "2px",
                    borderRadius: "4px",
                    fontSize: "1rem",
                    color: "white",
                    width: "30px",
                    textAlign: "center",
                    borderRadius: "10px",
                  }}
                >
                  AI
                </div>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Searching? here i am"
                 
                />
              </h1>
            </div>

            <div className="socialTop">
              <div className="icon-container">
                <i className="fas fa-bolt icon"></i>
              </div>
              <span style={{ color: "red", fontWeight: "bold" }}>
                AI powered
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
