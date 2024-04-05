import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="frame_503">
        <div className="frame_500">
          <img src="Logo.png" alt="Logo" />
          <p>
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="frame_502">
          <div className="frame_501">
            <h5>Our Technologies</h5>
            <ul type="none">
              <li>ReactJs</li>
              <li>Gatsby</li>
              <li>NextJs</li>
              <li>NodeJs</li>
            </ul>
          </div>
          <div className="frame_496">
            <h5>Our Services</h5>
            <ul type="none">
              <li>Social media Marketing</li>
              <li>Web & Mobile App Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="frame_505">
        <hr />
        <div className="frame_504">
          <p>
            <span className="privacy">Privacy Policy </span>
            <span className="line"> | </span>
            <span className="terms"> Terms & Conditions</span>
          </p>
        </div>
      </div>
    </div>
  );
}
