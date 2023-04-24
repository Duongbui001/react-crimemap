import React from "react";
import "./Contact-style.css";
import logo from "./rainbow.png"


const Contact = () => {
console.log (logo);
      
return (
	<div className="contact">
        <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3>Get In Touch</h3>
          <p>I am a freelance journalist and web developer with a passion for storytelling and digital innovation.</p>
          <p>My expertise in both journalism and web development allows me to create an online presence that is both engaging and informative. Whether you need help with crafting compelling content or creating a stunning website, I am confident that I can deliver a unique and creative solution.</p>
          <p>Thank you for visiting my website, and I look forward to working with you.</p>
          <h4>Contact details:</h4>
          <ul className="list">
            <li>Email: duong3ku@gmail.com</li>
            <br />
            <li>Phone: +447858106107</li>
            <br />
            <li>Address: London, UK</li>
            <br />
          </ul>
        </div>        
      </div>
    </div>
        <img id="image" src={logo} alt="rainbow-img"/>
	</div>
);
};

export default Contact;
