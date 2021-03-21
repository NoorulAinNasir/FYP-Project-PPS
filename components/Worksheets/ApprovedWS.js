// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import ApprovedModal from "./ApprovedModal";
// import DisapprovedModal from "./DisapprovedModal";
// import logo from "../../assets/PPS5.jpeg";
// import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
// import "../../users/student/student.css";
// const ApprovedWS = () => {
//   const [modalisOpen, setModalisOPen] = useState(() => false);
//   const [errModal, seterrModal] = useState(() => false);
//   const [showText, setShowText] = useState(() => false);
//   useEffect(() => {
//     //console.log(WorksheetType);
//     showWSHandler();
//   }, []);

//   const showWSHandler = async (e) => {
//     // let worksheet;
//     let length;
//     let responseData;
//     let btn;
//     let btn1;
//     let searchId;

//     try {
//       const response = await fetch(`http://localhost:5000/gettingHTML`);
//       responseData = await response.json();
//       if (responseData.status === "404") {
//         console.log(responseData.status);
//         return setShowText(() => true);
//       }
//       //   length = responseData.ws.length;
//       //console.log(responseData.code, " length is......");
//       // worksheet = responseData.ws.join("");
//     } catch (err) {
//       console.log(err);
//     }
//     /////////////for showing divs /////////////
//     if (responseData.status !== "404") {
//       length = responseData.ws.length;

//       for (let index = length - 1; index >= 0; index--) {
//         console.log(length);
//         let board = document.createElement("div");
//         board.id = index.toString();
//         console.log(board.id, " id of a div");

//         //////////creating save button ////////////////////
//         btn = document.createElement("input");
//         btn1 = document.createElement("input");
//         btn.type = "button";
//         btn1.type = "button";
//         btn.value = "APPROVE";
//         btn1.value = "DISAPPROVE";
//         btn.id = index.toString();
//         btn1.id = index.toString();
//         btn.style.padding = "0.5rem 1.5rem";
//         btn.style.fontWeight = " bolder ";
//         btn.style.marginLeft = "170px";
//         btn.style.marginTop = "10px ";
//         btn.style.marginBottom = "1rem ";
//         btn.style.background = "green";
//         btn.style.color = "white";
//         btn.style.borderRadius = "25px";

//         btn1.style.padding = "0.5rem 1.5rem";
//         btn1.style.fontWeight = " bolder ";
//         btn1.style.marginLeft = "100px";
//         btn1.style.marginTop = "10px ";
//         btn1.style.marginBottom = "1rem ";
//         btn1.style.background = "red";
//         btn1.style.color = "white";
//         btn1.style.borderRadius = "25px";
//         btn.onmouseover = function () {
//           //console.log("im being hovered");

//           btn.style.background = "white";
//           btn.style.boxShadow = "0 2px 8px green";
//           btn.style.color = "green";
//         };

//         btn.onmouseleave = function () {
//           btn.style.background = "green";
//           btn.style.boxShadow = "none";
//           btn.style.color = "white";
//         };

//         btn1.onmouseover = function () {
//           //console.log("im being hovered");

//           btn1.style.background = "white";
//           btn1.style.boxShadow = "0 2px 8px red";
//           btn1.style.color = "red";
//         };

//         btn1.onmouseleave = function () {
//           btn1.style.background = "red";
//           btn1.style.boxShadow = "none";
//           btn1.style.color = "white";
//         };

//         btn.onclick = async function (e) {
//           e.preventDefault();
//           setModalisOPen(() => true);
//           //////////GETTING ANSWERS FOR STUDENTS RESPONSES
//           if (e.target.id) {
//             let divId = e.target.id;
//             console.log(e.target.id);
//             searchId = divId;
//             console.log(searchId);
//             console.log(document.getElementsByTagName("DIV"));
//             console.log(document.getElementById(divId));

//             if (
//               document.getElementsByTagName("DIV") &&
//               document.getElementById(divId)
//             ) {
//               try {
//                 const response = await fetch(
//                   "http://localhost:5000/confirmWorksheets",
//                   {
//                     method: "PATCH",
//                     headers: {
//                       "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                       searchId: responseData.code[searchId],
//                     }),
//                   }
//                 );

//                 //const rply = await response.json();
//                 //console.log(rply);
//               } catch (err) {
//                 console.log(err);
//               }
//               //  console.log(document.getElementById(divId));

//               //for saving fill in the blanks responses

//               // console.log(count, "  ............count111........");
//             }
//           }
//         };

//         btn1.onclick = async function (e) {
//           e.preventDefault();
//           seterrModal(() => true);
//           //////////GETTING ANSWERS FOR STUDENTS RESPONSES
//           if (e.target.id) {
//             let divId = e.target.id;
//             console.log(e.target.id);
//             searchId = divId;
//             console.log(searchId);
//             console.log(document.getElementsByTagName("DIV"));
//             console.log(document.getElementById(divId));

//             if (
//               document.getElementsByTagName("DIV") &&
//               document.getElementById(divId)
//             ) {
//               try {
//                 const response = await fetch(
//                   "http://localhost:5000/deleteWorksheets",
//                   {
//                     method: "DELETE",
//                     headers: {
//                       "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                       searchId: responseData.code[searchId],
//                     }),
//                   }
//                 );

//                 //const rply = await response.json();
//                 //console.log(rply);
//               } catch (err) {
//                 console.log(err);
//               }
//               //  console.log(document.getElementById(divId));

//               //for saving fill in the blanks responses

//               // console.log(count, "  ............count111........");
//             }
//           }
//         };

//         /////////////all the styling for worksheets//////////
//         board.className = "blah";

//         board.style.color = "white";
//         board.style.background = "#666666";
//         board.style.height = "fit-content";
//         board.style.width = "40rem";
//         board.style.marginLeft = "5rem";
//         board.style.marginTop = "1rem";
//         board.style.marginBottom = "1rem";
//         board.style.padding = "2rem";
//         board.style.boxShadow = "1px 1px 8px black";
//         board.style.fontFamily = "Calibiri";
//         board.style.fontStyle = "italic";
//         console.log(index, "index isssssssssss");
//         board.innerHTML = responseData.ws[index];

//         document.getElementById("dis").appendChild(board);
//         document.getElementById("dis").appendChild(btn);
//         document.getElementById("dis").appendChild(btn1);
//       }
//     }
//     ///FOR SHOWING EMPTY FIELDS
//     if (document.getElementsByClassName("inp1")) {
//       console.log(document.getElementsByClassName("inp1"));
//       let removableSaveBtn = document.getElementsByClassName("inp1").length;
//       for (let index = 0; index < removableSaveBtn; index++) {
//         const element = document.getElementsByClassName("inp1")[index];
//         element.setAttribute("value", "");
//         element.setAttribute("placeholder", "write answer");
//       }
//     }

//     ////////////////for removing save btn from created worksheets/////////
//     if (document.getElementsByClassName("mcqSaveBtn")) {
//       let removableSaveBtn = document.getElementsByClassName("mcqSaveBtn");
//       for (let index = 0; index < removableSaveBtn.length; index++) {
//         const element = removableSaveBtn[index];
//         element.style.display = "none";
//       }
//     }
//   };

//   return (
//     <>
//       <div
//         style={{
//           background: "orange",
//           minWidth: "100%",
//           minHeight: "100%",
//           backgroundSize: "cover",
//         }}
//       >
//         <nav className="NavbarItems-student">
//           {/* <NavLink>
//           <img className="logo-stu" src={logo} alt="LOGO" />
//         </NavLink> */}
//           <NavLink to="/admin">
//             <img className="logo-admin" src={logo} alt="Logo" />
//           </NavLink>
//           <h1 className="navbar-logo-admin">Admin's Portal</h1>
//           <ul className="nav-menu-student ">
//             <div className="nav-links-student">
//               <li>
//                 <NavLink to="/addWord" className="nav-links-student">
//                   Home
//                 </NavLink>
//               </li>
//             </div>
//           </ul>
//           <NavLink to="/#">
//             {" "}
//             <button className="button-admin">Log out</button>
//           </NavLink>
//         </nav>

//         <div id="dis"></div>
//         <ApprovedModal
//           modalisOpen={modalisOpen}
//           closeModal={() => setModalisOPen(false)}
//           successMsg="WORKSHEET APPROVED "
//         />
//         <DisapprovedModal
//           modalisOpen={errModal}
//           // error={error}
//           closeModal={() => seterrModal(false)}
//         />
//       </div>
//       {showText && (
//         <div
//           style={{
//             borderWidth: "thick",
//             borderStyle: "solid",
//             borderRadius: "7px",
//             borderColor: " black",
//             width: "700px",
//             height: "400px",
//             marginLeft: "360px",
//             marginTop: "60px",
//           }}
//         >
//           <h1
//             style={{
//               marginTop: "7rem",
//               textAlign: "center",
//             }}
//           >
//             NO WORKSHEET AVAILABLE
//           </h1>
//           <SentimentVeryDissatisfiedOutlinedIcon
//             style={{ fontSize: "80px", marginTop: "2rem", marginLeft: "19rem" }}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default ApprovedWS;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ApprovedModal from "./ApprovedModal";
import DisapprovedModal from "./DisapprovedModal";
import logo from "../../assets/PPS5.jpeg";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
import "../Worksheets/CSS/approvedWS.css";
const ApprovedWS = () => {
  const [modalisOpen, setModalisOPen] = useState(() => false);
  const [errModal, seterrModal] = useState(() => false);
  const [showText, setShowText] = useState(() => false);
  useEffect(() => {
    //console.log(WorksheetType);
    showWSHandler();
  }, []);

  const showWSHandler = async (e) => {
    // let worksheet;
    let length;
    let responseData;
    let btn; //approve
    let btn1; //disapprove
    let searchId;

    try {
      const response = await fetch(`http://localhost:5000/gettingHTML`);
      responseData = await response.json();
      if (responseData.status === "404") {
        console.log(responseData.status);
        return setShowText(() => true);
      }
    } catch (err) {
      console.log(err);
    }
    /////////////for showing divs /////////////
    if (responseData.status !== "404") {
      length = responseData.ws.length;

      for (let index = length - 1; index >= 0; index--) {
        console.log(length);
        let board = document.createElement("div");
        board.id = index.toString();
        console.log(board.id, " id of a div");

        //////////creating save button ////////////////////
        btn = document.createElement("input");
        btn1 = document.createElement("input");
        btn.type = "button";
        btn1.type = "button";
        btn.value = "APPROVE";
        btn1.value = "DISAPPROVE";
        btn.id = index.toString();
        btn1.id = index.toString();
        btn.style.padding = "0.5rem 1.5rem";
        btn.style.fontWeight = " bolder ";
        btn.style.marginLeft = "170px";
        btn.style.marginTop = "10px ";
        btn.style.marginBottom = "1rem ";
        btn.style.background = "green";
        btn.style.color = "white";
        btn.style.borderRadius = "25px";

        btn1.style.padding = "0.5rem 1.5rem";
        btn1.style.fontWeight = " bolder ";
        btn1.style.marginLeft = "100px";
        btn1.style.marginTop = "10px ";
        btn1.style.marginBottom = "1rem ";
        btn1.style.background = "red";
        btn1.style.color = "white";
        btn1.style.borderRadius = "25px";
        btn.onmouseover = function () {
          //console.log("im being hovered");

          btn.style.background = "white";
          btn.style.boxShadow = "0 2px 8px green";
          btn.style.color = "green";
        };

        btn.onmouseleave = function () {
          btn.style.background = "green";
          btn.style.boxShadow = "none";
          btn.style.color = "white";
        };

        btn1.onmouseover = function () {
          btn1.style.background = "white";
          btn1.style.boxShadow = "0 2px 8px red";
          btn1.style.color = "red";
        };

        btn1.onmouseleave = function () {
          btn1.style.background = "red";
          btn1.style.boxShadow = "none";
          btn1.style.color = "white";
        };

        ///APPROVE WORKSHEETS BUTTON////////
        btn.onclick = async function (e) {
          e.preventDefault();
          setModalisOPen(() => true);
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
                  "http://localhost:5000/confirmWorksheets",
                  {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      searchId: responseData.code[searchId],
                    }),
                  }
                );
              } catch (err) {
                console.log(err);
              }
            }
          }
        };

        ///DISAPPROVE WORKSHEETS BUTTON////////

        btn1.onclick = async function (e) {
          e.preventDefault();
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
                  "http://localhost:5000/disapprovedWorksheets",
                  {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      searchId: responseData.code[searchId],
                    }),
                  }
                );

                //const rply = await response.json();
                //console.log(rply);
              } catch (err) {
                console.log(err);
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
        document.getElementById("dis").appendChild(btn);
        document.getElementById("dis").appendChild(btn1);
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
        <nav className="NavbarItems-approvedWS">
          <NavLink to="/admin">
            <img className="logo " src={logo} alt="Logo" />
          </NavLink>
          <h1 className="navbar-logo-approvedWS">Admin's Portal</h1>
          <ul className="nav-menu-approvedWS ">
            <div className="nav-links-approvedWS">
              <li>
                <NavLink to="/addWord" className="nav-links-approvedWS">
                  Home
                </NavLink>
              </li>
            </div>
          </ul>
          <NavLink to="/#">
            {" "}
            <button className="button-approvedWS">Log out</button>
          </NavLink>
        </nav>

        <div id="dis"></div>
        <ApprovedModal
          modalisOpen={modalisOpen}
          closeModal={() => setModalisOPen(false)}
          successMsg="WORKSHEET APPROVED "
        />
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

export default ApprovedWS;
