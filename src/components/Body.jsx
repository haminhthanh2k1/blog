import React, { useState } from "react";
import "../styles/Body.css";
import chandung from "../assets/chandung.png";
import user from "../assets/user.png";
import calendar from "../assets/calendar.png";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";
import location from "../assets/location.png";
import github from "../assets/github.png";
import graduate from "../assets/graduate.png";
import dice from "../assets/dice.png";
import career from "../assets/career.png";
import hobby from "../assets/hobby.png";


function Body() {
  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState(false)
  const handleClick = () => {
    setToggle(!toggle)
    console.log(toggle)
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-6 avatar">
            <img
              src={chandung}
              className="img-fluid rounded-start"
              alt="ảnh chân dung"
            />
          </div>
          <div className="heading col-md-6">
            <div className="card-body">
              <h2 className="card-title">Contact Information</h2>
              <h2>Frontend Developer Internship</h2>
              <h5 className="card-title"><img className="card-title__icon" src={user} alt="" />Hà Minh Thành</h5>
              <h5 className="card-title"><img className="card-title__icon" src={calendar} alt="" />30-04-2001</h5>
              <h5 className="card-title"><img className="card-title__icon" src={phone} alt="" />091-815-1598</h5>
              <h5 className="card-title"><img className="card-title__icon" src={mail} alt="" />minhthanh2k1.info@gmail.com</h5>
              <h5 className="card-title"><img className="card-title__icon" src={location} alt="" />17 Hoa Giấy, Hiệp Thành City, Quận 12, Hồ Chí Minh</h5>
              <h5 className="card-title"><img className="card-title__icon" src={github} alt="" />https://github.com/haminhthanh2k1</h5>     
              {
                toggle && <p class="card-text">
                  I am a fourth year student, majoring in
                  information security at the Ho Chi Minh City Institute of Post
                  and Telecommunications Technology. With knowledge expertise
                  learned with the product i have done. I believe that I am
                  qualified to undertake and successfully complete the assigned
                  task. I looking forward to working in a position front-end
                  developer, using knowledge and my skills for public projects
                  company. Hope the working environment at the company you will
                  help me gain more experience and skills ability to help me
                  achieve my goal of becoming Professional Front-end programmer.
                </p>
              }
              {
                toggle === false ? 
                <div className='footer-btn'>
                  <button onClick={handleClick} type="button" class="button">Learn More</button>
                </div>
                : <div className='footer-btn'>
                  <button onClick={handleClick} type="button" class="button">Hide</button>
                </div>
              }
            </div>
          </div>
        </div>

        <div className="row align-items-start">
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title"><img className="card-title__img" src={dice} alt="" /> Skills</h2>
              <span>Program language</span>
              <p className="card-text">C/C++, HTML, CSS, Javascript.</p>
              <span>Framework</span>
              <p className="card-text">ReactJS, Redux Toolkit, GIT.</p>
              <span>Strength</span>
              <p className="card-text">Problem solving, Teamwork.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h2 className="card-title"><img className="card-title__img" src={career} alt="" /> Career Goals</h2>
              <ul>
                <li>Become an excellent employee, accumulate more experience, practice skills to handle work efficiently,
                  accurately and quickly.</li>
                <li>Improve my capacity and qualifications to contribute
                  to the development of the company</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row align-items-start">
          <div class="col-md-6">
            <div class="card-body">
              <h2 class="card-title"><img class="card-title__img" src={graduate} alt="" /> Education</h2>
              <span>Posts and Telecommunications Institute of Technology(PTIT) | 2019 - 2023</span>
              <span style={{display: 'block', color:'red'}}>Major</span>
              <p class="card-text">Information security.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h2 class="card-title"><img class="card-title__img" src={hobby} alt="" /> Hobby</h2>
              <ul>
                <li>Football</li>
                <li>Game</li>
                <li>Music</li>
                <li>Fix bug code</li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Body;
