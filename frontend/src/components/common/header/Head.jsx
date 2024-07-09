import React from "react";
import "./header.css";
const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo ">
            <div className="flex flex-row gap-2">
              <div>
                <h1 style={{  fontStyle: "italic" }}>
                  JOVESE
                </h1>
              </div>

              <div className="flex flex-row">
                <div className="icon-container">
                  <i className="fas fa-bolt icon" style={{padding:'5px'}}></i>
                </div>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  AI powered
                </span>
              </div>
            </div>   
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
