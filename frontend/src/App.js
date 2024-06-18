import React from "react"; // Import React library
import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import ProfilePage from "./components/Mentor/Mentor";
import ResumeBuilder from './components/ResumeBuilder/ResumeBuilder'
import SignUp from "./components/SignUp/SignUp";
import LoginForm from "./components/LoginForm.jsx/LoginForm";
import LoginFormMentors from "./components/LoginFormMentors/LoginFormMentors";
import StudentProfile from "./components/StudentProfileForm/StudentProfileForm";
import StartPage from "./components/StartPage/StartPage";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/about' component={About} /> */}
          <Route exact path='/refer_earn' component={CourseHome} />
          <Route exact path='/demo_lectures' component={Team} />
          <Route exact path='/explore_mentors' component={Pricing} />
          <Route exact path='/resumeBuilder' component={Blog} />
          {/* <Route exact path='/contact' component={Contact} /> */}
          <Route exact path='/mentor_profile' component={ProfilePage} />
          <Route exact path='/Student_Profile_Form' component={StudentProfile} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/login_mentors' component={LoginFormMentors} />
          <Route exact path='/StartPage' component={StartPage} />
         
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
