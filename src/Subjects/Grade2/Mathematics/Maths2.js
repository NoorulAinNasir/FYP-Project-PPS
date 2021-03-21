import React, { useState } from "react";
import "./maths2.css"; 
import logo from "../../../assets/PPS5.jpeg"; 
import { USERNAME } from "../../../Auth";
import useForm from "../../../utils/useForm"; 
import { NavLink, useHistory } from "react-router-dom";
// import bow from "../assets/bow.jpeg";
// import Admin from "./users/admin/Admin";
import { TextField } from "@material-ui/core";
export let Math2valuee;
 
export let WorksheetType;
const Maths2 = () => {
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
      Math2valuee=inputValue.search;
      console.log(Math2valuee);
      // console.log(inputValue.search)
  
      if (inputValue.search === "Skip counting by 5s, 10s, 100s" ){
        history.push("/Contents")}
  
        if   (inputValue.search ===  "Ordinal counting" ){
          history.push("/Contents")       
        }
    
        if   (inputValue.search === "Multiplication" ){
          history.push("/Contents")
        }
        if (inputValue.search ===  "Division" ){
          history.push("/Contents")}
     
    };
      

 
  const MathHandler1 = (e) => { 
    console.log(e.target.value ); 
    Math2valuee=e.target.value;
    console.log(Math2valuee);

    if (e.target.value === "Skip counting by 5s, 10s, 100s" ){
      history.push("/Contents")}

    if   (e.target.value === "Ordinal counting" ){
      history.push("/Contents")       
    }
 
 
  }; 
  const MathHandler2 = (e) => { 
    console.log(e.target.value ); 
    Math2valuee=e.target.value;
    console.log(Math2valuee);

    if (e.target.value === "Multiplication" ){
      history.push("/Contents")}

    if   (e.target.value === "Division" ){
      history.push("/Contents")
    }  
  }; 


  return (
    <React.Fragment>
      <nav className="NavbarItems-math2">
      <NavLink to="/Student" >
                  
                  <img className="logo-math2" src={logo} alt="Logo" />
          
          </NavLink>
        <h1 className="navbar-logo-math2">{USERNAME}</h1>

        <ul className="nav-menu-math2 ">
        <div className="nav-links-math2">
                    <li>
                    <NavLink to="/Student" className="nav-links-math2">
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

                <div className="nav-links-math2">
                    <li>
                    <NavLink to="/#" className="nav-links-math2">
                    Progress Report
                    </NavLink>
                    </li>
                </div>

                <div className="nav-links-math2">
                    <li>
                    <NavLink to="/#" className="nav-links-math2">
                    Notes
                    </NavLink>
                    </li>
                </div>

                <div className="nav-links-math2">
                    <li>
                    <NavLink to="/Student/SpellBee" className="nav-links-math2">
                    Spell Bee
                    </NavLink>
                    </li>
                </div>
        </ul>
        <NavLink to="/#" > <button className="button-math2">Log out</button>
        </NavLink> 
        
      </nav>

      <form className="searchBox-math2">
            <TextField
              type="text"
              name="search"
              label="Search Topic"
              // onClick={searchHandler}
              value={inputValue.search || ""}
              onChange={handleChangeForInputs}
            /> 
          </form>

          <button className="searchBtn-math2"  onClick={searchHandler} > Search </button> 
          
      <div className="outerDiv-math2">
        <div className="all-divs-math2">

            <div className="body-div-math2"> 
              <select className="text-math2"  id="Chapter - 1"   
               onChange={MathHandler1 }>  
               
                <option value="MathGrade2Chapter1"> Chapter -1:  Numbers  
  </option>  
                <option value="Skip counting by 5s, 10s, 100s">1.1:  Skip counting by 5s, 10s, 100s   </option>  
                <option value="Ordinal counting">1.2:  Ordinal counting   </option>
                {/* https://www.youtube.com/watch?v=Bg7mcuaw3o0  */}
              </select> 
            </div>
       

            <div className="body-div-math2"> 
              <select className="text-math2"  id="Chapter - 2"    
               onChange={MathHandler2  } > 
{/* <br> </br>  */}
                <option value="MathGrade2Chapter2"> Chapter - 2:  Arithmetic Operations
 </option> 
                <option value="Multiplication"  >2.1: Multiplication   </option>  
                <option value="Division"  >2.2:Division</option>   
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

export default  Maths2;
