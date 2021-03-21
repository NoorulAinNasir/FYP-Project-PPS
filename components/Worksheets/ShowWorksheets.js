import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ScoreModal from "../../ScoreModal";
import { WorksheetType } from "../../users/student/Student";
import { WorksheetCode } from "../UIElements/EnterCode";
import "../../users/student/student.css";
import { USERNAME } from "../../Auth";
import logo from "../../assets/PPS5.jpeg";
export let totalScores;

const ShowWorksheets = () => {
  let inp1;
  let inp2;
  let inp3;
  let inp4;
  let inp5;

  const [show, setShow] = useState(() => false);

  useEffect(() => {
    //console.log(WorksheetType);
    showWSHandler();
  }, []);

  const focusHandler = (e) => {
    ///////////FORRRRRRRRRRR QUESTION 1
    if (e.target.name === "q1") {
      if (e.target.id === "i1") {
        inp1 = document.getElementById("s1").innerText;
      }
      if (e.target.id === "i2") {
        inp1 = document.getElementById("s2").innerText;
      }
      if (e.target.id === "i3") {
        inp1 = document.getElementById("s3").innerText;
      }
    }

    ///////////FORRRRRRRRRRR QUESTION 2
    if (e.target.name === "q2") {
      if (e.target.id === "i4") {
        inp2 = document.getElementById("s4").innerText;
      }
      if (e.target.id === "i5") {
        inp2 = document.getElementById("s5").innerText;
      }
      if (e.target.id === "i6") {
        inp2 = document.getElementById("s6").innerText;
      }
    }

    ///////////FORRRRRRRRRRR QUESTION 3
    if (e.target.name === "q3") {
      if (e.target.id === "i7") {
        inp3 = document.getElementById("s7").innerText;
      }
      if (e.target.id === "i8") {
        inp3 = document.getElementById("s8").innerText;
      }
      if (e.target.id === "i9") {
        inp3 = document.getElementById("s9").innerText;
      }
    }

    ///////////FORRRRRRRRRRR QUESTION 4
    if (e.target.name === "q4") {
      if (e.target.id === "i10") {
        inp4 = document.getElementById("s10").innerText;
      }
      if (e.target.id === "i11") {
        inp4 = document.getElementById("s11").innerText;
      }
      if (e.target.id === "i12") {
        inp4 = document.getElementById("s12").innerText;
      }
    }
    ///////////FORRRRRRRRRRR QUESTION 5
    if (e.target.name === "q5") {
      if (e.target.id === "i13") {
        inp5 = document.getElementById("s13").innerText;
      }
      if (e.target.id === "i14") {
        inp5 = document.getElementById("s14").innerText;
      }
      if (e.target.id === "i15") {
        inp5 = document.getElementById("s15").innerText;
      }
    }
  };

  const showWSHandler = async (e) => {
    // let worksheet;
    let length;
    let responseData;
    let btn;
    let searchId;
    let inputLenght;

    try {
      const response = await fetch(
        `http://localhost:5000/gettingHTML?type=${WorksheetType}&&code=${WorksheetCode}`
      );
      responseData = await response.json();

      length = responseData.ws.length;
      console.log(length, " length is......");
      // worksheet = responseData.ws.join("");
    } catch (err) {
      console.log(err);
    }
    /////////////for showing divs /////////////
    for (let index = length - 1; index >= 0; index--) {
      console.log(length);
      let board = document.createElement("div");
      board.id = index.toString();
      console.log(board.id, " id of a div");

      //////////creating save button ////////////////////
      btn = document.createElement("input");

      btn.type = "button";

      btn.value = "FINISH";

      btn.id = index.toString();
      btn.style.padding = "0.5rem 1.5rem";
      btn.style.fontWeight = " bolder ";
      btn.style.marginLeft = "710px";
      btn.style.marginTop = "10px ";
      btn.style.marginBottom = "1rem ";
      btn.style.background = "#e63c44";

      btn.onclick = async function (e) {
        e.preventDefault();
        btn.style.outline = "none";
        //////////GETTING ANSWERS FOR STUDENTS RESPONSES
        if (e.target.id) {
          let divId = e.target.id;
          searchId = divId;
          if (
            document.getElementsByTagName("DIV") &&
            document.getElementById(divId)
          ) {
            console.log(document.getElementById(divId));

            let inputDiv = document
              .getElementById(divId)
              .getElementsByTagName("input");

            inputLenght = inputDiv.length;

            for (let index = 0; index < inputLenght; index++) {
              if (inputLenght === 5) {
                // inputDiv.style.position = "relative";
                if (index === 0) {
                  inp1 = inputDiv[index].value;
                  console.log(inp1);
                }

                if (index === 1) {
                  inp2 = inputDiv[index].value;
                  console.log(inp2);
                }
                if (index === 2) {
                  inp3 = inputDiv[index].value;
                  console.log(inp3);
                }
                if (index === 3) {
                  inp4 = inputDiv[index].value;
                  console.log(inp4);
                }
                if (index === 4) {
                  inp5 = inputDiv[index].value;
                  console.log(inp5);
                }
              }
            }

            //for saving fill in the blanks responses

            if (inputLenght === 5) {
              try {
                const response = await fetch(
                  "http://localhost:5000/matchStudentResponse",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      inp1,
                      inp2,
                      inp3,
                      inp4,
                      inp5,
                      searchId: responseData.code[searchId],
                    }),
                  }
                );

                const res = await response.json();
                console.log(res.score);
                totalScores = res.score;
                if (res) {
                  setShow(() => true);
                  console.log(show);
                }
              } catch (err) {
                console.log(err);
              }
            }

            ////////for mcqs ///////
            if (inputLenght === 15) {
              try {
                let response = await fetch(
                  "http://localhost:5000/matchStudentResponse",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      inp1,
                      inp2,
                      inp3,
                      inp4,
                      inp5,
                      searchId: responseData.code[searchId],
                    }),
                  }
                );
                const res = await response.json();
                console.log(res.score);
                totalScores = res.score;
                if (res) {
                  setShow(() => true);
                  console.log(show);
                }
              } catch (err) {
                console.log(err);
              }
              // console.log(count, "  ............count111........");
            }
          }
        }
      };

      /////////////all the styling for worksheets//////////
      board.className = "blah";

      board.style.color = "white";
      board.style.background = "#666666";
      board.style.height = "fit-content";
      board.style.width = "40rem";
      board.style.marginLeft = "420px";
      board.style.marginTop = "20px";
      // board.style.marginBottom = "1rem";
      board.style.padding = "2rem";
      board.style.boxShadow = "1px 1px 8px black";
      board.style.fontFamily = "Calibiri";
      board.style.fontStyle = "italic";
      //board.style.position = "relative";
      console.log(index, "index isssssssssss");
      board.innerHTML = responseData.ws[index];

      document.getElementById("dis").appendChild(board);
      document.getElementById("dis").appendChild(btn);
    }

    ///FOR SHOWING EMPTY FIELDS
    if (document.getElementsByClassName("inp1")) {
      console.log(document.getElementsByClassName("inp1"));
      let removableSaveBtn = document.getElementsByClassName("inp1").length;
      for (let index = 0; index < removableSaveBtn; index++) {
        const element = document.getElementsByClassName("inp1")[index];
        element.setAttribute("value", "");
        element.setAttribute("placeholder", "write answer");
      }
    }

    ////////////////for removing save btn from created worksheets/////////
    if (document.getElementsByClassName("mcqSaveBtn")) {
      let removableSaveBtn = document.getElementsByClassName("mcqSaveBtn");
      for (let index = 0; index < removableSaveBtn.length; index++) {
        const element = removableSaveBtn[index];
        element.style.display = "none";
      }
    }
  };

  return (
    <div
      style={{
        background: "white",
        minWidth: "100%",
        minHeight: "100%",
        backgroundSize: "cover",
      }}
    >
      <nav className="NavbarItems-lectureNote">
        <NavLink to="/teacher">
          <img className="logo" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-lectureNote">{USERNAME}</h1>

        <ul className="nav-menu-lectureNote ">
          <div className="nav-links-lectureNote">
            <li>
              <NavLink to="/student" className="nav-links-student">
                Home
              </NavLink>
            </li>
          </div>
        </ul>
        <NavLink to="/#">
          {" "}
          <button className="button-lectureNote">Log out</button>
        </NavLink>
      </nav>

      <div
        style={{
          paddingTop: "70px",
          paddingBottom: "20px",
          paddingLeft: "530px",
          fontWeight: "bolder",
          font: "4em sans-serif",
          /* text-decoration: underline  ;  */
          color: "#f85f06",
        }}
      >
        <p>Worksheets..!</p>
      </div>

      <div id="dis" onClick={focusHandler}></div>

      <ScoreModal
        openModal={show}
        closeModal={() => setShow(false)}
      ></ScoreModal>
    </div>
  );
};

export default ShowWorksheets;
