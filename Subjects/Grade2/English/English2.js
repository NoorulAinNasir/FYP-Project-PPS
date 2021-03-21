import React, { useState } from "react";
import "./english2.css"; 
import logo from "../../../assets/PPS5.jpeg"; 
import { USERNAME } from "../../../Auth";
import { NavLink, useHistory } from "react-router-dom";
// import bow from "../assets/bow.jpeg";
// import Admin from "./users/admin/Admin";
export let Eng2Value;

export let WorksheetType;
const English2 = () => {
  // const [chapter, setChapter] = useState( () => "");
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

  
   
  const EnglishHandler1 = (e) => { 
    console.log(e.target.value ); 
    Eng2Value=e.target.value;
    console.log(Eng2Value);

    if (e.target.value === "English2Chapter1Topic1" ){
      history.push("/Contents")}

    if   (e.target.value === "English2Chapter1Topic2" ){
      history.push("/Contents")       
    }

    if   (e.target.value === "English2Chapter1Topic3" ){
      history.push("/Contents")
    } 

  }; 
  const EnglishHandler2 = (e) => { 
    console.log(e.target.value ); 
    Eng2Value=e.target.value;
    console.log(Eng2Value);

    if (e.target.value === "English2Chapter2Topic1" ){
      history.push("/Contents")}

    if   (e.target.value === "English2Chapter2Topic2" ){
      history.push("/Contents")
    }  
  }; 


  return (
    <React.Fragment>
      <nav className="NavbarItems-english2">
      <NavLink to="/Student" >
                  
                  <img className="logo-english2" src={logo} alt="Logo" />
          
          </NavLink>
        <h1 className="navbar-logo-english2">{USERNAME}</h1>

        <ul className="nav-menu-english2 ">
        <div className="nav-links-english2">
                    <li>
                    <NavLink to="/Student" className="nav-links-english2">
                    Home
                    </NavLink>
                    </li>
                </div>
                
                <div className="nav-links-student">
            <li>
              <select
                className="navworksheets"
                id="Worksheets"
                onChange={worksheetOptHandler}
              >
                <option
                  value="Worksheets"
                  style={{
                    color: "white",
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
                    color: "white",
                    backgroundColor: "#e63c44",
                  }}
                  value="practice worksheet"
                >
                  Practice Worksheets{" "}
                </option>
                <option
                  style={{
                    color: "white",
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

                <div className="nav-links-english2">
                    <li>
                    <NavLink to="/#" className="nav-links-english2">
                    Progress Report
                    </NavLink>
                    </li>
                </div>

                <div className="nav-links-english2">
                    <li>
                    <NavLink to="/#" className="nav-links-english2">
                    Notes
                    </NavLink>
                    </li>
                </div>

                <div className="nav-links-english2">
                    <li>
                    <NavLink to="/Student/SpellBee" className="nav-links-english2">
                    Spell Bee
                    </NavLink>
                    </li>
                </div>
        </ul>
        <NavLink to="/#" > <button className="button-english2">Log out</button>
        </NavLink> 
        
      </nav>

      <div className="outerDiv-english2">
        <div className="all-divs-english2">

            <div className="body-div-english2"> 
              <select className="text-english2"  id="Chapter - 1"   
               onChange={EnglishHandler1 }>  
               
                <option value="EnglishGrade2Chapter1"> Chapter -1: Words and Sounds  </option>  
                <option value="English2Chapter1Topic1">1.1:    Three Letter Rhyming Words   </option>  
                <option value="English2Chapter1Topic2">1.2: Unscramble Words  </option> 
                 
              </select> 
            </div>
       

            <div className="body-div-english2"> 
              <select className="text-english2"  id="Chapter - 2"    
               onChange={EnglishHandler2  } > 
{/* <br> </br>  */}
                <option value="EnglishGrade2Chapter2"> Chapter - 2: Ethics  </option> 
                <option value="English2Chapter2Topic1"> 2.1: Greetings (Good Mornings etc) </option>  
                <option value="English2Chapter2Topic2"> 2.2: Types of Weather </option>   
              </select> 
            </div> 

        </div>
        {/* <img className="bow-english1" src={bow} alt="bow" /> */}
      </div>
    </React.Fragment>
  );
};

export default  English2;
