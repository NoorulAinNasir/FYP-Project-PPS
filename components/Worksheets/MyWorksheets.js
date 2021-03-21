import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocalStorage } from "../../LocalStorage/Local";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
import { USERNAME } from "../../Auth";
import DisapprovedModal from "./DisapprovedModal";
import logo from "../../assets/PPS5.jpeg";
import "../../users/student/student.css";

const MyWorksheets = () => {
  const [email, setuserEmail] = useLocalStorage("email", "null");
  const [errModal, seterrModal] = useState(false);
  const [showText, setShowText] = useState(() => false);
  useEffect(() => {
    //console.log(WorksheetType);
    showWSHandler();
  }, []);

  const showWSHandler = async (e) => {
    // let worksheet;
    let length;
    let responseData;

    let DeleteBtn;
    let searchId;
    let mySheets = "showApproved";
    try {
      const response = await fetch(
        `http://localhost:5000/gettingHTML?creator=${email}&&myWorksheets=${mySheets}`
      );
      responseData = await response.json();
      console.log(responseData.status);

      if (responseData.status === "404") {
        console.log(responseData.status);
        return setShowText(() => true);
      }
    } catch (err) {
      console.log(err);
    }

    if (responseData.status !== "404") {
      //console.log(responseData.status);
      // return setShowText(() => true);
      setShowText(() => false);
      length = responseData.ws.length;
      /////////////for showing divs /////////////
      for (let index = length - 1; index >= 0; index--) {
        console.log(length);
        let board = document.createElement("div");
        board.id = index.toString();
        console.log(board.id, " id of a div");

        //////////creating save button ////////////////////
        DeleteBtn = document.createElement("input");

        DeleteBtn.type = "button";

        DeleteBtn.value = "DELETE";

        DeleteBtn.id = index.toString();

        DeleteBtn.style.padding = "0.5rem 1.5rem";
        DeleteBtn.style.fontWeight = " bolder ";
        DeleteBtn.style.marginLeft = "600px";
        DeleteBtn.style.marginTop = "10px ";
        DeleteBtn.style.marginBottom = "1rem ";
        DeleteBtn.style.background = "red";
        DeleteBtn.style.color = "white";
        DeleteBtn.style.borderRadius = "25px";

        DeleteBtn.onmouseover = function () {
          console.log("im being hovered");

          DeleteBtn.style.background = "white";
          DeleteBtn.style.boxShadow = "0 2px 8px red";
          DeleteBtn.style.color = "red";
        };

        DeleteBtn.onmouseleave = function () {
          DeleteBtn.style.background = "red";
          DeleteBtn.style.boxShadow = "none";
          DeleteBtn.style.color = "white";
        };

        DeleteBtn.onclick = async function (e) {
          //  e.preventDefault();
          seterrModal(() => true);
          //////////GETTING ANSWERS FOR STUDENTS RESPONSES
          if (e.target.id) {
            let divId = e.target.id;
            console.log(e.target.id);
            searchId = divId;
            console.log(searchId);
            console.log(document.getElementsByTagName("DIV"));
            console.log(document.getElementById(divId));

            if (
              document.getElementsByTagName("DIV") &&
              document.getElementById(divId)
            ) {
              try {
                const response = await fetch(
                  "http://localhost:5000/deleteWorksheets",
                  {
                    method: "DELETE",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      searchId: responseData.code[searchId],
                      // creator: email,
                    }),
                  }
                );

                //const rply = await response.json();
                //console.log(rply);
              } catch (err) {
                console.log(err);
              }
              //  console.log(document.getElementById(divId));

              //for saving fill in the blanks responses

              // console.log(count, "  ............count111........");
            }
          }
        };

        /////////////all the styling for worksheets//////////
        board.className = "blah";

        board.style.color = "white";
        board.style.background = "#666666";
        board.style.height = "fit-content";
        board.style.width = "40rem";
        board.style.marginLeft = "5rem";
        board.style.marginTop = "1rem";
        board.style.marginBottom = "1rem";
        board.style.padding = "2rem";
        board.style.boxShadow = "1px 1px 8px black";
        board.style.fontFamily = "Calibiri";
        board.style.fontStyle = "italic";
        console.log(index, "index isssssssssss");
        board.innerHTML = responseData.ws[index];

        document.getElementById("dis").appendChild(board);

        document.getElementById("dis").appendChild(DeleteBtn);
      }
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
    <>
      <div
        style={{
          background: "orange",
          minWidth: "100%",
          minHeight: "100%",
          backgroundSize: "cover",
        }}
      >
        <nav className="NavbarItems-student">
          <NavLink to="/admin">
            <img className="logo-admin" src={logo} alt="Logo" />
          </NavLink>
          <h1 className="navbar-logo-teacher">{USERNAME}</h1>
          <ul className="nav-menu-student ">
            <div className="nav-links-student">
              <li>
                <NavLink to="/Teacher" className="nav-links-student">
                  Home
                </NavLink>
              </li>
            </div>
            <div className="nav-links-student">
              <li>
                <NavLink to="/WorksheetsHistory" className="nav-links-student">
                  History
                </NavLink>
              </li>
            </div>
          </ul>
          <NavLink to="/#">
            {" "}
            <button className="button-teacher">Log out</button>
          </NavLink>
        </nav>
        <div id="dis"></div>
        <DisapprovedModal
          modalisOpen={errModal}
          // error={error}
          closeModal={() => seterrModal(false)}
        />
      </div>

      {showText && (
        <div
          style={{
            borderWidth: "thick",
            borderStyle: "solid",
            borderRadius: "7px",
            borderColor: " black",
            width: "700px",
            height: "400px",
            marginLeft: "360px",
            marginTop: "60px",
          }}
        >
          <h1
            style={{
              marginTop: "7rem",
              textAlign: "center",
            }}
          >
            NO WORKSHEET AVAILABLE
          </h1>
          <SentimentVeryDissatisfiedOutlinedIcon
            style={{ fontSize: "80px", marginTop: "2rem", marginLeft: "19rem" }}
          />
        </div>
      )}
    </>
  );
};

export default MyWorksheets;
