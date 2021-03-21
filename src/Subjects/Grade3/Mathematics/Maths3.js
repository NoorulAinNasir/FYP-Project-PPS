import React, { useState } from "react";
import "./maths3.css"; 
import logo from "../../../assets/PPS5.jpeg"; 
import { USERNAME } from "../../../Auth";
import { NavLink, useHistory } from "react-router-dom";
// import bow from "../assets/bow.jpeg";
// import Admin from "./users/admin/Admin";
export let Math3valueee;
 
export let WorksheetType;
const Maths3 = () => {
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


  const MathHandler1 = (e) => { 
    console.log(e.target.value ); 
    Math3valueee=e.target.value;
    console.log(Math3valueee);

    if (e.target.value === "Math3Chapter1Topic1" ){
      history.push("/Contents")}

    if   (e.target.value === "Math3Chapter1Topic2" ){
      history.push("/Contents")       
    }

    if   (e.target.value === "Math3Chapter1Topic3" ){
      history.push("/Contents")
    }
 
  }; 
  const MathHandler2 = (e) => { 
    console.log(e.target.value ); 
    Math3valueee=e.target.value;
    console.log(Math3valueee);

    if (e.target.value === "Math3Chapter2Topic1" ){
      history.push("/Contents")}

    if   (e.target.value === "Math3Chapter2Topic2" ){
      history.push("/Contents")
    }  
  }; 


  return (
    <React.Fragment>
      <nav className="NavbarItems-math3">
      <NavLink to="/Student" >
                  
                  <img className="logo-math3" src={logo} alt="Logo" />
          
          </NavLink>
        <h1 className="navbar-logo-math3">{USERNAME}</h1>

        <ul className="nav-menu-math3 ">
        <div className="nav-links-math3">
                    <li>
                    <NavLink to="/Student" className="nav-links-math3">
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

                <div className="nav-links-math3">
                    <li>
                    <NavLink to="/#" className="nav-links-math3">
                    Progress Report
                    </NavLink>
                    </li>
                </div>

                <div className="nav-links-math3">
                    <li>
                    <NavLink to="/#" className="nav-links-math3">
                    Notes
                    </NavLink>
                    </li>
                </div>

                <div className="nav-links-math3">
                    <li>
                    <NavLink to="/Student/SpellBee" className="nav-links-math3">
                    Spell Bee
                    </NavLink>
                    </li>
                </div>
        </ul>
        <NavLink to="/#" > <button className="button-math3">Log out</button>
        </NavLink> 
        
      </nav>

      <div className="outerDiv-math3">
        <div className="all-divs-math3">

            <div className="body-div-math3"> 
              <select className="text-math3"  id="Chapter - 1"   
               onChange={MathHandler1 }>  
               
                <option value="MathGrade3Chapter1"> Chapter -1: Numbers </option>  
                <option value="Math3Chapter1Topic1">1.1: Place value ( 6-digit number) </option>  
                <option value="Math3Chapter1Topic2">1.2:  Roman numerals  </option>
                {/* https://www.youtube.com/watch?v=Bg7mcuaw3o0  */}
              </select> 
            </div>
       

            <div className="body-div-math3"> 
              <select className="text-math3"  id="Chapter - 2"    
               onChange={MathHandler2  } > 
{/* <br> </br>  */}
                <option value="MathGrade3Chapter2"> Chapter - 2: Arithmetic Operations  </option> 
                <option value="Math3Chapter2Topic1"  >2.1: Addition    </option>  
                <option value="Math3Chapter2Topic2"  >2.2: Subtraction    </option>   
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

export default  Maths3;
