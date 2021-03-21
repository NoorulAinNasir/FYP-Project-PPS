import React, { useState, useEffect  } from "react";
// ***************************************** 
import useForm from "../../../utils/useForm"; 
 // ***************************************** 
import "./english1.css"; 
import logo from "../../../assets/PPS5.jpeg"; 
import { USERNAME } from "../../../Auth";
// ***************************************** 
import { TextField } from "@material-ui/core";
// ***************************************** 
import { NavLink, useHistory } from "react-router-dom";

// import bow from "../assets/bow.jpeg";
// import Admin from "./users/admin/Admin"; 

export let Eng1val;

export let WorksheetType;
const English1 = () => {
  // const [chapter, setChapter] = useState( () => "");
  const history = useHistory(); 
  // ***************************************** 
  const [inputValue, handleChangeForInputs, clear] = useForm();
// ***************************************** 

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






  const searchHandler = (e) => { 
    console.log("i am called"); 
    Eng1val=inputValue.search;
    console.log(Eng1val);
    // console.log(inputValue.search)

    if (inputValue.search === "Greetings (Good Morning/Afternoon/Evening)" ||"Greetings  " ){
      history.push("/Contents")}

      if   (inputValue.search ===  "Greeting Teachers and Elders" ){
        history.push("/Contents")       
      }
  
      if   (inputValue.search === "Alphabet (Aa to Zz capital and small)" || "Alphabet" ){
        history.push("/Contents")
      }
      if (inputValue.search ===  "Small and Capital Letters (A to Z)" ){
        history.push("/Contents")}
  
      if   (inputValue.search ===   "Sounds of Letters A to Z"){
        history.push("/Contents")
      }  
  };
    


  const EnglishHandler1 = (e) => { 
    console.log(e.target.value ); 
    Eng1val=e.target.value;
    console.log(Eng1val);

    if (e.target.value ===  "Greetings (Good Morning/Afternoon/Evening)" ){
      history.push("/Contents")}

    if   (e.target.value ===  "Greeting Teachers and Elders" ){
      history.push("/Contents")       
    }

    if   (e.target.value === "Alphabet (Aa to Zz capital and small)" ){
      history.push("/Contents")
    }

    // if   (e.target.value === "English1Topic4" ){
    //   history.push("/English1Topic1")
    // }

    // if   (e.target.value === "English1Topic5" ){
    //   history.push("/English1Topic1")
    // }
  };  

  

  const EnglishHandler2 = (e) => { 
    console.log(e.target.value ); 
    Eng1val=e.target.value;
    console.log(Eng1val);

    if (e.target.value ===  "Small and Capital Letters (A to Z)" ){
      history.push("/Contents")}

    if   (e.target.value ===   "Sounds of Letters A to Z"){
      history.push("/Contents")
    }  
  }; 





  return (
    <React.Fragment>
      <nav className="NavbarItems-english1">
      <NavLink to="/Student" >
                  
                  <img className="logo-english1" src={logo} alt="Logo" />
          
          </NavLink>
        <h1 className="navbar-logo-english1">{USERNAME}</h1>

        <ul className="nav-menu-english1 ">
        <div className="nav-links-english1">
                    <li>
                    <NavLink to="/Student" className="nav-links-english1">
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

                <div className="nav-links-english1">
                    <li>
                    <NavLink to="/#" className="nav-links-english1">
                    Progress Report
                    </NavLink>
                    </li>
                </div>

                <div className="nav-links-english1">
                    <li>
                    <NavLink to="/#" className="nav-links-english1">
                    Notes
                    </NavLink>
                    </li>
                </div>

                <div className="nav-links-english1">
                    <li>
                    <NavLink to="/Student/SpellBee" className="nav-links-english1">
                    Spell Bee
                    </NavLink>
                    </li>
                </div>
        </ul>
        <NavLink to="/#" > <button className="button-english1">Log out</button>
        </NavLink> 
        
      </nav> 
 
       


      {/* // *****************************************  */}
      <form className="searchBox-english1">
            <TextField
              type="text"
              name="search"
              label="Search Topic"
              // onClick={searchHandler}
              value={inputValue.search || ""}
              onChange={handleChangeForInputs}
            /> 
          </form>

          <button className="searchBtn-english1"  onClick={searchHandler} > Search </button> 
          {/* // *****************************************  */}

      <div className="outerDiv-english1">
        <div className="all-divs-english1">

            <div className="body-div-english1"> 
              <select className="text-english1"  id="Chapter - 1"   
               onChange={EnglishHandler1 }>  
               
                <option value="EnglishGrade1Chapter1"> Chapter - 1: Ice Breaking/ Greetings/ Alphabets  </option>  
                <option value="Greetings (Good Morning/Afternoon/Evening)">1.1: Greetings (Good Morning/Afternoon/Evening) </option>  
                <option value="Greeting Teachers and Elders">1.2: Greeting Teachers and Elders</option>
                <option value="Alphabet (Aa to Zz capital and small)">1.3: Alphabet (Aa to Zz capital and small) </option>
                {/* <option value="English1Topic4">1.4: Sing the ABC Song (A to Z) </option>
                <option value="English1Topic5">1.5: Listen and Repeat (Names of Objects)</option> */}
              </select> 
            </div>
       




            <div className="body-div-english1"> 
              <select className="text-english1"  id="Chapter - 2"    
               onChange={EnglishHandler2  } > 
{/* <br> </br>  */}
                <option value="grade2"> Chapter - 2: The Alphabet Picture Gallery (A to Z)</option> 
                <option value="Small and Capital Letters (A to Z)"  >2.1: Small and Capital Letters (A to Z) </option>  
                <option value="Sounds of Letters A to Z"  >2.2: Sounds of Letters A to Z</option>   
              </select> 
            </div>
 

        </div>
        {/* <img className="bow-english1" src={bow} alt="bow" /> */}
      </div>
    </React.Fragment>
  );
};

export default  English1;
