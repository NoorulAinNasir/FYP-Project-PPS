import React, { useState } from "react";
import "./english4.css"; 
import logo from "../../../assets/PPS5.jpeg"; 
import { USERNAME } from "../../../Auth";
import { NavLink, useHistory } from "react-router-dom";
// import bow from "../assets/bow.jpeg";
// import Admin from "./users/admin/Admin";
export let Eng4Valueee;

export let WorksheetType;
const English4 = () => {
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
    Eng4Valueee=e.target.value;
    console.log(Eng4Valueee);

    if (e.target.value === "English4Chapter1Topic1" ){
      history.push("/Contents")}

    if   (e.target.value === "English4Chapter1Topic2" ){
      history.push("/Contents")       
    }

    if   (e.target.value === "English4Chapter1Topic3" ){
      history.push("/Contents")
    } 

  }; 
  const EnglishHandler2 = (e) => { 
    console.log(e.target.value ); 
    Eng4Valueee=e.target.value;
    console.log(Eng4Valueee);

    if (e.target.value === "English4Chapter2Topic1" ){
      history.push("/Contents")}

    if   (e.target.value === "English4Chapter2Topic2" ){
      history.push("/Contents")
    }  
  }; 


  return (
    <React.Fragment>
      <nav className="NavbarItems-english4">
      <NavLink to="/Student" >
                  
                  <img className="logo-english4" src={logo} alt="Logo" />
          
          </NavLink>
        <h1 className="navbar-logo-english4">{USERNAME}</h1>

        <ul className="nav-menu-english4 ">
        <div className="nav-links-english4">
                    <li>
                    <NavLink to="/Student" className="nav-links-english4">
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

                <div className="nav-links-english4">
                    <li>
                    <NavLink to="/#" className="nav-links-english4">
                    Progress Report
                    </NavLink>
                    </li>
                </div>

                <div className="nav-links-english4">
                    <li>
                    <NavLink to="/#" className="nav-links-english4">
                    Notes
                    </NavLink>
                    </li>
                </div>

                <div className="nav-links-english4">
                    <li>
                    <NavLink to="/Student/SpellBee" className="nav-links-english4">
                    Spell Bee
                    </NavLink>
                    </li>
                </div>
        </ul>
        <NavLink to="/#" > <button className="button-english4">Log out</button>
        </NavLink> 
        
      </nav>

      <div className="outerDiv-english4">
        <div className="all-divs-english4">

            <div className="body-div-english4"> 
              <select className="text-english4"  id="Chapter - 1"   
               onChange={EnglishHandler1 }>  
               
                <option value="EnglishGrade3Chapter1"> Chapter -1:  Vocabulary      </option>  
                <option value="English4Chapter1Topic1">1.1: Antonyms(Opposite Meanings)  </option>  
                <option value="English4Chapter1Topic2">1.2: Synonyms(Similar Meanings)</option> 
                 
              </select> 
            </div>


            <div className="body-div-english4"> 
              <select className="text-english4"  id="Chapter - 2"   
               onChange={EnglishHandler2 }>  
               
                <option value="EnglishGrade4Chapter1"> Chapter -2:  Grammar   </option>  
                <option value="English4Chapter2Topic1">1.1:  Parts of Speech   (Introduction)       </option>  
                <option value="English4Chapter2Topic2">1.2:  Types of Nouns </option> 
                 
              </select> 
            </div>
 

        </div>
        {/* <img className="bow-english1" src={bow} alt="bow" /> */}
      </div>
    </React.Fragment>
  );
};

export default  English4;
