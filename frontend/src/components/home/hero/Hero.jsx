import React from "react";
import Heading from "../../common/heading/Heading";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO JOVESE"
              title="Best Online Education Expertise"
            />
            <p
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                color: "red",

                marginBottom: "20px",
              }}
            >
              Unlock smarter learning with <i>AI</i>.
            </p>
            <Link
              to="/explore_mentors"
              className="primary-btn"
              style={{
                fontSize: "30px",
                padding: "12px 25px",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              Start your journey for Free with us
              <i
                className="fa fa-long-arrow-alt-right"
                style={{ marginLeft: "20px" }}
              ></i>
            </Link>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
