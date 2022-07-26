import React from "react";
import { Link } from "react-router-dom";
import Photo from "../assets/pwc.jpeg";
// import Counter from "./Counter";

function Header() {
  return (
    <header>
      <div>
        <img src={Photo} alt="" width="40" height="40" />
      </div>
      <div>
        <h3>PwC Career Website</h3>
      </div>
      <div> {/* <Counter /> */}</div>
      <div>
        <Link to="/Home">Home</Link>
        <Link to="/ContactUs">Contact Us</Link>
        <Link to="/Gallery">Gallery</Link>
        <Link to="/ApplicationForm">Application Form</Link>
        <Link to="/AboutUs">About Us</Link>
        <Link to="/StudentsData">Students Data</Link>
        <Link to="/RecruitmentForm">Recruitment Form</Link>
        <Link to="/Posts">Posts</Link>
        <Link to="/Users">Users</Link>
        <Link to="/Todos">Todos</Link>
        <Link to="/LoginForm">Login Form</Link>
        <Link to="/SingleBlogPost">Blog Post</Link>
        <Link to="/Conditionals">Conditionals</Link>
        <Link to="/RecruitmentFormTwo">RecruitmentFormTwo</Link>
        <Link to="/MyProfile">Profile</Link>
      </div>
    </header>
  );
}

export default Header;
