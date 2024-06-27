import React from "react";
import Heading from "../common/heading/Heading";


const techCompanies = [
  { name: "Google", iconUrl: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" },
  { name: "Apple", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png" },
  { name: "Microsoft", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" },
   { name: "Adobe", iconUrl: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg" },
   { name: "Atlassian", iconUrl: "http://www.w3.org/2000/svg" },
  { name: "Amazon", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" },
  { name: "Coinbase", iconUrl: "https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg" },
  { name: "PayPal", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png  " },
  { name: "Hopin", iconUrl: "https://assets-global.website-files.com/63696c1ead1d4f3e79645931/63696cdc988cdc55cd9e73e5_Union.svg" },
  // { name: "Basecamp", iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Basecamp_Logo.svg/1200px-Basecamp_Logo.svg.png" },
  { name: "Airbnb", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png" },
  { name: "Opendoor", iconUrl: "http://www.w3.org/2000/svg" },
  { name: "HubSpot", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/HubSpot_Logo.svg/1024px-HubSpot_Logo.svg.png" },
  { name: "LaunchDarkly", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/LaunchDarkly_logo.svg/1024px-LaunchDarkly_logo.svg.png" },
  { name: "Lattice", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Lattice_%28software_company%29_logo.svg/1200px-Lattice_%28software_company%29_logo.svg.png" },
  { name: "Airbnb", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1024px-Airbnb_Logo_B%C3%A9lo.svg.png" },
];


const HCompanies = () => {
  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Heading title="Make career progress with the mentors that have worked at their companies like" />
          
          {/* Render the tech company container */}
          <div className="companyContainer">
            {techCompanies.map((company, index) => (
              <div key={index} className="company">
                <img src={company.iconUrl} alt={company.name} className="icon" />
                <span className="name">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
        
          

      </section>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
        }
        .companyContainer {
          display: flex;
          flex-wrap: wrap;
          background-color: #fff;
          padding: 10px;
        }
        .company {
          display: flex;
          align-items: center;
          margin-right: 30px;
          margin-bottom: 10px;
        }
        .icon {
          width: 60px;
          height: 50px;
          margin-right: 10px;
        }
        .name {
          font-size: 16px;
        }
      `}</style>
    </>
  );
};

export default HCompanies;
