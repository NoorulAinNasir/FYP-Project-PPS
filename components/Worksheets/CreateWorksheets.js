// import React from "react";
// import { useLocalStorage } from "../../LocalStorage/Local";
// import { NavLink } from "react-router-dom";
// import FillInTheBlanks from "./FillInTheBlanks";
// import logo from "../../assets/PPS5.jpeg";
// import { USERNAME } from "../../Auth";
// import "../../users/student/student.css";
// import Mcqs from "./Mcqs";

// const CreateWorksheets = () => {
//   const [userName, setuserName] = useLocalStorage("userName", "null");
//   console.log(userName);
//   return (
//     <>
//       <nav className="NavbarItems-student">
//         {/* <NavLink>
//           <img className="logo-stu" src={logo} alt="LOGO" />
//         </NavLink> */}
//         <NavLink to="/admin">
//           <img className="logo-admin" src={logo} alt="Logo" />
//         </NavLink>
//         <h1 className="navbar-logo-teacher">{USERNAME}</h1>
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
//               <NavLink to="/MyWorksheets" className="nav-links-student">
//                 My-Worksheets
//               </NavLink>
//             </li>
//           </div>
//         </ul>
//         <NavLink to="/#">
//           {" "}
//           <button className="button-teacher">Log out</button>
//         </NavLink>
//       </nav>
//       <FillInTheBlanks />
//       <Mcqs />
//     </>
//   );
// };

// export default CreateWorksheets;

import React from "react";
import { useLocalStorage } from "../../LocalStorage/Local";
import { NavLink } from "react-router-dom";
import FillInTheBlanks from "./FillInTheBlanks";
import logo from "../../assets/PPS5.jpeg";
import { USERNAME } from "../../Auth";
import "../../users/student/student.css";
import Mcqs from "./Mcqs";
import "./CSS/createWorksheets.css";

const CreateWorksheets = () => {
  const [userName, setuserName] = useLocalStorage("userName", "null");
  console.log(userName);
  return (
    <>
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
              <NavLink to="/MyWorksheets" className="nav-links-student">
                My-Worksheets
              </NavLink>
            </li>
          </div>
        </ul>
        <NavLink to="/#">
          {" "}
          <button className="button-teacher">Log out</button>
        </NavLink>
      </nav>
      <div className="templates">
        <p>Templates..!</p>
      </div>
      <FillInTheBlanks />
      <Mcqs />
    </>
  );
};

export default CreateWorksheets;
