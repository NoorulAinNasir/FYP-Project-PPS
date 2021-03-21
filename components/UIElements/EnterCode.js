import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useForm from "../../utils/useForm";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import "../../scoreModal.css";

Modal.setAppElement("#root");
export let WorksheetCode;

const EnterCode = (props) => {
  const [inputValue, handleChangeForInputs, clear] = useForm();
  const [modalisOpen, setModalisOPen] = useState(false);
  const history = useHistory();
  const [codeVal, setCodeVal] = useState("");

  //   const CodeValueHandler = () => {
  //     setCodeVal(() => props.code);
  //   };

  const CodeReqHandler = () => {
    WorksheetCode = inputValue.codeInp;
    history.push("./ShowWorksheets");
  };

  console.log(props.code);

  console.log(props.openModal);
  return (
    <div>
      {" "}
      <Modal
        isOpen={props.openModal}
        onRequestClose={() => setModalisOPen(props.closeModal)}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            background: "0 0 15 rgba(0,0,0,0.2)",
          },

          content: {
            color: "#rgb(11, 11, 12)",
            width: "350px",
            height: "330px",
            marginLeft: "30rem",
            // backgroundImage: "url(" + img + ")",
            // backgroundImage: url("./assets/b12.jpg")  ,
            marginTop: "8rem",
            paddingTop: "10p",
            textAlign: "center",
            // boxShadow: "0 5px 8px #f5f5f5",
            fontWeight: "bolder",
            boxShadow: " 5px 5px 10px  rgb(64, 92, 250)",
          },
        }}
      >
        <div>
          <p className="scoreText-score">Enter Code</p>
        </div>
        <div>
          {/* <p className="score-score">{Scores}</p> */}
          <input
            name="codeInp"
            value={inputValue.codeInp || ""}
            onChange={handleChangeForInputs}
          />
        </div>
        {/* <div>attempted words: {attempted + 1} </div> */}

        <NavLink to="/ShowWorksheets">
          {" "}
          {/* <NavLink to="/Student"> */}
          <button
            // onClick={() => setModalisOPen(props.closeModal)}
            onClick={CodeReqHandler}
            className="closeButton-score"
          >
            Close
          </button>
        </NavLink>
      </Modal>
    </div>
  );
};
export default EnterCode;
