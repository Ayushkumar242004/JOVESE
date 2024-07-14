import React, { useState, useEffect } from "react";
import "./Table2.css";
import { useAuth } from "../../store/auth";

const countries = ["USA", "Canada", "UK", "Australia", "Germany", "India", "Japan"]; // Example list of countries
const genders = ["Male", "Female", "Other"]; // Example list of genders

const UserDashboard = () => {
  const { token } = useAuth();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    gender: "",
    country: "",
    workExperiences: "",
    profileLink: "",
    github: "",
    linkedIn: "",
    twitter: "",
  });

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    gender: "",
    country: "",
    workExperiences: "",
    profileLink: "",
    github: "",
    linkedIn: "",
    twitter: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/user/getuserdata", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data.userData);
          setFormData({
            firstname: data.userData.firstname,
            lastname: data.userData.lastname,
            username: data.userData.username,
            gender: data.userData.gender,
            country: data.userData.country,
            workExperiences: data.userData.workExperiences,
            profileLink: data.userData.profileLink,
            github: data.userData.github,
            linkedIn: data.userData.linkedIn,
            twitter: data.userData.twitter,
          });
        } else {
          console.error("Error fetching user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/user/profileupdate", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setUser({
          firstname: formData.firstname,
          lastname: formData.lastname,
          username: formData.username,
          gender: formData.gender,
          country: formData.country,
          workExperiences: formData.workExperiences,
          profileLink: formData.profileLink,
          github: formData.github,
          linkedIn: formData.linkedIn,
          twitter: formData.twitter,
        });
        setIsEditing(false);
      } else {
        console.error("Error updating user data");
      }
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="user-dashboard" >
      <h1>User Dashboard</h1>
      <div >
        <form>
          <div className="user-info">
            <label>First Name</label>
            {isEditing ? (
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
              />
            ) : (
              <p>{user.firstname}</p>
            )}
          </div>
          <div className="user-info">
            <label>Last Name</label>
            {isEditing ? (
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
            ) : (
              <p>{user.lastname}</p>
            )}
          </div>
          <div className="user-info">
            <label>Username</label>
            {isEditing ? (
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            ) : (
              <p>{user.username}</p>
            )}
          </div>
          <div className="user-info">
            <label>Gender</label>
            {isEditing ? (
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                {genders.map((gender) => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
            ) : (
              <p>{user.gender}</p>
            )}
          </div>
          <div className="user-info">
            <label>Country</label>
            {isEditing ? (
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            ) : (
              <p>{user.country}</p>
            )}
          </div>
          <div className="user-info">
            <label>Work Experiences</label>
            {isEditing ? (
              <textarea
                name="workExperiences"
                value={formData.workExperiences}
                onChange={handleChange}
              />
            ) : (
              <p>{user.workExperiences}</p>
            )}
          </div>
          <div className="user-info">
            <label>Profile Link</label>
            {isEditing ? (
              <input
                type="text"
                name="profileLink"
                value={formData.profileLink}
                onChange={handleChange}
              />
            ) : (
              <p>{user.profileLink}</p>
            )}
          </div>
          <div className="user-info">
            <label>Github</label>
            {isEditing ? (
              <input
                type="text"
                name="github"
                value={formData.github}
                onChange={handleChange}
              />
            ) : (
              <p>{user.github}</p>
            )}
          </div>
          <div className="user-info">
            <label>LinkedIn</label>
            {isEditing ? (
              <input
                type="text"
                name="linkedIn"
                value={formData.linkedIn}
                onChange={handleChange}
              />
            ) : (
              <p>{user.linkedIn}</p>
            )}
          </div>
          <div className="user-info">
            <label>Twitter</label>
            {isEditing ? (
              <input
                type="text"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
              />
            ) : (
              <p>{user.twitter}</p>
            )}
          </div>
        </form>
      </div>
      <div className="buttons">
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
