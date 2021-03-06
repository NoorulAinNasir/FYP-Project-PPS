import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Scores } from "./SpeechToText";
import { attempted } from "./SpeechToText";
//import { totalScores } from "./components/Worksheets/ShowWorksheets";
import { NavLink } from "react-router-dom";
//import img from "./assets/stars4.jpg";
import img from "../../assets/stars4.jpg";
// /src/assets/star4.jpeg";
import "../../../src/scoreModal.css";

Modal.setAppElement("#root");

const ScoreBeeModal = (props) => {
  const [modalisOpen, setModalisOPen] = useState(false);
  // const [count, setCount] = useState(totalScores);

  // setInterval(updateScores, 1000);
  // useEffect(() => {
  //   console.log(count);
  //   const interval = setInterval(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   }, 1000);
  //   console.log(count);
  //   if (count === totalScores) {
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   }
  // }, [count]);

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
            backgroundImage: "url(" + img + ")",
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
          <p className="scoreText-score">Scores:</p>
        </div>
        <div>
          <p className="score-score">{Scores}</p>
        </div>
        <div>attempted words: {attempted + 1} </div>{" "}
        <NavLink to="/Student">
          <button
            onClick={() => setModalisOPen(props.closeModal)}
            className="closeButton-score"
          >
            Close
          </button>
        </NavLink>
      </Modal>
    </div>
  );
};
export default ScoreBeeModal;
