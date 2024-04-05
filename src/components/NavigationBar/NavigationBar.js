import React from "react";
import "./NavigationBar.css";

export default function NavigationBar() {
  return (
    <div>
      <nav class="navbar">
        <a href="#" class="Logo">
          <img src="Logo.png" alt="Logo"/>
        </a>
        <ul class="frame-496">
          <li>
            <a href="#">SERVICES</a>
          </li>
          <li>
            <a href="#">ABOUT US</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
          <li>
            <a href="#">CAREERS</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
