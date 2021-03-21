import React from "react";
import { MenuItems } from "./MenuItems-teacher";
import { USERNAME } from "../../Auth";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../assets/PPS5.jpeg";
import "./teacher.css";
//import "./auth.css";
//import {image} from "./images";
//import { TextField } from "@material-ui/core";

const Teacher = () => {
  const history = useHistory();

  const navigateTo = (path) => {
    if (path === "Lecture Notes") {
      return history.push("/LectureNotes");
    }
    if (path === "Worksheets") {
      return history.push("/CreateWorksheets");
    }
    // console.log(grade);
  };
  return (
    <React.Fragment>
      <nav className="NavbarItems-teacher">
        <NavLink to="/teacher">
          <img className="logo" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-teacher">{USERNAME}</h1>

        <ul className="nav-menu-teacher ">
          {MenuItems.map((item, index) => {
            return (
              <div className="nav-links-teacher" key={index}>
                <li>
                  <NavLink to={item.url} className={item.cName}>
                    {" "}
                    {item.title}
                  </NavLink>
                </li>
              </div>
            );
          })}
        </ul>
        <NavLink to="/#">
          {" "}
          <button className="button-teacher">Log out</button>
        </NavLink>
      </nav>

      <div className="all-divs">
        <div className="body-div-teacher">
          <p className="text-teacher">Lecture Notes </p>
          <div className="button-div">
            <button
              className="button-teacher"
              onClick={() => navigateTo("Lecture Notes")}
            >
              Go
            </button>
          </div>
        </div>

        <div className="body-div-teacher">
          <p className="text-teacher">Video Lectures </p>
          <div className="button-div">
            <button className="button-teacher">Go</button>
          </div>
        </div>

        <div className="body-div-teacher">
          <p className="text-teacher">Worksheets </p>
          <div className="button-div">
            <button
              className="button-teacher"
              onClick={() => navigateTo("Worksheets")}
            >
              Go
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Teacher;
