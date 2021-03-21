import React, { useState, useEffect } from "react";
import "./contents.css";
import logo from "../assets/PPS5.jpeg";
import { USERNAME } from "../Auth";
import { NavLink, Link, useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import image2 from "../assets/contentPic2.jpeg";
import image3 from "../assets/contentPic3.jpeg";

import English1Chapter1Topic1 from "../assets/LECTURE NOTES/ENGLISH1_CHAPTER1_TOPIC1.docx";
import English1Chapter1Topic2 from "../assets/LECTURE NOTES/ENGLISH1_CHAPTER1_TOPIC2.docx";
import English1Chapter1Topic3 from "../assets/LECTURE NOTES/ENGLISH1_CHAPTER1_TOPIC3.docx";
import English1Chapter2Topic1 from "../assets/LECTURE NOTES/ENGLISH1_CHAPTER2_TOPIC1.docx";
import English1Chapter2Topic2 from "../assets/LECTURE NOTES/ENGLISH1_CHAPTER2_TOPIC2.docx";
// import Math1Chapter1Topic1 from '../assets/LECTURE NOTES/ENGLISH1_CHAPTER2_TOPIC2.docx';
// import Math1Chapter1Topic2 from '../assets/LECTURE NOTES/ENGLISH1_CHAPTER2_TOPIC2.docx';
// import Math1Chapter2Topic1 from '../assets/LECTURE NOTES/ENGLISH1_CHAPTER2_TOPIC2.docx';
// import Math1Chapter2Topic2 from '../assets/LECTURE NOTES/ENGLISH1_CHAPTER2_TOPIC2.docx';

// import English2Chapter1Topic1 from '../assets/LECTURE NOTES/ENGLISH2_CHAPTER1_TOPIC1.docx';
// import English2Chapter1Topic2 from '../assets/LECTURE NOTES/ENGLISH2_CHAPTER1_TOPIC2.docx';
// import English2Chapter2Topic1 from '../assets/LECTURE NOTES/ENGLISH2_CHAPTER2_TOPIC1.docx';
// import English2Chapter2Topic2 from '../assets/LECTURE NOTES/ENGLISH2_CHAPTER2_TOPIC2.docx';
import Math2Chapter1Topic1 from "../assets/LECTURE NOTES/MATH2_CHAPTER1_TOPIC1.docx";
import Math2Chapter1Topic2 from "../assets/LECTURE NOTES/MATH2_CHAPTER1_TOPIC2.docx";
import Math2Chapter2Topic1 from "../assets/LECTURE NOTES/MATH2_CHAPTER2_TOPIC1.docx";
import Math2Chapter2Topic2 from "../assets/LECTURE NOTES/MATH2_CHAPTER2_TOPIC2.docx";

import English3Chapter1Topic1 from "../assets/LECTURE NOTES/ENGLISH3_CHAPTER1_TOPIC1.docx";
import English3Chapter1Topic2 from "../assets/LECTURE NOTES/ENGLISH3_CHAPTER1_TOPIC2.docx";
import English3Chapter2Topic1 from "../assets/LECTURE NOTES/ENGLISH3_CHAPTER2_TOPIC1.docx";
import English3Chapter2Topic2 from "../assets/LECTURE NOTES/ENGLISH3_CHAPTER2_TOPIC2.docx";
// import Math3Chapter1Topic1 from '../assets/LECTURE NOTES/Math3_CHAPTER1_TOPIC1.docx';
// import Math3Chapter1Topic2 from '../assets/LECTURE NOTES/Math3_CHAPTER1_TOPIC2.docx';
// import Math3Chapter2Topic1 from '../assets/LECTURE NOTES/Math3_CHAPTER2_TOPIC1.docx';
// import Math3Chapter2Topic2 from '../assets/LECTURE NOTES/Math3_CHAPTER2_TOPIC2.docx';

// import English4Chapter1Topic1 from '../assets/LECTURE NOTES/ENGLISH4_CHAPTER1_TOPIC1.docx';
// import English4Chapter1Topic2 from '../assets/LECTURE NOTES/ENGLISH4_CHAPTER1_TOPIC2.docx';
// import English4Chapter2Topic1 from '../assets/LECTURE NOTES/ENGLISH4_CHAPTER2_TOPIC1.docx';
// import English4Chapter2Topic2 from '../assets/LECTURE NOTES/ENGLISH4_CHAPTER2_TOPIC2.docx';
import Math4Chapter1Topic1 from "../assets/LECTURE NOTES/MATH4_CHAPTER1_TOPIC1.docx";
import Math4Chapter1Topic2 from "../assets/LECTURE NOTES/MATH4_CHAPTER1_TOPIC2.docx";
import Math4Chapter2Topic1 from "../assets/LECTURE NOTES/MATH4_CHAPTER2_TOPIC1.docx";
import Math4Chapter2Topic2 from "../assets/LECTURE NOTES/MATH4_CHAPTER2_TOPIC2.docx";

import English5Chapter1Topic1 from "../assets/LECTURE NOTES/ENGLISH5_CHAPTER1_TOPIC1.docx";
import English5Chapter1Topic2 from "../assets/LECTURE NOTES/ENGLISH5_CHAPTER1_TOPIC2.docx";
import English5Chapter2Topic1 from "../assets/LECTURE NOTES/ENGLISH5_CHAPTER2_TOPIC1.docx";
import English5Chapter2Topic2 from "../assets/LECTURE NOTES/ENGLISH5_CHAPTER2_TOPIC2.docx";
// import Math5Chapter1Topic1 from '../assets/LECTURE NOTES/Math5_CHAPTER1_TOPIC1.docx';
// import Math5Chapter1Topic2 from '../assets/LECTURE NOTES/Math5_CHAPTER1_TOPIC2.docx';
// import Math5Chapter2Topic1 from '../assets/LECTURE NOTES/Math5_CHAPTER2_TOPIC1.docx';
// import Math5Chapter2Topic2 from '../assets/LECTURE NOTES/Math5_CHAPTER2_TOPIC2.docx';

// import pdf from "../assets/pdfs/papa.docx";
// import logger from 'logging-library';
// import FileViewer from 'react-file-viewer';

import { Eng1val } from "./Grade1/English/English1";
import { Math1value } from "./Grade1/Mathematics/Maths1";

import { Eng2Value } from "./Grade2/English/English2";
import { Math2valuee } from "./Grade2/Mathematics/Maths2";

import { Eng3Va } from "./Grade3/English/English3";
import { Math3valueee } from "./Grade3/Mathematics/Maths3";

import { Eng4Valueee } from "./Grade4/English/English4";
import { Math4valueeee } from "./Grade4/Mathematics/Maths4";

import { Eng5Valueeee } from "./Grade5/English/English5";
import { Math5valueeeee } from "./Grade5/Mathematics/Maths5";
export let WorksheetType;

const Contents = () => {
  const [content, setContent] = useState();
  useEffect(() => {
    displayContent();
  }, []);

  const history = useHistory();
  
  const [showCodeWin, setShowCodeWin] = useState(false);
  const worksheetOptHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === "practice worksheet") {
      WorksheetType = e.target.value;
      history.push("/ShowWorksheets");
    }

    if (e.target.value === "test worksheet") {
      WorksheetType = e.target.value;
      setShowCodeWin(() => true);
    }
  };




  const displayContent = () => {
    //"""""""""""""""""""ENGLISH CLASS1"""""""""""""""""""""""""""""""""
    console.log(Eng1val);
    if (Eng1val === "Greetings (Good Morning/Afternoon/Evening)") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={English1Chapter1Topic1}
                download
              >
                Click to download
              </a>
            </div>

            <p>
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Greetings:
              </h2>
              <ul
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <li>
                  <h4> Good Morning </h4>
                </li>
                <li>
                  <h4> Good Afternoon</h4>
                </li>
                <li>
                  <h4> Good Evening</h4>
                </li>
                <li>
                  <h4> Good Night</h4>{" "}
                </li>
                <li>
                  <h4> Nice To Meet You</h4>{" "}
                </li>
                <li>
                  <h4> Nice To Meet You Too</h4>
                </li>
                <li>
                  <h4> Good Bye</h4>
                </li>
                <li>
                  <h4> See You</h4>
                </li>
              </ul>
            </p>
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=gVIFEVLzP4o"
            />
          </div>
        </React.Fragment>
      );
    }
    console.log(content);

    if (Eng1val === "Greeting Teachers and Elders") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={English1Chapter1Topic2}
                download
              >
                Click to download
              </a>
            </div>

            <p>
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Greetings:
              </h2>
              <ul
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <li>
                  <h4> Good Morning </h4>
                </li>
                <li>
                  <h4> How are you? </h4>
                </li>
                <li>
                  <h4> Fine Thanks.. How are you?</h4>
                </li>
                <li>
                  <h4> Great.</h4>
                </li>
                <li>
                  <h4> Sit down please.</h4>
                </li>
                <li>
                  <h4> Thankyou </h4>
                </li>
                <li>
                  <h4> Good Afternoon</h4>
                </li>
                <li>
                  <h4> Nice To Meet You</h4>
                </li>
                <li>
                  <h4> Nice To Meet You Too </h4>
                </li>
                <li>
                  <h4> Good Evening </h4>
                </li>
                <li>
                  <h4> Good Bye</h4>
                </li>
                <li>
                  <h4> See You </h4>
                </li>
                <li>
                  <h4> Good Night</h4>
                </li>
              </ul>
            </p>

            {/* <img  style = {{ }} src={image2} alt="image2" /> */}
          </div>
          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=Fw0rdSHzWFY"
            />
          </div>{" "}
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    }
    console.log(content);

    if (Eng1val === "Alphabet (Aa to Zz capital and small)") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={English1Chapter1Topic3}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Alphabets
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h3 style={{ wordSpacing: " 50px" }}>
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                  Vv Ww Xx Yy Zz
                </h3>
              </div>
            </p>
            {/* <img  style = {{ }} src={image2} alt="image2" /> */}
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=drusnyfpSO8"
            />
            {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
          </div>
        </React.Fragment>
      );
    }

    console.log(content);

    if (Eng1val === "Small and Capital Letters (A to Z)") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note{" "}
              </h1>

              <a
                className="button-download"
                href={English1Chapter2Topic1}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Alphabets
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h3 style={{ wordSpacing: " 50px" }}>
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                  Vv Ww Xx Yy Zz
                </h3>
              </div>
            </p>
            {/* <img  style = {{ }} src={image2} alt="image2" /> */}
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=WP1blVh1ZQM"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    }

    console.log(content);

    if (Eng1val === "Sounds of Letters A to Z") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note{" "}
              </h1>
              <a
                className="button-download"
                href={English1Chapter2Topic2}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "340px" }}>
                {" "}
                ABC Letter Sounds
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h3 style={{ wordSpacing: " 50px" }}>
                  A /a/ B /b/ C /k/ D /d/ E /e/ F /f/ G /g/ H /h/ I /i/ J /j/ K
                  /k/ L /l/ M /m/ N /n/ O /o/ P /p/ Q /kw/ R /r/ S /s/ T /t/ U
                  /u/ V /v/ W /w/ X /ks/ Y /y/ Z /z/
                </h3>
              </div>
            </p>
            {/* <img  style = {{ }} src={image2} alt="image2" /> */}
          </div>
          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=4x_G21KhcEw"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    }

    //"""""""""""""""""""MATH CLASS1"""""""""""""""""""""""""""""""""

    if (Math1value === "Recognition of numbers up to 10") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note{" "}
              </h1>
              <a
                className="button-download"
                href={English1Chapter1Topic1}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Greetings:
              </h2>
              <ul
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <li>
                  <h4> Good Morning </h4>
                </li>
                <li>
                  <h4> Good Afternoon</h4>
                </li>
              </ul>
            </p>
            {/* <img  style = {{ }} src={image2} alt="image2" /> */}
          </div>
          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=pzmB0GoEKkA"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    }

    if (Math1value === "Skip counting") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note{" "}
              </h1>
              <a
                className="button-download"
                href={English1Chapter1Topic1}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Greetings:
              </h2>
              <ul
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <li>
                  <h4> Good Morning </h4>
                </li>
                <li>
                  <h4> Good Afternoon</h4>
                </li>
              </ul>
            </p>
            {/* <img  style = {{ }} src={image2} alt="image2" /> */}
          </div>
          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=Bg7mcuaw3o0"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    }

    if (Math1value === "Addition") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note{" "}
              </h1>
              <a
                className="button-download"
                href={English1Chapter1Topic1}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Greetings:
              </h2>
              <ul
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <li>
                  <h4> Good Morning </h4>
                </li>
                <li>
                  <h4> Good Afternoon</h4>
                </li>
              </ul>
            </p>
            {/* <img  style = {{ }} src={image2} alt="image2" /> */}
          </div>
          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=_b0oMzlvERI"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    }

    if (Math1value === "Subtraction") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note{" "}
              </h1>
              <a
                className="button-download"
                href={English1Chapter1Topic1}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Greetings:
              </h2>
              <ul
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <li>
                  <h4> Good Morning </h4>
                </li>
                <li>
                  <h4> Good Afternoon</h4>
                </li>
              </ul>
            </p>
            {/* <img  style = {{ }} src={image2} alt="image2" /> */}
          </div>
          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=0Wwdw68wOKI"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    }

    //"""""""""""""""""""ENGLISH CLASS2"""""""""""""""""""""""""""""""""
    else if (Eng2Value === "English2Chapter1Topic1") {
      return setContent(
        <React.Fragment>
          <h1
            style={{
              marginTop: "50px",
              marginLeft: "50px",
              marginBottom: "20px",
            }}
          >
            {" "}
            Video:
          </h1>
          <ReactPlayer
            className="Video"
            controls
            url="https://www.youtube.com/watch?v=VlRV5-QwyhE"
          />
          <Link
            className="button-download"
            href={English1Chapter1Topic1}
            download
          >
            Click to download
          </Link>
        </React.Fragment>
      );
    } else if (Eng2Value === "English2Chapter1Topic2") {
      return setContent(
        <React.Fragment>
          <h1
            style={{
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <ReactPlayer
            className="Video"
            controls
            url="https://www.youtube.com/watch?v=Om7JEF2zZAI"
          />
          <Link
            className="button-download"
            href={English1Chapter1Topic1}
            download
          >
            Click to download
          </Link>
        </React.Fragment>
      );
    } else if (Eng2Value === "English2Chapter2Topic1") {
      return setContent(
        <React.Fragment>
          <h1
            style={{
              marginTop: "50px",
              marginLeft: "50px",
              marginBottom: "20px",
            }}
          >
            {" "}
            Video:
          </h1>
          <ReactPlayer
            className="Video"
            controls
            url="https://www.youtube.com/watch?v=VfkJKfizqbc"
          />
          <Link
            className="button-download"
            href={English1Chapter1Topic1}
            download
          >
            Click to download
          </Link>
        </React.Fragment>
      );
    } else if (Eng2Value === "English2Chapter2Topic2") {
      return setContent(
        <React.Fragment>
          <h1
            style={{
              marginTop: "50px",
              marginLeft: "50px",
              marginBottom: "20px",
            }}
          >
            {" "}
            Video:
          </h1>
          <ReactPlayer
            className="Video"
            controls
            url="https://www.youtube.com/watch?v=D1ZvQSbVm10"
          />
          <Link
            className="button-download"
            href={English1Chapter1Topic1}
            download
          >
            Click to download
          </Link>
        </React.Fragment>
      );
    }

    //"""""""""""""""""""MATH CLASS2"""""""""""""""""""""""""""""""""
    else if (Math2valuee === "Skip counting by 5s, 10s, 100s") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={Math2Chapter1Topic1}
                download
              >
                Click to download
              </a>
            </div>

            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Skip counting by 5s, 10s, 100s
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <ul>
                  <li>
                    <h3> Skip counting by 5s: </h3>
                  </li>
                </ul>
                <h4>Rule:</h4> Last digit of each count is alternating 5 and 0.
                <h4>Counting:</h4> 5 10 15 20 25 30 35……
                <br></br> <br></br>
                <ul>
                  <li>
                    <h3> Skip counting by 10s:</h3>
                  </li>
                </ul>
                <h4>Rule:</h4> Last digit of each count stays 0. The only thing
                that will change is the first digit.
                <h4>Counting:</h4> 10 20 30 40 50 ………
                <br></br> <br></br>
                <ul>
                  <li>
                    <h3> Skip counting by 100s:</h3>
                  </li>
                </ul>
                <h4>Rule:</h4> Last digit of each count contains two 0s.
                <h4>Counting:</h4> 100 200 300 400 500 ………
              </div>
            </p>
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=4xsGvFUGjnw"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Math2valuee === "Ordinal counting") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={Math2Chapter1Topic2}
                download
              >
                Click to download
              </a>
            </div>

            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Ordinal Numbers{" "}
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h4> Ordinal Numbers shows position of an object</h4>
                <br></br>

                <ul>
                  <li style={{ wordSpacing: " 50px" }}> 1st First </li>
                  <li style={{ wordSpacing: " 39px" }}> 2nd Second </li>
                  <li style={{ wordSpacing: " 50px" }}> 3rd Third </li>
                  <li style={{ wordSpacing: " 50px" }}> 4th Fourth </li>
                  <li style={{ wordSpacing: " 50px" }}> 5th Fifth </li>
                  <li style={{ wordSpacing: " 50px" }}> 6th Sixth </li>
                  <li style={{ wordSpacing: " 50px" }}> 7th Seventh </li>
                  <li style={{ wordSpacing: " 50px" }}> 8th Eighth </li>
                  <li style={{ wordSpacing: " 50px" }}> 9th Ninth </li>
                  <li style={{ wordSpacing: " 40px" }}> 10th Tenth </li>
                </ul>
              </div>
            </p>
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=BaO1E21SpkI"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Math2valuee === "Multiplication") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={Math2Chapter2Topic1}
                download
              >
                Click to download
              </a>
            </div>

            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Multiplication{" "}
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h4> What is to multiply? .</h4>
                <p>
                  In math, to multiply means to add equal groups. When we
                  multiply, the number of things in the group increases
                </p>
                <br></br>
                <h3>Examples</h3>
                <br></br>
                <ul style={{ marginLeft: " 30px" }}>
                  <li> 6*9=54 </li>
                  <br></br>
                  <li> 3*3=9 </li>
                  <br></br>
                  <li> 7*8 = 56</li>
                </ul>
              </div>
            </p>
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=6cipxrrcHmQ"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Math2valuee === "Division") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={Math2Chapter2Topic2}
                download
              >
                Click to download
              </a>
            </div>

            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Division{" "}
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h4> What is Division?</h4>
                <p>
                  The division is a method of distributing a group of things
                  into equal parts. It is one of the four basic operations of
                  arithmetic, which gives a fair result of sharing.{" "}
                </p>
                <br></br>
                <h3>Examples</h3>
                <br></br>
                <ul style={{ marginLeft: " 30px" }}>
                  <li> 18÷3=6</li>
                  <br></br>
                  <li> 83÷2=41 </li>
                  <br></br>
                  <li>10÷1=10</li>
                </ul>
              </div>
            </p>
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=_Mb2f7qpMjc"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    }
    //"""""""""""""""""""ENGLISH CLASS3"""""""""""""""""""""""""""""""""
    else if (Eng3Va === "Complete English Alphabet Aa to Zz") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={English3Chapter1Topic1}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Alphabets
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h3 style={{ wordSpacing: " 50px" }}>
                  Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu
                  Vv Ww Xx Yy Zz
                </h3>
              </div>
            </p>
          </div>
          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=AB3sdxK3oYQ"
            />
          </div>{" "}
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Eng3Va === "Vocabulary (words/meanings)") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={English3Chapter1Topic2}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Vocabulary
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h3 style={{ wordSpacing: " 50px" }}>
                  Ability absorb accuse act active Bold border brief Cable
                  capture certain chill
                </h3>
              </div>
            </p>
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=Ran9sit6jHo"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Eng3Va === "Vowels (a-e-i-o-u/sounds)") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={English3Chapter2Topic1}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Vowels (a-e-i-o-u/sounds)
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h3 style={{ wordSpacing: " 50px" }}>Aa Ee Ii Oo Uu</h3>
              </div>
            </p>
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=ZrZB989VQDU"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Eng3Va === "Diagraphs/Common Blends") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={English3Chapter2Topic2}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                Diagraphs/Common Blends(-sh){" "}
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h3 style={{ wordSpacing: " 50px" }}>
                  shade, shadow, shake, shall, shape, share, shark, she, sheep,
                  shine, ship, shirt, shop, shore, short, shot, should,
                  shoulder, shout, show, shut
                </h3>
              </div>
            </p>
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=ptfu3tL0OBg"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    }

    //"""""""""""""""""""MATH CLASS 3"""""""""""""""""""""""""""""""""
    else if (Math3valueee === "Math3Chapter1Topic1") {
      return setContent(
        <React.Fragment>
          <h1
            style={{
              marginTop: "50px",
              marginLeft: "50px",
              marginBottom: "20px",
            }}
          >
            {" "}
            Video:
          </h1>
          <ReactPlayer
            className="Video"
            controls
            url="https://www.youtube.com/watch?v=HYqd6PGLZIs"
          />
          <Link
            className="button-download"
            href={English1Chapter1Topic1}
            download
          >
            Click to download
          </Link>
        </React.Fragment>
      );
    } else if (Math3valueee === "Math3Chapter1Topic2") {
      return setContent(
        <React.Fragment>
          <h1
            style={{
              marginTop: "50px",
              marginLeft: "50px",
              marginBottom: "20px",
            }}
          >
            {" "}
            Video:
          </h1>
          <ReactPlayer
            className="Video"
            controls
            url="https://www.youtube.com/watch?v=YAYNeedo4To "
          />
          <Link
            className="button-download"
            href={English1Chapter1Topic1}
            download
          >
            Click to download
          </Link>
        </React.Fragment>
      );
    } else if (Math3valueee === "Math3Chapter2Topic1") {
      return setContent(
        <React.Fragment>
          <h1
            style={{
              marginTop: "50px",
              marginLeft: "50px",
              marginBottom: "20px",
            }}
          >
            {" "}
            Video:
          </h1>
          <ReactPlayer
            className="Video"
            controls
            url="https://www.youtube.com/watch?v=oNoGsxJFXYQ"
          />
          <Link
            className="button-download"
            href={English1Chapter1Topic1}
            download
          >
            Click to download
          </Link>
        </React.Fragment>
      );
    } else if (Math3valueee === "Math3Chapter2Topic2") {
      return setContent(
        <React.Fragment>
          <h1
            style={{
              marginTop: "50px",
              marginLeft: "50px",
              marginBottom: "20px",
            }}
          >
            {" "}
            Video:
          </h1>
          <ReactPlayer
            className="Video"
            controls
            url="https://www.youtube.com/watch?v=1bkv9zU3ptg"
          />
          <Link
            className="button-download"
            href={English1Chapter1Topic1}
            download
          >
            Click to download
          </Link>
        </React.Fragment>
      );
    }

    //"""""""""""""""""""ENGLISH CLASS4"""""""""""""""""""""""""""""""""
    else if (Eng4Valueee === "English4Chapter1Topic1") {
      return setContent(
        <React.Fragment>
          <h1
            style={{
              marginTop: "50px",
              marginLeft: "50px",
              marginBottom: "20px",
            }}
          >
            {" "}
            Video:
          </h1>
          <ReactPlayer
            className="Video"
            controls
            url="https://www.youtube.com/watch?v=uEFqdj41kEQ"
          />
          <Link
            className="button-download"
            href={English1Chapter1Topic1}
            download
          >
            Click to download
          </Link>
        </React.Fragment>
      );
    } else if (Eng4Valueee === "English4Chapter1Topic2") {
      return setContent(
        <React.Fragment>
          <h1
            style={{
              marginTop: "50px",
              marginLeft: "50px",
              marginBottom: "20px",
            }}
          >
            {" "}
            Video:
          </h1>
          <ReactPlayer
            className="Video"
            controls
            url="https://www.youtube.com/watch?v=hFFW9zKJ5os"
          />
          <Link
            className="button-download"
            href={English1Chapter1Topic1}
            download
          >
            Click to download
          </Link>
        </React.Fragment>
      );
    } else if (Eng4Valueee === "English4Chapter2Topic1") {
      return setContent(
        <React.Fragment>
          <h1
            style={{
              marginTop: "50px",
              marginLeft: "50px",
              marginBottom: "20px",
            }}
          >
            {" "}
            Video:
          </h1>
          <ReactPlayer
            className="Video"
            controls
            url="https://www.youtube.com/watch?v=2FLtdbR_p6g"
          />
          <Link
            className="button-download"
            href={English1Chapter1Topic1}
            download
          >
            Click to download
          </Link>
        </React.Fragment>
      );
    } else if (Eng4Valueee === "English4Chapter2Topic2") {
      return setContent(
        <React.Fragment>
          <h1
            style={{
              marginTop: "50px",
              marginLeft: "50px",
              marginBottom: "20px",
            }}
          >
            {" "}
            Video:
          </h1>
          <ReactPlayer
            className="Video"
            controls
            url="https://www.youtube.com/watch?v=SVyXQUeXPqo"
          />
          <Link
            className="button-download"
            href={English1Chapter1Topic1}
            download
          >
            Click to download
          </Link>
        </React.Fragment>
      );
    }

    //"""""""""""""""""""MATH CLASS 4"""""""""""""""""""""""""""""""""
    else if (Math4valueeee === "Read Numbers on Number line") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={Math4Chapter1Topic1}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                Number Line
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <ul>
                  <li>
                    <h3>
                      Writing numbers down on a Number Line makes it easy to
                      tell which numbers are greater or lesser
                    </h3>
                  </li>
                  <li>
                    <h3>
                      A number on the left is less than a number on the right.
                    </h3>
                  </li>
                  <br></br>
                  <h3>Examples:</h3>
                  <li>5 is less than 8 </li>
                  <li>−1 is less than 1</li>
                  <li>−8 is less than −5</li>
                  <li>Example: Lunch</li>
                  John borrowed $3 to pay for his lunch Virginia borrowed $5 to
                  pay for her lunch Alex had enough money for lunch and has $3
                  left over Place these people on the number line to find who is
                  poorest and who is richest.
                  <br></br>
                  Owing money is negative Having money is positive
                  <br></br>
                  So John has "−3", Virginia has "−5" and Alex has "+3"
                  <br></br>
                  Now it is easy to see that:
                  <br></br>
                  <li>Virginia is poorer than John (−5 is less than −3) and</li>
                  <li>John is poorer than Alex (−3 is less than 3) and </li>
                  <li>Alex is, of course, the richest! </li>
                </ul>
              </div>
            </p>
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=1RRixctGL8Y"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Math4valueeee === "Skip counting   on number line") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={Math4Chapter1Topic2}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                Skip counting on number line
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <ul>
                  <h3>What is skip counting?</h3>
                  <li>
                    In math, skip counting can be defined as the method of
                    counting forward by numbers other than 1.
                  </li>
                  <li>
                    To skip count, we keep adding the same number each time to
                    the previous number.
                  </li>
                  <li>
                    Here, we are skip counting by 2 on a number line. So,
                    starting at 0, the next number will be 0 + 2 = 2, then, 2 +
                    2 = 4, then 4 + 2 = 6, then 6 + 2 = 8, and then, 10, 12, 14,
                    16, 18 and so on.
                  </li>
                </ul>
              </div>
            </p>{" "}
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=uNGnd_RzN20"
            />
            {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
          </div>
        </React.Fragment>
      );
    } else if (Math4valueeee === "Multiplication using place value") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={Math4Chapter2Topic1}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                Multiplication using place value{" "}
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <ul>
                  <li>
                    <h3>Partial Products: (2 digit x 2 digit)</h3>
                  </li>
                </ul>
                <p
                  style={{
                    fontWeight: "bolder",
                    marginLeft: "80px",
                    marginTop: "25px",
                  }}
                >
                  {" "}
                  32{" "}
                </p>
                <p
                  style={{
                    fontWeight: "bolder",
                    wordSpacing: " 25px",
                    textDecoration: "underline",
                    marginLeft: "80px",
                  }}
                >
                  x 34
                </p>
                <p
                  style={{
                    fontWeight: "bolder",
                    wordSpacing: " 25px",
                    marginLeft: "80px",
                  }}
                >
                  {" "}
                  900 (30 x 30)
                </p>
                <p
                  style={{
                    fontWeight: "bolder",
                    wordSpacing: " 25px",
                    marginLeft: "80px",
                  }}
                >
                  120 (30 x 4)
                </p>
                <p
                  style={{
                    fontWeight: "bolder",
                    wordSpacing: " 35px",
                    marginLeft: "80px",
                  }}
                >
                  60 (2 x 30)
                </p>
                <p
                  style={{
                    fontWeight: "bolder",
                    wordSpacing: " 45px",
                    textDecoration: "underline",
                    marginLeft: "80px",
                  }}
                >
                  8 (2 x 4)
                </p>
                <p
                  style={{
                    fontWeight: "bolder",
                    wordSpacing: " 25px",
                    marginLeft: "80px",
                  }}
                >
                  1,088
                </p>
                <br></br> <br></br>
              </div>
            </p>
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=sZ4fWym7kYw"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Math4valueeee === "Division using place value") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={Math4Chapter2Topic2}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                Division using place value{" "}
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <ul>
                  <li>
                    <h3>Partial Quotients: 7725/6</h3>
                  </li>
                </ul>

                <p
                  style={{
                    fontWeight: "bolder",
                    textDecoration: "underline",
                    marginLeft: "80px",
                    marginTop: "25px",
                  }}
                >
                  1204 r 1{" "}
                </p>
                <p style={{ fontWeight: "bolder", marginLeft: "80px" }}>
                  {" "}
                  6) 7225
                </p>
                <p
                  style={{
                    fontWeight: "bolder",
                    textDecoration: "underline",
                    marginLeft: "80px",
                  }}
                >
                  {" "}
                  - 6000 ( 1000 x 6)
                </p>
                <p style={{ fontWeight: "bolder", marginLeft: "80px" }}>
                  {" "}
                  1225
                </p>
                <p
                  style={{
                    fontWeight: "bolder",
                    textDecoration: "underline",
                    marginLeft: "80px",
                  }}
                >
                  {" "}
                  - 1200 (200 x 6)
                </p>
                <p style={{ fontWeight: "bolder", marginLeft: "80px" }}> 25</p>
                <p
                  style={{
                    fontWeight: "bolder",
                    textDecoration: "underline",
                    marginLeft: "80px",
                  }}
                >
                  {" "}
                  - 24 (4 x 6)
                </p>
                <p style={{ fontWeight: "bolder", marginLeft: "80px" }}> 1 </p>
              </div>
            </p>
          </div>
          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=rXC_XweYNTg"
            />
          </div>{" "}
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    }

    //"""""""""""""""""""ENGLISH CLASS 5"""""""""""""""""""""""""""""""""
    else if (Eng5Valueeee === "Synonyms (Similar)") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={English5Chapter1Topic1}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Synonyms
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h3 style={{ wordSpacing: " 50px" }}>
                  <ul>
                    <li>Afraid, scared, frightened</li>
                    <li> Automobile, car, vehicle</li>
                    <li>Big, large, huge</li>
                    <li>Blank, empty, hollow</li>
                    <li>Bunny, rabbit, hare</li>
                    <li> Cap, hat</li>
                    <li> Center, middle, inside</li>
                    <li> Couch, sofa, divan</li>
                    <li>Evil, bad, wicked</li>
                    <li>Famous, well-known</li>
                    <li>Father, dad, daddy</li>
                    <li> Funny, silly, playful, crazy</li>
                    <li> Garbage, trash, junk, waste </li>
                  </ul>
                </h3>
              </div>
            </p>
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=42SieHCckoo"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Eng5Valueeee === "Antonyms (Opposite)") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={English5Chapter1Topic2}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Antonyms
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <h3 style={{ wordSpacing: " 50px" }}>
                  <ul>
                    <li>Add - Subtract</li>
                    <li> Above - Below</li>
                    <li>After - Before </li>
                    <li>Awake - Asleep </li>
                    <li>Bad - Good </li>
                    <li>Better - Worse </li>
                    <li> Big - Little </li>
                    <li> Birth - Death </li>
                    <li> Boy - Girl</li>
                    <li> Clean - Dirty</li>
                    <li> Close - Open</li>
                    <li> Cold - Hot </li>
                    <li> End - Begin </li>
                  </ul>
                </h3>
              </div>
            </p>
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=yaihuBb8Mco"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Eng5Valueeee === "Types of Pronouns") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={English5Chapter2Topic1}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Types of Pronouns
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <ul>
                  <li>
                    {" "}
                    <h3>Personal Pronouns</h3>
                  </li>
                </ul>
                <p>
                  Personal pronouns are used as a substitute for a person's
                  name.
                  <p style={{ fontWeight: " bolder" }}>For example:</p>
                  <p>• They went to the store. </p>
                  <p> • I don't want to leave. </p>
                </p>
                <ul>
                  <br></br>

                  <li>
                    {" "}
                    <h3>Possessive Pronouns</h3>
                  </li>
                </ul>
                <p>
                  Possessive pronouns show ownership or possession of a noun.
                  <p style={{ fontWeight: " bolder" }}>For example:</p>
                  <p> • Is that my book?</p>
                  <p> • No, that's his book.</p>
                </p>
                <br></br>

                <ul>
                  <li>
                    {" "}
                    <h3>Indefinite Pronouns</h3>
                  </li>
                </ul>
                <p>
                  Indefinite pronouns are used when an object doesn't need to be
                  specifically identified.
                  <p style={{ fontWeight: " bolder" }}>For example:</p>
                  <p> • Most wealth is held by a select few.</p>
                  <p> • Everyone is here already.</p>
                </p>
                <br></br>

                <ul>
                  <li>
                    {" "}
                    <h3>Relative Pronouns</h3>
                  </li>
                </ul>
                <p>
                  Relative pronouns are used to connect a clause or phrase to a
                  noun or pronoun.
                  <p style={{ fontWeight: " bolder" }}>For example:</p>
                  <p> • The driver who ran the stop sign was careless.</p>
                  <p> • I don't know which pair of shoes you want.</p>
                </p>
                <br></br>

                <ul>
                  <li>
                    {" "}
                    <h3>Intensive Pronouns</h3>
                  </li>
                </ul>
                <p>
                  Intensive pronouns emphasize, or intensify, nouns and
                  pronouns.
                  <p style={{ fontWeight: " bolder" }}>For example:</p>
                  <p> • I myself like to travel.</p>
                  <p> • He himself is his worst critic.</p>
                </p>
                <br></br>
              </div>
            </p>
          </div>

          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=h_GnSOIfWf4"
            />
          </div>
          {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
        </React.Fragment>
      );
    } else if (Eng5Valueeee === "Types of Prepositions") {
      return setContent(
        <React.Fragment>
          <div
            style={{
              marginTop: "70px",
              marginLeft: "250px",
              marginRight: "200px",
              backgroundColor: "white",
            }}
          >
            <div>
              <img style={{}} src={image2} alt="image2" />
              <img
                style={{
                  paddingTop: "  0px",
                  float: "right",
                  marginBottom: " 0px",
                }}
                src={image3}
                alt="image3"
              />
              <h1
                style={{
                  textDecoration: "underline",
                  paddingTop: " 30px",
                  marginLeft: "80px",
                  marginBottom: "20px",
                }}
              >
                {" "}
                Lecture Note
              </h1>

              <a
                className="button-download"
                href={English5Chapter2Topic2}
                download
              >
                Click to download
              </a>
            </div>
            <p>
              {" "}
              <h2 style={{ marginTop: " 30px", marginLeft: "180px" }}>
                {" "}
                Types of Prepositions
              </h2>
              <div
                style={{
                  marginTop: " 20px",
                  marginLeft: "240px",
                  paddingBottom: "30px",
                }}
              >
                <ul>
                  <li>
                    {" "}
                    <h3> Prepositions of Time:</h3>
                  </li>
                </ul>
                <p>
                  Prepositions of time show the relationship of time between the
                  nouns to the other parts of a sentence.
                  <p style={{ fontWeight: " bolder" }}>For example:</p>
                  <p>
                    On, at, in, from, to, for, since, ago, before, till/until,
                    by,{" "}
                  </p>
                </p>
                <ul>
                  <br></br>

                  <li>
                    {" "}
                    <h3> Prepositions of Place and Direction:</h3>
                  </li>
                </ul>
                <p>
                  Prepositions of place show the relationship of place between
                  the nouns to the other parts of a sentence.
                  <p style={{ fontWeight: " bolder" }}>For example:</p>
                  <p> On, at, in, by, from, to, towards, up, down, across, </p>
                </p>
                <br></br>

                <ul>
                  <li>
                    {" "}
                    <h3>• Prepositions of Agents or Things:</h3>
                  </li>
                </ul>
                <p>
                  Prepositions of agents or things indicate a casual
                  relationship between nouns and other parts of the sentence.
                  <p style={{ fontWeight: " bolder" }}>For example:</p>
                  <p> Of, for, by, with, about, etc.</p>
                </p>
                <br></br>

                <ul>
                  <li>
                    {" "}
                    <h3> Phrasal Prepositions:</h3>
                  </li>
                </ul>
                <p>
                  A phrasal preposition is not a prepositional phrase, but they
                  are a combination of two or more words which functions as a
                  preposition.
                  <p style={{ fontWeight: " bolder" }}>For example:</p>
                  <p>
                    {" "}
                    Along with, apart from, because of, by means of, according
                    to{" "}
                  </p>
                </p>
                <br></br>
              </div>
            </p>
          </div>
          <div
            style={{
              marginRight: "0px",
              paddingTop: "50px",
              paddingBottom: "20px",
              backgroundColor: "white",
            }}
          ></div>
          <h1
            style={{
              textDecoration: "underline",
              paddingTop: "25px",
              paddingBottom: "25px",
              marginLeft: " 350px",
            }}
          >
            {" "}
            Video{" "}
          </h1>
          <div className="Video">
            <ReactPlayer
              controls
              url="https://www.youtube.com/watch?v=qVo6N4vMPfI"
            />
            {/* <Link className="button-download" href= {pdf} download>Click to download</Link> */}
          </div>{" "}
        </React.Fragment>
      );
    }

    //"""""""""""""""""""MATH CLASS 5"""""""""""""""""""""""""""""""""
    else if (Math5valueeeee === "Math5Chapter1Topic1") {
      return setContent(
        <React.Fragment>
          <h1
            style={{
              marginTop: "50px",
              marginLeft: "50px",
              marginBottom: "20px",
            }}
          >
            {" "}
            Video:
          </h1>
          <ReactPlayer
            className="Video"
            controls
            url="https://www.youtube.com/watch?v=jRVBlON-hIc"
          />
          <Link
            className="button-download"
            href={English1Chapter1Topic1}
            download
          >
            Click to download
          </Link>
        </React.Fragment>
      );
    } else if (Math5valueeeee === "Math5Chapter1Topic2") {
      return setContent(
        <React.Fragment>
          <h1
            style={{
              marginTop: "50px",
              marginLeft: "50px",
              marginBottom: "20px",
            }}
          >
            {" "}
            Video:
          </h1>
          <ReactPlayer
            className="Video"
            controls
            url="https://www.youtube.com/watch?v=L8bY9O0-j_4"
          />
          <Link
            className="button-download"
            href={English1Chapter1Topic1}
            download
          >
            Click to download
          </Link>
        </React.Fragment>
      );
    } else if (Math5valueeeee === "Math5Chapter2Topic1") {
      return setContent(
        <React.Fragment>
          <h1
            style={{
              marginTop: "50px",
              marginLeft: "50px",
              marginBottom: "20px",
            }}
          >
            {" "}
            Video:
          </h1>
          <ReactPlayer
            className="Video"
            controls
            url="https://www.youtube.com/watch?v=lzXv84rO9JI"
          />
          <Link
            className="button-download"
            href={English1Chapter1Topic1}
            download
          >
            Click to download
          </Link>
        </React.Fragment>
      );
    } else if (Math5valueeeee === "Math5Chapter2Topic2") {
      return setContent(
        <React.Fragment>
          <h1
            style={{
              marginTop: "50px",
              marginLeft: "50px",
              marginBottom: "20px",
            }}
          >
            {" "}
            Video:
          </h1>
          <ReactPlayer
            className="Video"
            controls
            url="https://www.youtube.com/watch?v=CIkDcENjzBA"
          />
          <Link
            className="button-download"
            href={English1Chapter1Topic1}
            download
          >
            Click to download
          </Link>
        </React.Fragment>
      );
    }
  };

  return (
    <div
      style={{
        background: " linear-gradient(to bottom right, #ff4382, #ffce00)",
      }}
    >
      <nav className="NavbarItems-English1Topic1">
        <NavLink to="/Student">
          <img className="logo-English1Topic1" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-English1Topic1">{USERNAME}</h1>

        <ul className="nav-menu-English1Topic1 ">
          <div className="nav-links-English1Topic1">
            <li>
              <NavLink to="/Student" className="nav-links-English1Topic1">
                Home
              </NavLink>
            </li>
          </div>


          <div className="nav-links-English1Topic1">
            <li>
              <select
                className="navworksheets"
                id="Worksheets"
                onChange={worksheetOptHandler}
              >
                <option
                  value="Worksheets"
                  style={{
                     color:"black",
                    backgroundColor: "#e63c44",
                  }}
                >
                  {" "}
                  Worksheets{" "}
                </option>
                {/* <option
                  style={{
                    color: "black",
                    backgroundColor: "rgb(158, 154, 158)",
                  }}
                  value="practice worksheet"
                >
                  {" "}
                  Worksheets{" "}
                </option> */}
                <option
                  style={{
                 
                    backgroundColor: "#e63c44",
                  }}
                  value="practice worksheet"
                >
                  Practice Worksheets{" "}
                </option>
                <option
                  style={{
                    
                    backgroundColor: "#e63c44",
                  }}
                  value="test worksheet"
                >
                  Test Worksheets{" "}
                </option>
              </select>
              {/* </NavLink> */}
            </li>
          </div>

          <div className="nav-links-English1Topic1">
            <li>
              <NavLink to="/#" className="nav-links-English1Topic1">
                Progress Report
              </NavLink>
            </li>
          </div>

          <div className="nav-links-English1Topic1">
            <li>
              <NavLink to="/#" className="nav-links-English1Topic1">
                Notes
              </NavLink>
            </li>
          </div>

          <div className="nav-links-English1Topic1">
            <li>
              <NavLink
                to="/Student/SpellBee"
                className="nav-links-English1Topic1"
              >
                Spell Bee
              </NavLink>
            </li>
          </div>
        </ul>
        <NavLink to="/#">
          {" "}
          <button className="button-English1Topic1">Log out</button>
        </NavLink>
      </nav>


      <div style={{marginRight: "0px",
              paddingTop: "20px",
              paddingBottom: "20px",
              backgroundColor: "white"}}> </div>

      <div>{content}</div>
      {/* <ReactPlayer className="Video" controls url='https://www.youtube.com/watch?v=gVIFEVLzP4o' /> */}
      {/* <FileViewer
        fileType={type}
        filePath={file} /> */}
    </div>
  );
};
export default Contents;
