import React, { useState } from "react";
import "./maths4.css"; 
import logo from "../../../assets/PPS5.jpeg"; 
import { USERNAME } from "../../../Auth";
import { NavLink, useHistory } from "react-router-dom";
import useForm from "../../../utils/useForm"; 
import { TextField } from "@material-ui/core";
// import bow from "../assets/bow.jpeg";
// import Admin from "./users/admin/Admin";
export let Math4valueeee;
 
export let WorksheetType;
const Maths4 = () => {
  // const [chapter, setChapter] = useState( () => "");
  const history = useHistory();
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
      Math4valueeee=inputValue.search;
      console.log(Math4valueeee);
      // console.log(inputValue.search)
  
      if (inputValue.search === "Read Numbers on Number line"){
        history.push("/Contents")}
  
        if   (inputValue.search ===  "Skip counting   on number line" ){
          history.push("/Contents")       
        }
    
        if   (inputValue.search === "Multiplication using place value" ){
          history.push("/Contents")
        }
        if (inputValue.search ===  "Division using place value" ){
          history.push("/Contents")}
     
    };
  const MathHandler1 = (e) => { 
    console.log(e.target.value ); 
    Math4valueeee=e.target.value;
    console.log(Math4valueeee);

    if (e.target.value === "Read Numbers on Number line" ){
      history.push("/Contents")}

    if   (e.target.value === "Skip counting   on number line" ){
      history.push("/Contents")       
    }
 
 
  }; 
  const MathHandler2 = (e) => { 
    console.log(e.target.value ); 
    Math4valueeee=e.target.value;
    console.log(Math4valueeee);

    if (e.target.value === "Multiplication using place value" ){
      history.push("/Contents")}

    if   (e.target.value === "Division using place value" ){
      history.push("/Contents")
    }  
  }; 


  return (
    <React.Fragment>
      <nav className="NavbarItems-math4">
      <NavLink to="/Student" >
                  
                  <img className="logo-math4" src={logo} alt="Logo" />
          
          </NavLink>
        <h1 className="navbar-logo-math4">{USERNAME}</h1>

        <ul className="nav-menu-math4 ">
        <div className="nav-links-math4">
                    <li>
                    <NavLink to="/Student" className="nav-links-math4">
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
                <div className="nav-links-math4">
                    <li>
                    <NavLink to="/#" className="nav-links-math4">
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

                <div className="nav-links-math4">
                    <li>
                    <NavLink to="/Student/SpellBee" className="nav-links-math4">
                    Spell Bee
                    </NavLink>
                    </li>
                </div>
        </ul>
        <NavLink to="/#" > <button className="button-math4">Log out</button>
        </NavLink> 
        
      </nav>
      <form className="searchBox-math4">
            <TextField
              type="text"
              name="search"
              label="Search Topic"
              // onClick={searchHandler}
              value={inputValue.search || ""}
              onChange={handleChangeForInputs}
            /> 
          </form>

          <button className="searchBtn-math4"  onClick={searchHandler} > Search </button> 
          
      <div className="outerDiv-math4">
        <div className="all-divs-math4">

            <div className="body-div-math4"> 
              <select className="text-math4"  id="Chapter - 1"   
               onChange={MathHandler1 }>  
               
                <option value="MathGrade4Chapter1"> Chapter -1: Numbers  </option>  
                <option value="Read Numbers on Number line">1.1:   Read Numbers on Number line </option>  
                <option value="Skip counting   on number line">1.2: Skip counting   on number line    </option>
                {/* https://www.youtube.com/watch?v=Bg7mcuaw3o0  */}
              </select> 
            </div>
       

            <div className="body-div-math4"> 
              <select className="text-math4"  id="Chapter - 2"    
               onChange={MathHandler2  } > 
{/* <br> </br>  */}
                <option value="MathGrade4Chapter2"> Chapter - 2:  Arithmetic Operations  </option> 
                <option value="Multiplication using place value"  >2.1:  Multiplication using place value   </option>  
                <option value="Division using place value"  >2.2:  Division using place value    </option>   
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

export default  Maths4;
