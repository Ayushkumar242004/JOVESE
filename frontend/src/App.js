import React from "react"; // Import React library
import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/demoLectures/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
// import ProfilePage from "./components/Mentor/Mentor";
import SignUp from "./components/SignUp/Signup2"
import LoginForm from "./components/LoginForm.jsx/LoginForm";
import StudentProfile from "./components/StudentProfileForm/StudentProfileForm";
import StartPagelogin from "./components/StartPage/StartPage_login";
import StartPageSignup from "./components/StartPage/StartPAge_Signup";
import Dashboard from "./components/Dashboard/Dashboard"
import LogOut from "./components/SignUp/Logout";
import Chat from "./components/Chat/Chat"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={CourseHome} />
          <Route exact path='/demo_lectures' component={Team} />
          <Route exact path='/explore_mentors' component={Pricing} />
          <Route exact path='/resumeBuilder' component={Blog} />
          <Route exact path='/loginform_mentors' component={Dashboard} />
          <Route exact path='/Student_Profile_Form' component={StudentProfile} />
          <Route exact path='/StartPageSignup' component={StartPageSignup} />
          <Route exact path='/StartPageLogin' component={StartPagelogin} />
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/logout' component={LogOut} />
          <Route exact path='/chat' component={Chat} />
          
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
