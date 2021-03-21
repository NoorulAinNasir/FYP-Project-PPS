import React, { useState } from "react";
import { MenuItems } from "./MenuItems-teacher";
import { USERNAME } from "../../Auth";
import { NavLink } from "react-router-dom";
import logo from "../../assets/PPS5.jpeg";
import "./lectureNote.css";

const LectureNotes = () => {
  const [file, setFile] = useState();
  const [uploadedfile, setUploadedfile] = useState();
  const [successfullyUploaded, setsuccessfullyUploaded] = useState(() => false);

  const changeFileHandler = (e) => {
    const file1 = e.target.files[0];
    setFile(file1);
  };

  //console.log(filename);

  const submitFileHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", "quiz1Title");
    // console.log(formData);

    try {
      const response = await fetch("http://localhost:5000/uploadFile", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();

      if (responseData.result.uploadedFile) {
        setsuccessfullyUploaded(() => true);
      } else {
        setsuccessfullyUploaded(() => false);
      }
      //console.log(responseData.result.name);
      // setUploadedfile(responseData.result.name);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <React.Fragment>
      <nav className="NavbarItems-lectureNote">
        <NavLink to="/teacher">
          <img className="logo" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-lectureNote">{USERNAME}</h1>

        <ul className="nav-menu-lectureNote ">
          {MenuItems.map((item, index) => {
            return (
              <div className="nav-links-lectureNote" key={index}>
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
          <button className="button-lectureNote">Log out</button>
        </NavLink>
      </nav>

      <p className="upload">Upload Lecture Notes</p>

      <div className="upload-box">
        <form onSubmit={submitFileHandler}>
          <div>
            {" "}
            {/* <div style={{ marginTop: "3rem", marginLeft: "3rem" }}>
              {successfullyUploaded ? (
                <p>UPLOADED SUCCESSFULLY</p>
              ) : (
                <p>No file chossen</p>
              )}
            </div> */}
            <input
              className="Inputchoose"
              // ref={register}
              type="file"
              id="file"
              name="submitFileHandler"
              onChange={changeFileHandler}
              accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf"
            />
          </div>

          <div>
            <button className="button-lectureNote1" onClick={submitFileHandler}>
              Submit
            </button>{" "}
          </div>
        </form>
      </div>

      {/*    
      <a href={uploadedfile} download>
        {uploadedfile}
      </a> */}
    </React.Fragment>
  );
};

export default LectureNotes;
