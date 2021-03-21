import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import { NavLink } from "react-router-dom";
import DisapprovedModal from "../Worksheets/DisapprovedModal";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
import { useLocalStorage } from "../../LocalStorage/Local";
import "./table.css";
import logo from "../../assets/PPS5.jpeg";
import { USERNAME } from "../../Auth";

const BasicTable = () => {
  const [email, setuserEmail] = useLocalStorage("email", "null");
  const [tt, settt] = useState([]);
  const [showText, setShowText] = useState(() => false);
  const [errModal, seterrModal] = useState(() => false);
  useEffect(() => {
    worksheetHistoryHandler();
  }, []);

  const deleteHandler = async (topic) => {
    console.log(topic);
    seterrModal(() => true);
    try {
      const response = await fetch("http://localhost:5000/deleteWorksheets", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchId: topic,
        }),
      });

      if (response.deleted === "ALL DELETED") {
        return setShowText(() => true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const worksheetHistoryHandler = async () => {
    let responseData;
    let sent = "appear";
    try {
      const response = await fetch(
        `http://localhost:5000/gettingHTML?show=${sent}&&creator=${email}`
      );
      responseData = await response.json();
      if (responseData.status === "404") {
        // console.log("    not avaiable    ", responseData);
        return setShowText(() => true);
      }
      if (responseData.worksheets && responseData.status !== "404") {
        //console.log("   avaiable    ", responseData);
        setShowText(() => false);
        return settt(responseData.worksheets);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const renderTable = () => {
    return tt.map((hh) => {
      return (
        <>
          <tr key={uuid()}>
            <td>{hh.title}</td>
            <td>
              {hh.approved.toString() === "false" ? "disapproved" : "approved"}
            </td>
            <td>
              <DeleteForeverIcon
                onClick={() => deleteHandler(hh.code)}
                id="deleteWSBtn"
              />
            </td>
          </tr>
        </>
      );
    });
  };

  return (
    <>
      <nav className="NavbarItems-student">
        <NavLink to="/teacher">
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
      {!showText && (
        <div id="tableID">
          <table id="users" key={uuid()}>
            <thead>
              <tr>
                <th>TITLE</th>
                <th>STATUS</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
          </table>
          <DisapprovedModal
            modalisOpen={errModal}
            // error={error}
            closeModal={() => seterrModal(false)}
          />
        </div>
      )}
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
            NO HISTORY AVAILABLE
          </h1>
          <SentimentVeryDissatisfiedOutlinedIcon
            style={{ fontSize: "80px", marginTop: "2rem", marginLeft: "19rem" }}
          />
        </div>
      )}
    </>
  );
};

export default BasicTable;

// import React, { useState, useEffect } from "react";
// import uuid from "react-uuid";
// import { NavLink } from "react-router-dom";
// import DisapprovedModal from "../Worksheets/DisapprovedModal";
// import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
// import { useLocalStorage } from "../../LocalStorage/Local";
// import "./table.css";

// const BasicTable = () => {
//   const [email, setuserEmail] = useLocalStorage("email", "null");
//   const [tt, settt] = useState([]);
//   const [showText, setShowText] = useState(() => false);
//   const [errModal, seterrModal] = useState(() => false);
//   useEffect(() => {
//     worksheetHistoryHandler();
//   }, []);

//   const deleteHandler = async (topic) => {
//     console.log(topic);
//     seterrModal(() => true);
//     try {
//       const response = await fetch("http://localhost:5000/deleteWorksheets", {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           searchId: topic,
//         }),
//       });

//       if (response.deleted === "ALL DELETED") {
//         return setShowText(() => true);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   const worksheetHistoryHandler = async () => {
//     let responseData;
//     let sent = "appear";
//     try {
//       const response = await fetch(
//         `http://localhost:5000/gettingHTML?show=${sent}&&creator=${email}`
//       );
//       responseData = await response.json();
//       if (responseData.status === "404") {
//         // console.log("    not avaiable    ", responseData);
//         return setShowText(() => true);
//       }
//       if (responseData.worksheets && responseData.status !== "404") {
//         //console.log("   avaiable    ", responseData);
//         setShowText(() => false);
//         return settt(responseData.worksheets);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const renderTable = () => {
//     return tt.map((hh) => {
//       return (
//         <>
//           <tr key={uuid()}>
//             <td>{hh.title}</td>
//             <td>
//               {hh.approved.toString() === "false" ? "disapproved" : "approved"}
//             </td>
//             <td>
//               <DeleteForeverIcon
//                 onClick={() => deleteHandler(hh.code)}
//                 id="deleteWSBtn"
//               />
//             </td>
//           </tr>
//         </>
//       );
//     });
//   };

//   return (
//     <>
//       <nav className="NavbarItems-student">
//         {/* <NavLink to="/admin">
//           <img className="logo-admin" src={logo} alt="Logo" />
//         </NavLink>
//         <h1 className="navbar-logo-teacher">{USERNAME}</h1> */}
//         <ul className="nav-menu-student ">
//           <div className="nav-links-student">
//             <li>
//               <NavLink to="/Teacher" className="nav-links-student">
//                 Home
//               </NavLink>
//             </li>
//           </div>
//           <div className="nav-links-student">
//             <li>
//               <NavLink to="/WorksheetsHistory" className="nav-links-student">
//                 History
//               </NavLink>
//             </li>
//           </div>
//         </ul>
//         <NavLink to="/#">
//           {" "}
//           <button className="button-teacher">Log out</button>
//         </NavLink>
//       </nav>
//       {!showText && (
//         <div id="tableID">
//           <table id="users" key={uuid()}>
//             <thead>
//               <tr>
//                 <th>TITLE</th>
//                 <th>STATUS</th>
//                 <th>DELETE</th>
//               </tr>
//             </thead>
//             <tbody>{renderTable()}</tbody>
//           </table>
//           <DisapprovedModal
//             modalisOpen={errModal}
//             // error={error}
//             closeModal={() => seterrModal(false)}
//           />
//         </div>
//       )}
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
//             NO HISTORY AVAILABLE
//           </h1>
//           <SentimentVeryDissatisfiedOutlinedIcon
//             style={{ fontSize: "80px", marginTop: "2rem", marginLeft: "19rem" }}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default BasicTable;
