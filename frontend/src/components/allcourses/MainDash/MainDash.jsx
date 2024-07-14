import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";

import { useAuth } from "../../store/auth";

const MainDash = () => {

  const {user}=useAuth();
  return (
    <div className="MainDash">
      <h1>{user.username}</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
