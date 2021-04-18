import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container mt-5">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 mb-3">
            <div className="ml-2">
              <h2>STAR LAUNDRY</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                nemo ad dolorem distinctio illum mollitia.
              </p>
              <ul className="ulListStyle">
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="pl-2">+88017171717</span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faAt} />
                  <span className="pl-2">outlook@outlook.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="ml-4">
              <h2>Quick Links</h2>
              <ul className="ulListStyle">
                <li>Home</li>
                <li>Dashboard</li>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="ml-4">
              <h2>Our Services</h2>
              <ul className="ulListStyle">
                <li>Dry Cleaning</li>
                <li>Wedding Gowns</li>
                <li>Leather and Suede</li>
                <li>Curtains</li>
                <li>Wet Washing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
