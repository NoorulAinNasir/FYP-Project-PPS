// import React, { useEffect, useRef, useState } from "react";
// import { useLocalStorage } from "../../LocalStorage/Local";
// import CodeForTestWS from "../UIElements/CodeForTestWS";
// import uuid from "react-uuid";

// import "./CSS/Mcqs.css";
// const Mcqs = () => {
//   const [inp1, setinp1] = useState("");
//   const [inp2, setinp2] = useState("");
//   const [inp3, setinp3] = useState("");
//   const [inp4, setinp4] = useState("");
//   const [inp5, setinp5] = useState("");
//   const [showCodeWin, setShowCodeWin] = useState(false);
//   const [code, setCode] = useState("im code");
//   const [v1, setv1] = useState("");
//   const [v2, setv2] = useState("");
//   const [v3, setv3] = useState("");
//   const [v4, setv4] = useState("");
//   const [v5, setv5] = useState("");
//   const [v6, setv6] = useState("");
//   const [v7, setv7] = useState("");
//   const [v8, setv8] = useState("");
//   const [v9, setv9] = useState("");
//   const [v10, setv10] = useState("");
//   const [v11, setv11] = useState("");
//   const [v12, setv12] = useState("");
//   const [v13, setv13] = useState("");
//   const [v14, setv14] = useState("");
//   const [v15, setv15] = useState("");
//   const [email, setuserEmail] = useLocalStorage("email", "null");
//   // const v1 = useRef();
//   // const inp1 = useRef();

//   // useEffect(() => {
//   //   mcqSaveBtnHandler();
//   // }, [v1]);
//   // }, [v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14, v15]);

//   useEffect(() => {
//     contentHandler();
//   }, [inp1, inp2, inp3, inp4, inp5]);

//   //savind practice worksheets
//   const PracWsHandler = async (e, type) => {
//     // e.preventDefault();
//     let responseData;
//     try {
//       const response = await fetch("http://localhost:5000/savingHTML", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           html: document.getElementById("mcqsDiv").innerHTML,
//           type: type,
//           inp1,
//           inp2,
//           inp3,
//           inp4,
//           inp5,
//           code: uuid(),
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

//   //gives selected value
//   const contentHandler = (e, name) => {
//     if (name === "q1") {
//       setinp1(() => e.target.value);
//       //inp1.current = e.target.value;
//       console.log(`selected value is ${inp1}`);
//     }
//     if (name === "q2") {
//       setinp2(() => e.target.value);

//       console.log(`selected value is ${inp2}`);
//     }
//     if (name === "q3") {
//       setinp3(() => e.target.value);
//       console.log(`selected value is ${inp3}`);
//     }
//     if (name === "q4") {
//       setinp4(() => e.target.value);

//       console.log(`selected value is ${inp4}`);
//     }
//     if (name === "q5") {
//       setinp5(() => e.target.value);

//       console.log(`selected value is ${inp5}`);
//     }
//   };

//   //save inner text of mcq
//   const mcqSaveBtnHandler = (id) => {
//     if (id === "s1") {
//       setv1(() => document.getElementById("s1").innerText);
//       console.log(v1);
//       //  v1.current = document.getElementById("s1").innerText;
//       //  console.log(v1.current);
//     }

//     if (id === "s2") {
//       setv2(() => document.getElementById("s2").innerText);
//       console.log(v2);
//     }
//     if (id === "s3") {
//       setv3(() => document.getElementById("s3").innerText);
//       console.log(v3);
//     }
//     if (id === "s4") {
//       setv4(() => document.getElementById("s4").innerText);
//       console.log(v4);
//     }
//     if (id === "s5") {
//       setv5(() => document.getElementById("s5").innerText);
//       console.log(v5);
//     }
//     if (id === "s6") {
//       setv6(() => document.getElementById("s6").innerText);
//       console.log(v6);
//     }
//     if (id === "s7") {
//       setv7(() => document.getElementById("s7").innerText);
//       console.log(v7);
//     }
//     if (id === "s8") {
//       setv8(() => document.getElementById("s8").innerText);
//       console.log(v8);
//     }
//     if (id === "s9") {
//       setv9(() => document.getElementById("s9").innerText);
//       console.log(v9);
//     }
//     if (id === "s10") {
//       setv10(() => document.getElementById("s10").innerText);
//       console.log(v10);
//     }
//     if (id === "s11") {
//       setv11(() => document.getElementById("s11").innerText);
//       console.log(v11);
//     }
//     if (id === "s12") {
//       setv12(() => document.getElementById("s12").innerText);
//       console.log(v12);
//     }
//     if (id === "s13") {
//       setv13(() => document.getElementById("s13").innerText);
//       console.log(v13);
//     }

//     if (id === "s14") {
//       setv14(() => document.getElementById("s14").innerText);
//       console.log(v14);
//     }

//     if (id === "s15") {
//       setv15(() => document.getElementById("s15").innerText);
//       console.log(v15);
//     }
//   };

//   // const showHandler = () => {
//   //   console.log();
//   // };

//   // const showVal = () => {
//   //   console.log(inp1);
//   //   console.log(inp2);
//   //   console.log(inp3);
//   //   console.log(inp4);
//   //   console.log(inp5);
//   // };
//   return (
//     <>
//       <div
//         id="mcqsDiv"
//         contentEditable={true}
//         suppressContentEditableWarning={true}
//       >
//         <h2>TOPIC NAME OR HEADING</h2>
//         <br></br>
//         {/* QUESTION 1.................................................... */}

//         <p> 1) write content for mcq and select one correct answer</p>
//         <p id="p1">
//           <input
//             type="radio"
//             name="q1"
//             id="i1"
//             value={v1}
//             onChange={(e) => contentHandler(e, "q1")}
//           />{" "}
//           <span contentEditable={false}>
//             1)
//             <span
//               id="s1"
//               contentEditable={true}
//               suppressContentEditableWarning={true}
//             >
//               {" "}
//               Option 1
//             </span>
//           </span>
//           <span className="mcqSaveBtn">
//             <button
//               id="mcqSaveBtn"
//               contentEditable={false}
//               onClick={() => mcqSaveBtnHandler("s1")}
//             >
//               save
//             </button>
//           </span>
//         </p>

//         <p id="p1">
//           <input
//             type="radio"
//             name="q1"
//             id="i2"
//             value={v2}
//             onChange={(e) => contentHandler(e, "q1")}
//           />{" "}
//           <span contentEditable={false}>
//             2)
//             <span
//               id="s2"
//               contentEditable={true}
//               suppressContentEditableWarning={true}
//             >
//               {" "}
//               Option 2
//             </span>
//           </span>
//           <span className="mcqSaveBtn">
//             <button
//               id="mcqSaveBtn"
//               contentEditable={false}
//               onClick={() => mcqSaveBtnHandler("s2")}
//             >
//               save
//             </button>
//           </span>
//         </p>

//         <p id="p1">
//           <input
//             type="radio"
//             name="q1"
//             id="i3"
//             value={v3}
//             onChange={(e) => contentHandler(e, "q1")}
//           />{" "}
//           <span contentEditable={false}>
//             3)
//             <span
//               id="s3"
//               contentEditable={true}
//               suppressContentEditableWarning={true}
//             >
//               {" "}
//               Option 3
//             </span>
//           </span>
//           <span className="mcqSaveBtn">
//             <button
//               id="mcqSaveBtn"
//               contentEditable={false}
//               onClick={() => mcqSaveBtnHandler("s3")}
//             >
//               save
//             </button>
//           </span>
//         </p>
//         <br></br>
//         {/* QUESTION 2.................................................... */}

//         <p> 2) write content for mcq and select one correct answer</p>
//         <p id="p1">
//           <input
//             type="radio"
//             name="q2"
//             id="i4"
//             value={v4}
//             onChange={(e) => contentHandler(e, "q2")}
//           />{" "}
//           <span contentEditable={false}>
//             1)
//             <span
//               id="s4"
//               contentEditable={true}
//               suppressContentEditableWarning={true}
//             >
//               {" "}
//               Option 1
//             </span>
//           </span>
//           <span className="mcqSaveBtn">
//             <button
//               id="mcqSaveBtn"
//               contentEditable={false}
//               onClick={() => mcqSaveBtnHandler("s4")}
//             >
//               save
//             </button>
//           </span>
//         </p>

//         <p id="p1">
//           <input
//             type="radio"
//             name="q2"
//             id="i5"
//             value={v5}
//             onChange={(e) => contentHandler(e, "q2")}
//           />{" "}
//           <span contentEditable={false}>
//             2)
//             <span
//               id="s5"
//               contentEditable={true}
//               suppressContentEditableWarning={true}
//             >
//               {" "}
//               Option 2
//             </span>
//           </span>
//           <span className="mcqSaveBtn">
//             <button
//               id="mcqSaveBtn"
//               contentEditable={false}
//               onClick={() => mcqSaveBtnHandler("s5")}
//             >
//               save
//             </button>
//           </span>
//         </p>

//         <p id="p1">
//           <input
//             type="radio"
//             name="q2"
//             id="i6"
//             value={v6}
//             onChange={(e) => contentHandler(e, "q2")}
//           />{" "}
//           <span contentEditable={false}>
//             3)
//             <span
//               id="s6"
//               contentEditable={true}
//               suppressContentEditableWarning={true}
//             >
//               {" "}
//               Option 3
//             </span>
//           </span>
//           <span className="mcqSaveBtn">
//             <button
//               id="mcqSaveBtn"
//               contentEditable={false}
//               onClick={() => mcqSaveBtnHandler("s6")}
//             >
//               save
//             </button>
//           </span>
//         </p>
//         <br></br>
//         {/* QUESTION 3.................................................... */}

//         <p> 3) write content for mcq and select one correct answer</p>
//         <p id="p1">
//           <input
//             type="radio"
//             name="q3"
//             id="i7"
//             value={v7}
//             onChange={(e) => contentHandler(e, "q3")}
//           />{" "}
//           <span contentEditable={false}>
//             1)
//             <span
//               id="s7"
//               contentEditable={true}
//               suppressContentEditableWarning={true}
//             >
//               {" "}
//               Option 1
//             </span>
//           </span>
//           <span className="mcqSaveBtn">
//             <button
//               id="mcqSaveBtn"
//               contentEditable={false}
//               onClick={() => mcqSaveBtnHandler("s7")}
//             >
//               save
//             </button>
//           </span>
//         </p>

//         <p id="p1">
//           <input
//             type="radio"
//             name="q3"
//             id="i8"
//             value={v8}
//             onChange={(e) => contentHandler(e, "q3")}
//           />{" "}
//           <span contentEditable={false}>
//             2)
//             <span
//               id="s8"
//               contentEditable={true}
//               suppressContentEditableWarning={true}
//             >
//               {" "}
//               Option 2
//             </span>
//           </span>
//           <span className="mcqSaveBtn">
//             <button
//               id="mcqSaveBtn"
//               contentEditable={false}
//               onClick={() => mcqSaveBtnHandler("s8")}
//             >
//               save
//             </button>
//           </span>
//         </p>

//         <p id="p1">
//           <input
//             type="radio"
//             name="q3"
//             id="i9"
//             value={v9}
//             onChange={(e) => contentHandler(e, "q3")}
//           />{" "}
//           <span contentEditable={false}>
//             3)
//             <span
//               id="s9"
//               contentEditable={true}
//               suppressContentEditableWarning={true}
//             >
//               {" "}
//               Option 3
//             </span>
//           </span>
//           <span className="mcqSaveBtn">
//             <button
//               id="mcqSaveBtn"
//               contentEditable={false}
//               onClick={() => mcqSaveBtnHandler("s9")}
//             >
//               save
//             </button>
//           </span>
//         </p>
//         <br></br>
//         {/* QUESTION 4.................................................... */}
//         <p> 4) write content for mcq and select one correct answer</p>
//         <p id="p1">
//           <input
//             type="radio"
//             name="q4"
//             id="i10"
//             value={v10}
//             onChange={(e) => contentHandler(e, "q4")}
//           />{" "}
//           <span contentEditable={false}>
//             1)
//             <span
//               id="s10"
//               contentEditable={true}
//               suppressContentEditableWarning={true}
//             >
//               {" "}
//               Option 1
//             </span>
//           </span>
//           <span className="mcqSaveBtn">
//             <button
//               id="mcqSaveBtn"
//               contentEditable={false}
//               onClick={() => mcqSaveBtnHandler("s10")}
//             >
//               save
//             </button>
//           </span>
//         </p>

//         <p id="p1">
//           <input
//             type="radio"
//             name="q4"
//             id="i11"
//             value={v11}
//             onChange={(e) => contentHandler(e, "q4")}
//           />{" "}
//           <span contentEditable={false}>
//             2)
//             <span
//               id="s11"
//               contentEditable={true}
//               suppressContentEditableWarning={true}
//             >
//               {" "}
//               Option 2
//             </span>
//           </span>
//           <span className="mcqSaveBtn">
//             <button
//               id="mcqSaveBtn"
//               contentEditable={false}
//               onClick={() => mcqSaveBtnHandler("s11")}
//             >
//               save
//             </button>
//           </span>
//         </p>

//         <p id="p1">
//           <input
//             type="radio"
//             name="q4"
//             id="i12"
//             value={v12}
//             onChange={(e) => contentHandler(e, "q4")}
//           />{" "}
//           <span contentEditable={false}>
//             3)
//             <span
//               id="s12"
//               contentEditable={true}
//               suppressContentEditableWarning={true}
//             >
//               {" "}
//               Option 3
//             </span>
//           </span>
//           <span className="mcqSaveBtn">
//             <button
//               id="mcqSaveBtn"
//               contentEditable={false}
//               onClick={() => mcqSaveBtnHandler("s12")}
//             >
//               save
//             </button>
//           </span>
//         </p>
//         <br></br>
//         {/* QUESTION 5.................................................... */}

//         <p> 5) write content for mcq and select one correct answer</p>
//         <p id="p1">
//           <input
//             type="radio"
//             name="q5"
//             id="i13"
//             value={v13}
//             onChange={(e) => contentHandler(e, "q5")}
//           />{" "}
//           <span contentEditable={false}>
//             1)
//             <span
//               id="s13"
//               contentEditable={true}
//               suppressContentEditableWarning={true}
//             >
//               {" "}
//               Option 1
//             </span>
//           </span>
//           <span className="mcqSaveBtn">
//             <button
//               id="mcqSaveBtn"
//               contentEditable={false}
//               onClick={() => mcqSaveBtnHandler("s13")}
//             >
//               save
//             </button>
//           </span>
//         </p>

//         <p id="p1">
//           <input
//             type="radio"
//             name="q5"
//             id="i14"
//             value={v14}
//             onChange={(e) => contentHandler(e, "q5")}
//           />{" "}
//           <span contentEditable={false}>
//             2)
//             <span
//               id="s14"
//               contentEditable={true}
//               suppressContentEditableWarning={true}
//             >
//               {" "}
//               Option 2
//             </span>
//           </span>
//           <span className="mcqSaveBtn">
//             <button
//               id="mcqSaveBtn"
//               contentEditable={false}
//               onClick={() => mcqSaveBtnHandler("s14")}
//             >
//               save
//             </button>
//           </span>
//         </p>

//         <p id="p1">
//           <input
//             type="radio"
//             name="q5"
//             id="i15"
//             value={v15}
//             onChange={(e) => contentHandler(e, "q5")}
//           />{" "}
//           <span contentEditable={false}>
//             3)
//             <span
//               id="s15"
//               contentEditable={true}
//               suppressContentEditableWarning={true}
//             >
//               {" "}
//               Option 3
//             </span>
//           </span>
//           <span className="mcqSaveBtn">
//             <button
//               id="mcqSaveBtn"
//               contentEditable={false}
//               onClick={() => mcqSaveBtnHandler("s15")}
//             >
//               save
//             </button>
//           </span>
//         </p>
//         <br></br>
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

// export default Mcqs;

import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../../LocalStorage/Local";
import CreateWorksheetdModal from "./CreatedWorksheetModal";
import CodeForTestWS from "../UIElements/CodeForTestWS";
import uuid from "react-uuid";

import "./CSS/Mcqs.css";
const Mcqs = () => {
  const [inp1, setinp1] = useState("");
  const [inp2, setinp2] = useState("");
  const [inp3, setinp3] = useState("");
  const [inp4, setinp4] = useState("");
  const [inp5, setinp5] = useState("");
  const [showCodeWin, setShowCodeWin] = useState(false);
  const [modalisOpen, setModalisOPen] = useState(() => false);
  const [code, setCode] = useState("im code");
  const [v1, setv1] = useState("");
  const [v2, setv2] = useState("");
  const [v3, setv3] = useState("");
  const [v4, setv4] = useState("");
  const [v5, setv5] = useState("");
  const [v6, setv6] = useState("");
  const [v7, setv7] = useState("");
  const [v8, setv8] = useState("");
  const [v9, setv9] = useState("");
  const [v10, setv10] = useState("");
  const [v11, setv11] = useState("");
  const [v12, setv12] = useState("");
  const [v13, setv13] = useState("");
  const [v14, setv14] = useState("");
  const [v15, setv15] = useState("");
  const [email, setuserEmail] = useLocalStorage("email", "null");

  useEffect(() => {
    contentHandler();
  }, [inp1, inp2, inp3, inp4, inp5]);

  //savind practice worksheets
  const PracWsHandler = async (e, type) => {
    // e.preventDefault();
    let responseData;
    const Title = document.getElementById("mcqHeading");
    console.log(Title, "lineeee732");
    try {
      const response = await fetch("http://localhost:5000/savingHTML", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          html: document.getElementById("mcqsDiv").innerHTML,
          type: type,
          inp1,
          inp2,
          inp3,
          inp4,
          inp5,
          code: uuid(),
          title: document.getElementById("mcqHeading").innerText,
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

  //gives selected value
  const contentHandler = (e, name) => {
    if (name === "q1") {
      setinp1(() => e.target.value);
      //inp1.current = e.target.value;
      console.log(`selected value is ${inp1}`);
    }
    if (name === "q2") {
      setinp2(() => e.target.value);

      console.log(`selected value is ${inp2}`);
    }
    if (name === "q3") {
      setinp3(() => e.target.value);
      console.log(`selected value is ${inp3}`);
    }
    if (name === "q4") {
      setinp4(() => e.target.value);

      console.log(`selected value is ${inp4}`);
    }
    if (name === "q5") {
      setinp5(() => e.target.value);

      console.log(`selected value is ${inp5}`);
    }
  };

  //save inner text of mcq
  const mcqSaveBtnHandler = (id) => {
    if (id === "s1") {
      setv1(() => document.getElementById("s1").innerText);
    }

    if (id === "s2") {
      setv2(() => document.getElementById("s2").innerText);
    }
    if (id === "s3") {
      setv3(() => document.getElementById("s3").innerText);
    }
    if (id === "s4") {
      setv4(() => document.getElementById("s4").innerText);
    }
    if (id === "s5") {
      setv5(() => document.getElementById("s5").innerText);
    }
    if (id === "s6") {
      setv6(() => document.getElementById("s6").innerText);
    }
    if (id === "s7") {
      setv7(() => document.getElementById("s7").innerText);
    }
    if (id === "s8") {
      setv8(() => document.getElementById("s8").innerText);
    }
    if (id === "s9") {
      setv9(() => document.getElementById("s9").innerText);
    }
    if (id === "s10") {
      setv10(() => document.getElementById("s10").innerText);
    }
    if (id === "s11") {
      setv11(() => document.getElementById("s11").innerText);
    }
    if (id === "s12") {
      setv12(() => document.getElementById("s12").innerText);
    }
    if (id === "s13") {
      setv13(() => document.getElementById("s13").innerText);
    }

    if (id === "s14") {
      setv14(() => document.getElementById("s14").innerText);
      console.log(v14);
    }

    if (id === "s15") {
      setv15(() => document.getElementById("s15").innerText);
      console.log(v15);
    }
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
          height: "640px",
          marginLeft: "360px",
          marginTop: "60px",
        }}
      >
        <div
          style={{ marginLeft: "20px" }}
          id="mcqsDiv"
          contentEditable={true}
          suppressContentEditableWarning={true}
        >
          <h2 id="mcqHeading">TOPIC NAME OR HEADING</h2>
          <br></br>
          {/* QUESTION 1.................................................... */}

          <p> 1) write content for mcq and select one correct answer</p>
          <p id="p1">
            <input
              type="radio"
              name="q1"
              id="i1"
              value={v1}
              onChange={(e) => contentHandler(e, "q1")}
            />{" "}
            <span contentEditable={false}>
              1)
              <span
                id="s1"
                contentEditable={true}
                suppressContentEditableWarning={true}
              >
                {" "}
                Option 1
              </span>
            </span>
            <span className="mcqSaveBtn">
              <button
                id="mcqSaveBtn"
                contentEditable={false}
                onClick={() => mcqSaveBtnHandler("s1")}
              >
                save
              </button>
            </span>
          </p>

          <p id="p1">
            <input
              type="radio"
              name="q1"
              id="i2"
              value={v2}
              onChange={(e) => contentHandler(e, "q1")}
            />{" "}
            <span contentEditable={false}>
              2)
              <span
                id="s2"
                contentEditable={true}
                suppressContentEditableWarning={true}
              >
                {" "}
                Option 2
              </span>
            </span>
            <span className="mcqSaveBtn">
              <button
                id="mcqSaveBtn"
                contentEditable={false}
                onClick={() => mcqSaveBtnHandler("s2")}
              >
                save
              </button>
            </span>
          </p>

          <p id="p1">
            <input
              type="radio"
              name="q1"
              id="i3"
              value={v3}
              onChange={(e) => contentHandler(e, "q1")}
            />{" "}
            <span contentEditable={false}>
              3)
              <span
                id="s3"
                contentEditable={true}
                suppressContentEditableWarning={true}
              >
                {" "}
                Option 3
              </span>
            </span>
            <span className="mcqSaveBtn">
              <button
                id="mcqSaveBtn"
                contentEditable={false}
                onClick={() => mcqSaveBtnHandler("s3")}
              >
                save
              </button>
            </span>
          </p>
          <br></br>
          {/* QUESTION 2.................................................... */}

          <p> 2) write content for mcq and select one correct answer</p>
          <p id="p1">
            <input
              type="radio"
              name="q2"
              id="i4"
              value={v4}
              onChange={(e) => contentHandler(e, "q2")}
            />{" "}
            <span contentEditable={false}>
              1)
              <span
                id="s4"
                contentEditable={true}
                suppressContentEditableWarning={true}
              >
                {" "}
                Option 1
              </span>
            </span>
            <span className="mcqSaveBtn">
              <button
                id="mcqSaveBtn"
                contentEditable={false}
                onClick={() => mcqSaveBtnHandler("s4")}
              >
                save
              </button>
            </span>
          </p>

          <p id="p1">
            <input
              type="radio"
              name="q2"
              id="i5"
              value={v5}
              onChange={(e) => contentHandler(e, "q2")}
            />{" "}
            <span contentEditable={false}>
              2)
              <span
                id="s5"
                contentEditable={true}
                suppressContentEditableWarning={true}
              >
                {" "}
                Option 2
              </span>
            </span>
            <span className="mcqSaveBtn">
              <button
                id="mcqSaveBtn"
                contentEditable={false}
                onClick={() => mcqSaveBtnHandler("s5")}
              >
                save
              </button>
            </span>
          </p>

          <p id="p1">
            <input
              type="radio"
              name="q2"
              id="i6"
              value={v6}
              onChange={(e) => contentHandler(e, "q2")}
            />{" "}
            <span contentEditable={false}>
              3)
              <span
                id="s6"
                contentEditable={true}
                suppressContentEditableWarning={true}
              >
                {" "}
                Option 3
              </span>
            </span>
            <span className="mcqSaveBtn">
              <button
                id="mcqSaveBtn"
                contentEditable={false}
                onClick={() => mcqSaveBtnHandler("s6")}
              >
                save
              </button>
            </span>
          </p>
          <br></br>
          {/* QUESTION 3.................................................... */}

          <p> 3) write content for mcq and select one correct answer</p>
          <p id="p1">
            <input
              type="radio"
              name="q3"
              id="i7"
              value={v7}
              onChange={(e) => contentHandler(e, "q3")}
            />{" "}
            <span contentEditable={false}>
              1)
              <span
                id="s7"
                contentEditable={true}
                suppressContentEditableWarning={true}
              >
                {" "}
                Option 1
              </span>
            </span>
            <span className="mcqSaveBtn">
              <button
                id="mcqSaveBtn"
                contentEditable={false}
                onClick={() => mcqSaveBtnHandler("s7")}
              >
                save
              </button>
            </span>
          </p>

          <p id="p1">
            <input
              type="radio"
              name="q3"
              id="i8"
              value={v8}
              onChange={(e) => contentHandler(e, "q3")}
            />{" "}
            <span contentEditable={false}>
              2)
              <span
                id="s8"
                contentEditable={true}
                suppressContentEditableWarning={true}
              >
                {" "}
                Option 2
              </span>
            </span>
            <span className="mcqSaveBtn">
              <button
                id="mcqSaveBtn"
                contentEditable={false}
                onClick={() => mcqSaveBtnHandler("s8")}
              >
                save
              </button>
            </span>
          </p>

          <p id="p1">
            <input
              type="radio"
              name="q3"
              id="i9"
              value={v9}
              onChange={(e) => contentHandler(e, "q3")}
            />{" "}
            <span contentEditable={false}>
              3)
              <span
                id="s9"
                contentEditable={true}
                suppressContentEditableWarning={true}
              >
                {" "}
                Option 3
              </span>
            </span>
            <span className="mcqSaveBtn">
              <button
                id="mcqSaveBtn"
                contentEditable={false}
                onClick={() => mcqSaveBtnHandler("s9")}
              >
                save
              </button>
            </span>
          </p>
          <br></br>
          {/* QUESTION 4.................................................... */}
          <p> 4) write content for mcq and select one correct answer</p>
          <p id="p1">
            <input
              type="radio"
              name="q4"
              id="i10"
              value={v10}
              onChange={(e) => contentHandler(e, "q4")}
            />{" "}
            <span contentEditable={false}>
              1)
              <span
                id="s10"
                contentEditable={true}
                suppressContentEditableWarning={true}
              >
                {" "}
                Option 1
              </span>
            </span>
            <span className="mcqSaveBtn">
              <button
                id="mcqSaveBtn"
                contentEditable={false}
                onClick={() => mcqSaveBtnHandler("s10")}
              >
                save
              </button>
            </span>
          </p>

          <p id="p1">
            <input
              type="radio"
              name="q4"
              id="i11"
              value={v11}
              onChange={(e) => contentHandler(e, "q4")}
            />{" "}
            <span contentEditable={false}>
              2)
              <span
                id="s11"
                contentEditable={true}
                suppressContentEditableWarning={true}
              >
                {" "}
                Option 2
              </span>
            </span>
            <span className="mcqSaveBtn">
              <button
                id="mcqSaveBtn"
                contentEditable={false}
                onClick={() => mcqSaveBtnHandler("s11")}
              >
                save
              </button>
            </span>
          </p>

          <p id="p1">
            <input
              type="radio"
              name="q4"
              id="i12"
              value={v12}
              onChange={(e) => contentHandler(e, "q4")}
            />{" "}
            <span contentEditable={false}>
              3)
              <span
                id="s12"
                contentEditable={true}
                suppressContentEditableWarning={true}
              >
                {" "}
                Option 3
              </span>
            </span>
            <span className="mcqSaveBtn">
              <button
                id="mcqSaveBtn"
                contentEditable={false}
                onClick={() => mcqSaveBtnHandler("s12")}
              >
                save
              </button>
            </span>
          </p>
          <br></br>
          {/* QUESTION 5.................................................... */}

          <p> 5) write content for mcq and select one correct answer</p>
          <p id="p1">
            <input
              type="radio"
              name="q5"
              id="i13"
              value={v13}
              onChange={(e) => contentHandler(e, "q5")}
            />{" "}
            <span contentEditable={false}>
              1)
              <span
                id="s13"
                contentEditable={true}
                suppressContentEditableWarning={true}
              >
                {" "}
                Option 1
              </span>
            </span>
            <span className="mcqSaveBtn">
              <button
                id="mcqSaveBtn"
                contentEditable={false}
                onClick={() => mcqSaveBtnHandler("s13")}
              >
                save
              </button>
            </span>
          </p>

          <p id="p1">
            <input
              type="radio"
              name="q5"
              id="i14"
              value={v14}
              onChange={(e) => contentHandler(e, "q5")}
            />{" "}
            <span contentEditable={false}>
              2)
              <span
                id="s14"
                contentEditable={true}
                suppressContentEditableWarning={true}
              >
                {" "}
                Option 2
              </span>
            </span>
            <span className="mcqSaveBtn">
              <button
                id="mcqSaveBtn"
                contentEditable={false}
                onClick={() => mcqSaveBtnHandler("s14")}
              >
                save
              </button>
            </span>
          </p>

          <p id="p1">
            <input
              type="radio"
              name="q5"
              id="i15"
              value={v15}
              onChange={(e) => contentHandler(e, "q5")}
            />{" "}
            <span contentEditable={false}>
              3)
              <span
                id="s15"
                contentEditable={true}
                suppressContentEditableWarning={true}
              >
                {" "}
                Option 3
              </span>
            </span>
            <span className="mcqSaveBtn">
              <button
                id="mcqSaveBtn"
                contentEditable={false}
                onClick={() => mcqSaveBtnHandler("s15")}
              >
                save
              </button>
            </span>
          </p>
          <br></br>
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
      {/* <button
        style={{ marginLeft: " 420px", marginTop: "50px" }}
        className="testWsBtn"
        onClick={(e) => PracWsHandler(e, "test worksheet")}
      >
        Save As Test WORKSHEET
      </button>

      <button
        style={{ marginLeft: " 100px", marginTop: "-60px" }}
        className="pracWsBtn"
        onClick={(e) => PracWsHandler(e, "practice worksheet")}
      >
        Save As Practice WORKSHEET
      </button> */}

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

export default Mcqs;
