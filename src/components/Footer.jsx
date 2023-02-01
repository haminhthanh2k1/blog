import React, { useState } from "react";
import "../styles/Footer.css";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import git from "../assets/git.png";
import linkedin from "../assets/linkedin.png";
import email from "../assets/email.png";
import top from '../assets/top.png'

function Footer() {
    const handleUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const [show, setShow] = useState(false)
    window.addEventListener('scroll', () => {
        window.scrollY > 100 ? setShow(true) : setShow(false)
    })
  return (
    <div className="footer">
      <div className="row d-flex bd-highlight footer-row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 flex-fill bd-highlight">
          <h5 className="footer-heading">Contacts</h5>
          <ul className="footer-card__icon">
            <li className="card-icon__link">
              <a href="https://www.facebook.com/HaMinhThanh2k1">
                <img className="card-icon__img" src={facebook} alt="" />
              </a>
            </li>
            <li className="card-icon__link">
              <a href="https://twitter.com/HaMinhThanh2k1">
                <img className="card-icon__img" src={twitter} alt="" />
              </a>
            </li>
            <li className="card-icon__link">
              <a href="https://github.com/haminhthanh2k1">
                <img className="card-icon__img" src={git} alt="" />
              </a>
            </li>
            <li className="card-icon__link">
              <a href="https://www.linkedin.com/in/haminhthanh2k1/">
                <img className="card-icon__img" src={linkedin} alt="" />
              </a>
            </li>
            <li className="card-icon__link">
              <a href="mailto: minhthanh2k1.info@gmail.com">
                <img className="card-icon__img" src={email} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 flex-fill bd-highlight">
          <h5 className="footer-heading">Copyright</h5>
          <h5 className="footer-nocopy">
            Copyright © 2023 Hà Minh Thành. All Rights Reserved.
          </h5>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4 flex-fill bd-highlight">
          <h5 className="footer-heading">Connect With Me</h5>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
          />
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea className="form-control" rows="3"></textarea>
          <div className="footer-btn">
            <button type="button" className="button">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="main-top">
        <button style={{display: show ? 'inline' : 'none'}} onClick={handleUp}><img className="top" src={top} alt=""/></button>
      </div>
    </div>
  );
}

export default Footer;
