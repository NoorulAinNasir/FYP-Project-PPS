import React, { useState } from "react";
import "./student.css";
import logo from "../../assets/PPS5.jpeg";
import { USERNAME } from "../../Auth";
import { NavLink, useHistory } from "react-router-dom";
import EnterCode from "../../components/UIElements/EnterCode";
import bow from "../../assets/bow.jpeg";
// import Admin from "./users/admin/Admin";

export let WorksheetType;

const Student = () => {
  // const [chapter, setChapter] = useState( () => "");
  const [showCodeWin, setShowCodeWin] = useState(false);
  const [code, setCode] = useState("im code");
  const history = useHistory();

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
  const onChangeHandler1 = (e) => {
    console.log(e.target.value);

    if (e.target.value === "English1") {
      history.push("/English1");
    }

    if (e.target.value === "Urdu1") {
      history.push("/Urdu1");
    }

    if (e.target.value === "Mathematics1") {
      history.push("/Maths1");
    }

    if (e.target.value === "Science1") {
      history.push("/Science1");
    }

    if (e.target.value === "Islamiyat1") {
      history.push("/Islamiyat1");
    }
  };

  const onChangeHandler2 = (e) => {
    console.log(e.target.value);

    if (e.target.value === "English2") {
      history.push("/English2");
    }

    if (e.target.value === "Urdu2") {
      history.push("/Urdu2");
    }

    if (e.target.value === "Mathematics2") {
      history.push("/Maths2");
    }

    if (e.target.value === "Science2") {
      history.push("/Science2");
    }

    if (e.target.value === "Islamiyat2") {
      history.push("/Islamiyat2");
    }
  };

  const onChangeHandler3 = (e) => {
    console.log(e.target.value);

    if (e.target.value === "English3") {
      history.push("/English3");
    }

    if (e.target.value === "Urdu3") {
      history.push("/Urdu3");
    }

    if (e.target.value === "Mathematics3") {
      history.push("/Maths3");
    }

    if (e.target.value === "Science3") {
      history.push("/Science3");
    }

    if (e.target.value === "Islamiyat3") {
      history.push("/Islamiyat3");
    }
  };

  const onChangeHandler4 = (e) => {
    console.log(e.target.value);

    if (e.target.value === "English4") {
      history.push("/English4");
    }

    if (e.target.value === "Urdu4") {
      history.push("/Urdu4");
    }

    if (e.target.value === "Mathematics4") {
      history.push("/Maths4");
    }

    if (e.target.value === "Science4") {
      history.push("/Science4");
    }

    if (e.target.value === "Islamiyat4") {
      history.push("/Islamiyat4");
    }
  };

  const onChangeHandler5 = (e) => {
    console.log(e.target.value);

    if (e.target.value === "English5") {
      history.push("/English5");
    }

    if (e.target.value === "Urdu5") {
      history.push("/Urdu5");
    }

    if (e.target.value === "Mathematics5") {
      history.push("/Maths5");
    }

    if (e.target.value === "Science5") {
      history.push("/Science5");
    }

    if (e.target.value === "Islamiyat5") {
      history.push("/Islamiyat5");
    }
  };

  return (
    <React.Fragment>
      <nav className="NavbarItems-student">
        <NavLink to="/Student">
          <img className=" logo-stu" src={logo} alt="Logo" />
        </NavLink>
        <h1 className="navbar-logo-student">{USERNAME}</h1>

        <ul className="nav-menu-student ">
          <div className="nav-links-student">
            <li>
              <NavLink to="/Student" className="nav-links-student">
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
          {/* <div className="nav-links-student">
            <li>
              <select id="Worksheets" onChange={worksheetOptHandler}>
                <option className="navworksheets" value="Worksheets">
                  {" "}
                  Worksheets{" "}
                </option>
                <option value="practice worksheet">Practice Worksheets </option>
                <option value="test worksheet">Test Worksheets </option>
              </select>
            
            </li>
          </div> */}

          <div className="nav-links-student">
            <li>
              <NavLink to="/#" className="nav-links-student">
                Progress Report
              </NavLink>
            </li>
          </div>

          <div className="nav-links-student">
            <li>
              <NavLink to="/StudentNotes" className="nav-links-student">
                Notes
              </NavLink>
            </li>
          </div>

          <div className="nav-links-student">
            <li>
              <NavLink to="/Student/SpellBee" className="nav-links-student">
                Spell Bee
              </NavLink>
            </li>
          </div>
        </ul>

        <NavLink to="/#">
          {" "}
          <button className="button-student">Log out</button>
        </NavLink>
      </nav>

      <div className="outerDiv_Student">
        <div className="all-divs-student">
          <div className="body-div-student">
            <select
              className="text-student"
              id="Grade - 1"
              onChange={onChangeHandler1}
            >
              <option value="grade1"> Grade - 1</option>
              <option value="English1">English</option>
              <option value="Urdu1">Urdu</option>
              <option value="Mathematics1">Mathematics</option>
              <option value="Science1">Science</option>
              <option value="Islamiyat1">Islamiyat</option>
            </select>
          </div>

          <div className="body-div-student">
            <select
              className="text-student"
              id="Grade - 2"
              onChange={onChangeHandler2}
            >
              <option value="grade2"> Grade - 2</option>
              <option value="English2">English</option>
              <option value="Urdu2">Urdu</option>
              <option value="Mathematics2">Mathematics</option>
              <option value="Science2">Science</option>
              <option value="Islamiyat2">Islamiyat</option>
            </select>
          </div>

          <div className="body-div-student">
            <select
              className="text-student"
              id="Grade - 3"
              onChange={onChangeHandler3}
            >
              <option value="grade3"> Grade - 3</option>
              <option value="English3">English</option>
              <option value="Urdu3">Urdu</option>
              <option value="Mathematics3">Mathematics</option>
              <option value="Science3">Science</option>
              <option value="Islamiyat3">Islamiyat</option>
            </select>
          </div>

          <div className="body-div-student">
            <select
              className="text-student"
              id="Grade - 4"
              onChange={onChangeHandler4}
            >
              <option value="grade4"> Grade - 4</option>
              <option value="English4">English</option>
              <option value="Urdu4">Urdu</option>
              <option value="Mathematics4">Mathematics</option>
              <option value="Science4">Science</option>
              <option value="Islamiyat4">Islamiyat</option>
            </select>
          </div>

          <div className="body-div-student">
            <select
              className="text-student"
              id="Grade - 5"
              onChange={onChangeHandler5}
            >
              <option value="grade5"> Grade - 5</option>
              <option value="English5">English</option>
              <option value="Urdu5">Urdu</option>
              <option value="Mathematics5">Mathematics</option>
              <option value="Science5">Science</option>
              <option value="Islamiyat5">Islamiyat</option>
            </select>
          </div>

          {/* <div className="body-div-student">
            <p className="text-student">Grade-5</p>
            <div className="button-div">
              <button className="button-student">Go</button>
            </div>
          </div> */}
        </div>
        <img className="bow" src={bow} alt="bow" />
      </div>

      <EnterCode
        openModal={showCodeWin}
        closeModal={() => setShowCodeWin(false)}
        code={code}
      />
    </React.Fragment>
  );
};

export default Student;
