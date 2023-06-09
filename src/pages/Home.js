import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import leetcode_icon from "../assets/leetcode_icon.png";
import gfg from "../assets/gfg.png";
// import codechef from "../assets/codechef.png";

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Nimesh</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          
          <a href="https://www.linkedin.com/in/nimesh-pareek-1738b420a/">
                <LinkedInIcon />
          </a>
          
          <a href="https://github.com/nimeshpareek">
                <GithubIcon />
          </a>
          <a href="https://leetcode.com/nimeshpareek25/">
                <img src={leetcode_icon} alt="LeetCode Icon"  className="leetcode_icon" />
          </a>
          {/* <a href="https://auth.geeksforgeeks.org/user/nimeshpareek25/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user">
                <img src={codechef} alt="LeetCode Icon"  className="codechef" />
          </a> */}
          <a href="https://auth.geeksforgeeks.org/user/nimeshpareek25/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user">
                <img src={gfg} alt="LeetCode Icon"  className="gfg" />
          </a>
          

        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML, CSS, Bootstrap, Tailwind CSS, Material UI and ReactJS
            </span>
          </li>
          
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, C, C++, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
