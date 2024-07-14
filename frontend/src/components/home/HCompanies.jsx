import React from "react";
import Heading from "../common/heading/Heading";


const techCompanies = [
  { name: "Google", iconUrl: "https://tse2.mm.bing.net/th?id=OIP.734GRokuA276V_xdyc8HiQHaHa&pid=Api&P=0&h=220" },
  { name: "Apple", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png" },
  { name: "Microsoft", iconUrl: "https://tse2.mm.bing.net/th?id=OIP.PWoq1WvDQDxc_MPv4Jt0GwHaHa&pid=Api&P=0&h=220" },
   { name: "Adobe", iconUrl: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg" },
   { name: "Intel", iconUrl: "https://tse1.mm.bing.net/th?id=OIP.xaXq1-ALKHltSLX-P5YlmQHaHa&pid=Api&P=0&h=220" },
  { name: "Amazon", iconUrl: "https://tse4.mm.bing.net/th?id=OIP.WGxtnw81X7exO2PxiVlL9QHaEK&pid=Api&P=0&h=220" },
  { name: "Coinbase", iconUrl: "https://tse4.mm.bing.net/th?id=OIP.8m84IfP3UPHW4kChqot6XAHaEK&pid=Api&P=0&h=220" },
  { name: "PayPal", iconUrl: "https://tse4.mm.bing.net/th?id=OIP.TBvJQM0YORRyOAY6RwAQkwHaHa&pid=Api&P=0&h=220" },
  { name: "Tesla", iconUrl: "https://tse1.mm.bing.net/th?id=OIP.AocwPPkfnm1nhv5IguMYWAHaEK&pid=Api&P=0&h=220" },
   { name: "Cisco", iconUrl: "https://tse3.mm.bing.net/th?id=OIP.XGolMSDiqlk0jOPS6B_h8QHaEO&pid=Api&P=0&h=220" },
  { name: "Airbnb", iconUrl: "https://tse1.mm.bing.net/th?id=OIP.3Hp8iRmblKVcbBgTSDXfRAHaE8&pid=Api&P=0&h=220" },
  { name: "Oracle", iconUrl: "https://up.yimg.com/ib/th?id=OIP.rSQ9DtGcrL8O5zE3Q_wicAHaEK&pid=Api&rs=1&c=1&qlt=95&w=203&h=114" },
  { name: "Samsung", iconUrl: "https://up.yimg.com/ib/th?id=OIP.lvKNx8hIX-ub-CZVBww9nAHaEj&pid=Api&rs=1&c=1&qlt=95&w=148&h=91" },
  { name: "NVIDIA", iconUrl: "https://up.yimg.com/ib/th?id=OIP.uI2jp3YvHR18LHqMlHEAYAAAAA&pid=Api&rs=1&c=1&qlt=95&w=215&h=121" },
  { name: "Dell", iconUrl: "https://up.yimg.com/ib/th?id=OIP.ew491SWsKyfWxcOig0W9TwHaEK&pid=Api&rs=1&c=1&qlt=95&w=187&h=105" },
  { name: "Accenture", iconUrl: "https://up.yimg.com/ib/th?id=OIP.jGH8Kyp4_2T99p9kdlC84AHaHa&pid=Api&rs=1&c=1&qlt=95&w=96&h=96" },
];


const HCompanies = () => {
  return (
    <>
      <section className="homeAbout">
        <div className="container">
          <Heading title="Make career progress with the mentors that have worked at their companies like" />
          
          {/* Render the tech company container */}
          <div className="companyContainer" >
            {techCompanies.map((company, index) => (
              <div key={index} className="company" style={{margin:'15px'}}>
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
