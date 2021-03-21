// import React, { useState } from "react";
// import useForm from "../../../src/utils/useForm";
// import { useLocalStorage } from "../../LocalStorage/Local";
// //import { useHistory } from "react-router-dom";
// import uuid from "react-uuid";
// import CodeForTestWS from "../UIElements/CodeForTestWS";
// import "./CSS/FillInTheBlanks.css";

// const FillInTheBlanks = () => {
//   const [inputValue, handleChangeForInputs, clear] = useForm();
//   const [showCodeWin, setShowCodeWin] = useState(false);
//   const [code, setCode] = useState("im code");
//   // const [userName, setuserName] = useLocalStorage("userName", "null");
//   const [email, setuserEmail] = useLocalStorage("email", "null");
//   console.log(email);
//   //const history = useHistory();

//   const PracWsHandler = async (e, type) => {
//     //e.preventDefault();
//     clear();
//     let responseData;
//     // console.log(inputValue.inp1);
//     // console.log(inputValue.inp2);
//     // console.log(inputValue.inp3);
//     // console.log(inputValue.inp4);
//     // console.log(inputValue.inp5);
//     // console.log(type);

//     try {
//       const response = await fetch("http://localhost:5000/savingHTML", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           html: document.getElementById("blanksDiv").innerHTML,
//           type: type,
//           inp1: inputValue.inp1,
//           inp2: inputValue.inp2,
//           inp3: inputValue.inp3,
//           inp4: inputValue.inp4,
//           inp5: inputValue.inp5,
//           code: uuid(),
//           // approved: false,
//           creator: email,
//         }),
//       });

//       responseData = await response.json();

//       console.log(responseData);
//     } catch (err) {
//       console.log(err);
//     }
//     if (type === "test worksheet") {
//       setShowCodeWin(() => true);
//       setCode(responseData.result);
//     }
//   };

//   const dragHandler = (e) => {
//     let id = e.target.id;
//     console.log(id);
//     console.log(document.getElementById(id));
//     e.preventDefault();
//     let dragValue = e.target;

//     function move(e) {
//       // e.preventDefault();

//       let element = document.getElementById(id);
//       element.style.position = "absolute";
//       element.onClick = function () {
//         dragValue = element;
//       };
//     }

//     document.ondblclick = function (e) {
//       e.preventDefault();
//       console.log(e.target.value);
//       // document.getElementById("input").value = e.target.value;

//       document.getElementById(id).blur();
//       //document.getElementById("main").appendChild(dd);

//       //dragValue = null;
//       document.onmousemove = null;
//     };
//     document.onmousemove = function (e) {
//       e.preventDefault();
//       console.log(e);

//       dragValue.focus();
//       let x = e.clientX;
//       let y = e.clientY;
//       dragValue.style.left = x + "px";
//       dragValue.style.top = y + "px";
//     };
//     move();
//   };

//   return (
//     <>
//       <div
//         id="blanksDiv"
//         contentEditable={true}
//         suppressContentEditableWarning={true}
//       >
//         <h2>TOPIC NAME OR HEADING</h2>
//         <br></br>
//         <div>
//           1) write content for blank here and provide correct answer in text
//           field{" "}
//           <div>
//             <input
//               id="inp1"
//               className="inp1"
//               autoComplete="off"
//               name="inp1"
//               type="text"
//               placeholder="provide correct answer"
//               onClick={dragHandler}
//               value={inputValue.inp1 || ""}
//               onChange={handleChangeForInputs}
//             />
//           </div>
//         </div>
//         <br />
//         <div>
//           2) write content for blank here and provide correct answer in text
//           field{" "}
//           <div>
//             <input
//               id="inp2"
//               className="inp1"
//               autoComplete="off"
//               name="inp2"
//               type="text"
//               placeholder="provide correct answer"
//               onClick={dragHandler}
//               value={inputValue.inp2 || ""}
//               onChange={handleChangeForInputs}
//             />
//           </div>
//         </div>
//         <br />
//         <div>
//           3) write content for blank here and provide correct answer in text
//           field{" "}
//           <div>
//             <input
//               id="inp3"
//               className="inp1"
//               type="text"
//               autoComplete="off"
//               name="inp3"
//               onClick={dragHandler}
//               placeholder="provide correct answer"
//               value={inputValue.inp3 || ""}
//               onChange={handleChangeForInputs}
//             />
//           </div>
//         </div>
//         <br />
//         <div>
//           4) write content for blank here and provide correct answer in text
//           field{" "}
//           <div>
//             <input
//               id="inp4"
//               className="inp1"
//               autoComplete="off"
//               name="inp4"
//               onClick={dragHandler}
//               type="text"
//               placeholder="provide correct answer"
//               value={inputValue.inp4 || ""}
//               onChange={handleChangeForInputs}
//             />
//           </div>
//         </div>
//         <br />
//         <div>
//           5) write content for blank here and provide correct answer in text
//           field{" "}
//           <div>
//             <input
//               id="inp5"
//               className="inp1"
//               autoComplete="off"
//               name="inp5"
//               onClick={dragHandler}
//               type="text"
//               placeholder="provide correct answer"
//               value={inputValue.inp5 || ""}
//               onChange={handleChangeForInputs}
//             />
//           </div>
//         </div>
//         <br />
//       </div>
//       <button
//         className="testWsBtn"
//         onClick={(e) => PracWsHandler(e, "test worksheet")}
//       >
//         Save As Test WORKSHEET
//       </button>

//       <button
//         className="pracWsBtn"
//         onClick={(e) => PracWsHandler(e, "practice worksheet")}
//       >
//         Save As Practice WORKSHEET
//       </button>
//       <CodeForTestWS
//         openModal={showCodeWin}
//         closeModal={() => setShowCodeWin(false)}
//         code={code}
//       />
//     </>
//   );
// };

// export default FillInTheBlanks;

import React, { useState } from "react";
import useForm from "../../../src/utils/useForm";
import { useLocalStorage } from "../../LocalStorage/Local";
//import { useHistory } from "react-router-dom";
import uuid from "react-uuid";
import CreateWorksheetdModal from "./CreatedWorksheetModal";
import CodeForTestWS from "../UIElements/CodeForTestWS";
import "./CSS/FillInTheBlanks.css";

const FillInTheBlanks = () => {
  const [inputValue, handleChangeForInputs, clear] = useForm();
  const [showCodeWin, setShowCodeWin] = useState(false);
  const [modalisOpen, setModalisOPen] = useState(() => false);
  const [code, setCode] = useState("im code");
  // const [userName, setuserName] = useLocalStorage("userName", "null");
  const [email, setuserEmail] = useLocalStorage("email", "null");
  console.log(email);
  //const history = useHistory();

  const PracWsHandler = async (e, type) => {
    //e.preventDefault();
    // clear();
    let responseData;
    // console.log(inputValue.inp1);
    // console.log(inputValue.inp2);
    // console.log(inputValue.inp3);
    // console.log(inputValue.inp4);
    // console.log(inputValue.inp5);
    // console.log(type);
    const Title = document.getElementById("topicHeading").innerText;
    console.log(Title, "lineeee225");
    try {
      const response = await fetch("http://localhost:5000/savingHTML", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          html: document.getElementById("blanksDiv").innerHTML,
          type: type,
          inp1: inputValue.inp1,
          inp2: inputValue.inp2,
          inp3: inputValue.inp3,
          inp4: inputValue.inp4,
          inp5: inputValue.inp5,
          code: uuid(),
          // approved: false,
          title: document.getElementById("topicHeading").innerText,
          creator: email,
        }),
      });

      responseData = await response.json();

      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
    if (type === "test worksheet") {
      setShowCodeWin(() => true);
      setCode(responseData.result);
    }

    if (type === "practice worksheet") {
      setModalisOPen(() => true);
    }
  };

  const dragHandler = (e) => {
    let id = e.target.id;
    console.log(id);
    console.log(document.getElementById(id));
    e.preventDefault();
    let dragValue = e.target;

    function move(e) {
      // e.preventDefault();

      let element = document.getElementById(id);
      element.style.position = "relative";
      element.onClick = function () {
        dragValue = element;
      };
    }

    document.ondblclick = function (e) {
      e.preventDefault();
      console.log(e.target.value);
      // document.getElementById("input").value = e.target.value;

      document.getElementById(id).blur();
      //document.getElementById("main").appendChild(dd);

      //dragValue = null;
      document.onmousemove = null;
    };
    document.onmousemove = function (e) {
      e.preventDefault();
      console.log(e);

      dragValue.focus();
      let x = e.clientX;
      let y = e.clientY;
      dragValue.style.left = x + "px";
      dragValue.style.top = y + "px";
    };
    move();
  };

  return (
    <>
      <div
        style={{
          borderWidth: "thick",
          borderStyle: "solid",
          borderRadius: "7px",
          borderColor: " black",
          width: "700px",
          height: "470px",
          marginLeft: "360px",
          marginTop: "60px",
        }}
      >
        <div
          style={{ marginLeft: "20px" }}
          id="blanksDiv"
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          <h2 id="topicHeading">TOPIC NAME OR HEADING</h2>
          <br></br>
          <div>
            1) write content for blank here and provide correct answer in text
            field{" "}
            <div>
              <input
                id="inp1"
                className="inp1"
                autoComplete="off"
                name="inp1"
                type="text"
                placeholder="provide correct answer"
                onClick={dragHandler}
                value={inputValue.inp1 || ""}
                onChange={handleChangeForInputs}
              />
            </div>
          </div>
          <br />
          <div>
            2) write content for blank here and provide correct answer in text
            field{" "}
            <div>
              <input
                id="inp2"
                className="inp1"
                autoComplete="off"
                name="inp2"
                type="text"
                placeholder="provide correct answer"
                onClick={dragHandler}
                value={inputValue.inp2 || ""}
                onChange={handleChangeForInputs}
              />
            </div>
          </div>
          <br />
          <div>
            3) write content for blank here and provide correct answer in text
            field{" "}
            <div>
              <input
                id="inp3"
                className="inp1"
                type="text"
                autoComplete="off"
                name="inp3"
                onClick={dragHandler}
                placeholder="provide correct answer"
                value={inputValue.inp3 || ""}
                onChange={handleChangeForInputs}
              />
            </div>
          </div>
          <br />
          <div>
            4) write content for blank here and provide correct answer in text
            field{" "}
            <div>
              <input
                id="inp4"
                className="inp1"
                autoComplete="off"
                name="inp4"
                onClick={dragHandler}
                type="text"
                placeholder="provide correct answer"
                value={inputValue.inp4 || ""}
                onChange={handleChangeForInputs}
              />
            </div>
          </div>
          <br />
          <div>
            5) write content for blank here and provide correct answer in text
            field{" "}
            <div>
              <input
                id="inp5"
                className="inp1"
                autoComplete="off"
                name="inp5"
                onClick={dragHandler}
                type="text"
                placeholder="provide correct answer"
                value={inputValue.inp5 || ""}
                onChange={handleChangeForInputs}
              />
            </div>
          </div>
          <br />
        </div>
      </div>
      <button
        style={{ marginLeft: "420px" }}
        className="pracWsBtn"
        onClick={(e) => PracWsHandler(e, "practice worksheet")}
      >
        Save As Practice WORKSHEET
      </button>
      <button
        style={{ marginLeft: " 70px" }}
        className="testWsBtn"
        onClick={(e) => PracWsHandler(e, "test worksheet")}
      >
        Save As Test WORKSHEET
      </button>

      <CodeForTestWS
        openModal={showCodeWin}
        closeModal={() => setShowCodeWin(false)}
        code={code}
      />
      <CreateWorksheetdModal
        modalisOpen={modalisOpen}
        closeModal={() => setModalisOPen(false)}
      />
    </>
  );
};

export default FillInTheBlanks;
