import React, { useState } from "react";
import "./maths1.css"; 
import logo from "../../../assets/PPS5.jpeg"; 
import { USERNAME } from "../../../Auth";
import { NavLink, useHistory } from "react-router-dom";
// import bow from "../assets/bow.jpeg";
// import Admin from "./users/admin/Admin";
import useForm from "../../../utils/useForm";
import { TextField } from "@material-ui/core";  

export let Math1value;
 
export let WorksheetType;
const Maths1 = () => {
  // const [chapter, setChapter] = useState( () => "");
  const history = useHistory();  
  const [inputValue, handleChangeForInputs, clear] = useForm();
 
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
    Math1value=inputValue.search;
    console.log(Math1value);
    // console.log(inputValue.search)

    if (inputValue.search === "Recognition of numbers up to 10"){
      history.push("/Contents")}

      if   (inputValue.search ===  "Skip counting" ){
        history.push("/Contents")       
      }
  
      if   (inputValue.search === "Addition" ){
        history.push("/Contents")
      }
      if (inputValue.search ===  "Subtraction" ){
        history.push("/Contents")}
   
  };
    



  const MathHandler1 = (e) => { 
    console.log(e.target.value ); 
    Math1value=e.target.value;
    console.log(Math1value);

    if (e.target.value === "Recognition of numbers up to 10" ){
      history.push("/Contents")}

    if   (e.target.value === "Skip counting" ){
      history.push("/Contents")       
    }
 
 
  }; 
  const MathHandler2 = (e) => { 
    console.log(e.target.value ); 
    Math1value=e.target.value;
    console.log(Math1value);

    if (e.target.value === "Addition" ){
      history.push("/Contents")}

    if   (e.target.value === "Subtraction" ){
      history.push("/Contents")
    }  
  }; 


  return (
    <React.Fragment>
      <nav className="NavbarItems-math1">
      <NavLink to="/Student" >
                  
                  <img className="logo-math1" src={logo} alt="Logo" />
          
          </NavLink>
        <h1 className="navbar-logo-math1">{USERNAME}</h1>

        <ul className="nav-menu-math1 ">
        <div className="nav-links-math1">
                    <li>
                    <NavLink to="/Student" className="nav-links-math1">
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

                <div className="nav-links-math1">
                    <li>
                    <NavLink to="/#" className="nav-links-math1">
                    Progress Report
                    </NavLink>
                    </li>
                </div>

                <div className="nav-links-math1">
                    <li>
                    <NavLink to="/#" className="nav-links-math1">
                    Notes
                    </NavLink>
                    </li>
                </div>

                <div className="nav-links-math1">
                    <li>
                    <NavLink to="/Student/SpellBee" className="nav-links-math1">
                    Spell Bee
                    </NavLink>
                    </li>
                </div>
        </ul>
        <NavLink to="/#" > <button className="button-math1">Log out</button>
        </NavLink> 
        
      </nav>


      <form className="searchBox-math1">
            <TextField
              type="text"
              name="search"
              label="Search Topic"
              // onClick={searchHandler}
              value={inputValue.search || ""}
              onChange={handleChangeForInputs}
            /> 
          </form>

          <button className="searchBtn-math1"  onClick={searchHandler} > Search </button> 
         

      <div className="outerDiv-math1">
        <div className="all-divs-math1">

            <div className="body-div-math1"> 
              <select className="text-math1"  id="Chapter - 1"   
               onChange={MathHandler1 }>  
               
                <option value="MathGrade1Chapter1"> Chapter -1: Numbers </option>  
                <option value="Recognition of numbers up to 10">1.1: Recognition of numbers up to 10 </option>  
                <option value="Skip counting">1.2: Skip counting   </option>
                {/* https://www.youtube.com/watch?v=Bg7mcuaw3o0  */}
              </select> 
            </div>
       

            <div className="body-div-math1"> 
              <select className="text-math1"  id="Chapter - 2"    
               onChange={MathHandler2  } > 
{/* <br> </br>  */}
                <option value="MathGrade2Chapter2"> Chapter - 2: Arithematic Operations</option> 
                <option value="Addition"  >2.1: Addition for class one </option>  
                <option value="Subtraction"  >2.2: Subtraction for class one  </option>   
              </select> 
            </div>

            {/* <div className="body-div-english1"> 
              <select className="text-english1"  id="Chapter - 3"    
               onChange={EnglishHandler1  } > 

                <option value="grade3"> Chapter - 3</option> 
                <option value="English3"  >English</option>  
                <option value="Urdu3">Urdu</option> 
              </select> 
            </div> */}
 

            {/* <div className="body-div-english1"> 
              <select className="text-english1"  id="Chapter - 4"    
               onChange={EnglishHandler1  } > 

                <option value="grade3"> Chapter - 4</option> 
                <option value="English3"  >English</option>  
                <option value="Urdu3">Urdu</option>
                <option value="Mathematics3">Mathematics</option>
                <option value="Science3">Science</option>
                <option value="Islamiyat3">Islamiyat</option>
              </select> 
            </div>

            <div className="body-div-english1"> 
              <select className="text-english1"  id="Chapter - 5"    
               onChange={EnglishHandler1   } > 

                <option value="grade3"> Chapter - 5</option> 
                <option value="English3"  >English</option>  
                <option value="Urdu3">Urdu</option>
                <option value="Mathematics3">Mathematics</option>
                <option value="Science3">Science</option>
                <option value="Islamiyat3">Islamiyat</option>
              </select> 
            </div>

            <div className="body-div-english1"> 
              <select className="text-english1"  id="Chapter - 6"    
               onChange={EnglishHandler1  } > 

                <option value="grade3"> Chapter - 6</option> 
                <option value="English3"  >English</option>  
                <option value="Urdu3">Urdu</option>
                <option value="Mathematics3">Mathematics</option>
                <option value="Science3">Science</option>
                <option value="Islamiyat3">Islamiyat</option>
              </select> 
            </div>

            <div className="body-div-english1"> 
              <select className="text-english1"  id="Chapter - 7"    
               onChange={EnglishHandler1  } > 

                <option value="grade3"> Chapter - 7</option> 
                <option value="English3"  >English</option>  
                <option value="Urdu3">Urdu</option>
                <option value="Mathematics3">Mathematics</option>
                <option value="Science3">Science</option>
                <option value="Islamiyat3">Islamiyat</option>
              </select> 
            </div>

            <div className="body-div-english1"> 
              <select className="text-english1"  id="Chapter - 8"    
               onChange={EnglishHandler1  } > 

                <option value="grade3"> Chapter - 8</option> 
                <option value="English3"  >English</option>  
                <option value="Urdu3">Urdu</option>
                <option value="Mathematics3">Mathematics</option>
                <option value="Science3">Science</option>
                <option value="Islamiyat3">Islamiyat</option>
              </select> 
            </div>

            <div className="body-div-english1"> 
              <select className="text-english1"  id="Chapter - 9"    
               onChange={EnglishHandler1  } > 

                <option value="grade3"> Chapter - 9</option> 
                <option value="English3"  >English</option>  
                <option value="Urdu3">Urdu</option>
                <option value="Mathematics3">Mathematics</option>
                <option value="Science3">Science</option>
                <option value="Islamiyat3">Islamiyat</option>
              </select> 
            </div>

            <div className="body-div-english1"> 
              <select className="text-english1"  id="Chapter - 10"    
               onChange={EnglishHandler1  } > 

                <option value="grade3"> Chapter - 10</option> 
                <option value="English3"  >English</option>  
                <option value="Urdu3">Urdu</option>
                <option value="Mathematics3">Mathematics</option>
                <option value="Science3">Science</option>
                <option value="Islamiyat3">Islamiyat</option>
              </select> 
            </div>

            <div className="body-div-english1"> 
              <select className="text-english1"  id="Chapter - 11"    
               onChange={EnglishHandler1  } > 

                <option value="grade3"> Chapter - 11</option> 
                <option value="English3"  >English</option>  
                <option value="Urdu3">Urdu</option>
                <option value="Mathematics3">Mathematics</option>
                <option value="Science3">Science</option>
                <option value="Islamiyat3">Islamiyat</option>
              </select> 
            </div>

            <div className="body-div-english1"> 
              <select className="text-english1"  id="Chapter - 12"    
               onChange={EnglishHandler1  } > 

                <option value="grade3"> Chapter - 12</option> 
                <option value="English3"  >English</option>  
                <option value="Urdu3">Urdu</option>
                <option value="Mathematics3">Mathematics</option>
                <option value="Science3">Science</option>
                <option value="Islamiyat3">Islamiyat</option>
              </select> 
            </div> */}

        </div>
        {/* <img className="bow-english1" src={bow} alt="bow" /> */}
      </div>
    </React.Fragment>
  );
};

export default  Maths1;
