import React, { useRef } from "react";
import useForm from "../../../src/utils/useForm";
const Blanks = () => {
  const [inputValue, handleChangeForInputs] = useForm();
  let input1 = useRef();
  const handler = (e) => {
    let id = e.target.id;
    console.log(id);
    console.log(document.getElementById(id));
    e.preventDefault();
    console.log(e);
    // let dragValue = document.getElementById("thediv");
    //let dd = document.getElementById("thediv");
    let dragValue = e.target;

    function move(e) {
      // e.preventDefault();

      let element = document.getElementById(id);
      element.style.position = "absolute";
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

  const saveWSHandler = async (e) => {
    e.preventDefault();
    // const dt = document.getElementById("contentDiv").innerText;
    // setContent(dt);
    // console.log(content);
    // document.getElementById("cl").innerHTML = document.getElementById(
    //   "contentDiv"
    // ).innerHTML;

    try {
      const response = await fetch("http://localhost:5000/savingHTML", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          html: document.getElementById("cl").innerHTML,
          inp1: inputValue.inp1,
          inp2: inputValue.inp2,
          inp3: inputValue.inp3,
          inp4: inputValue.inp4,
          inp5: inputValue.inp5,
        }),
      });

      const responseData = await response.json();

      console.log(responseData);
    } catch (err) {
      console.log(err);
    }

    // console.log(document.getElementById("contentDiv").innerHTML);
  };

  const addWSHandler = async (e) => {
    // document.getElementById("cl").innerHTML = document.getElementById(
    //   "contentDiv"
    // ).innerHTML;
    e.preventDefault();
    // let newContent = document.getElementById("cl").innerHTML;
    try {
      const response = await fetch(`http://localhost:5000/gettingHTML`);
      const responseData = await response.json();
      console.log(responseData.html);
      document.getElementById("cl").innerHTML = responseData.html;
    } catch (err) {
      console.log(err);
    }

    // console.log(document.getElementById("contentDiv").innerHTML);
  };

  const reload = (e) => {
    let ele = document.getElementById("try");
    document.getElementById("try").innerHTML = document.getElementById(
      "cl"
    ).innerHTML;
    ele.style.background = "pink";
    ele.style.width = "50rem";
    ele.style.height = "30rem";
    ele.style.marginTop = "2rem";
    ele.style.marginLeft = "5rem";
    ele.style.marginBottom = "5rem";
    ele.style.textAlign = "center";
    ele.style.boxShadow = "7px 7px 3px black";
  };

  const newhandler = (e) => {
    console.log(e.target.id);
    // document.onmousedown = updatefun;
    let dragValue;
    // function updatefun() {
    if (e.target.id === "1") {
      let element = document.getElementById(e.target.id);
      console.log("im from inp1", element);

      input1.current = e.target.value;

      console.log("im .current ", input1.current);

      element.onclick = function () {
        //dragValue = element;
        console.log("from lvivk eent");
      };
      // ele.value = e.target.value;
      // ele.onchange = updateValue;
      // ele.addEventListener("change", updateValue);

      // function updateValue(e) {
      //   console.log(e.target.value);
      // }

      // if (e.target.value === "good") console.log("fine ijfklm");

      // setinpval(e.target.value);
      // console.log(ele);
    }

    if (e.target.id === "2") {
      console.log("from inp2");
    } else {
      console.log("byebye");
    }
    // }
  };

  // const submitHandler = () => {
  //   let elele = document.getElementById("try");
  //   elele.chil;
  // };

  const tryHandler = () => {
    console.log(input1.current);
  };

  const style2 = {
    width: "50rem",
    height: "30rem",
    marginLeft: "5rem",
    background: "grey",
    cursor: "pointer",
    textAlign: "center",
    //background: #ff4382;
    // width: 50rem;
    // height: 30rem;
    // background: white;
    // margin-top: 5rem;
    // margin-right: -15rem;
  };

  const style3 = {
    width: "fix-content" + "20px",
    height: "200px" + "20px",
    marginLeft: "5rem",
    background: "grey",
    marginTop: "10px",
    //textAlign: "center",

    // width: "fix-content" + "20px",
    // height: "200px" + "20px",
    // marginLeft: "5rem",
    // background: "grey",
    // cursor: "pointer",
    // textAlign: "center",
  };
  console.log("im .current ", input1.current);
  return (
    <>
      <div
        id="cl"
        style={style2}
        contentEditable={true}
        suppressContentEditableWarning={true}
      >
        <h2>DAYS OF WEEK WORKSHEET</h2>
        <div id="input" style={{ border: "1px solid black" }}>
          <div>
            Today is monday.
            <br /> What day is tomorrow?{" "}
            <input
              id="1"
              onClick={handler}
              type="text"
              name="inp1"
              placeholder="id is 1"
              value={inputValue.inp1 || ""}
              onChange={handleChangeForInputs}
            />
            <br />
            What day was yesterday{" "}
            <input id="2" placeholder="id is 02" onClick={handler} />
          </div>
          <pre>
            Today is tuesday.
            <br /> What day is tomorrow? <input id="3" onClick={handler} />{" "}
            <br />
            What day was yesterday <input id="inter" onClick={handler} />
          </pre>
          <pre>
            Today is tuesday.
            <br /> What day is tomorrow? <input id="4" onClick={handler} />{" "}
            <br />
            What day was yesterday <input id="5" onClick={handler} />
          </pre>
        </div>
      </div>

      <button className="btnSaveWS" onClick={saveWSHandler}>
        SAVE
      </button>
      <button
        className="btnSaveWS"
        //onClick={addWSHandler}
        onClick={tryHandler}
        style={{ marginRight: "10rem" }}
      >
        ADD
      </button>
      <button
        className="btnSaveWS"
        onClick={reload}
        style={{ marginRight: "-0.025rem" }}
      >
        RELOAD
      </button>

      <div id="try" onClick={newhandler}>
        {" "}
        <button className="btnSaveWS" onClick={saveWSHandler}>
          SAVE
        </button>
        <button
          className="btnSaveWS"
          //onClick={addWSHandler}
          onClick={tryHandler}
          style={{ marginRight: "10rem" }}
        >
          ADD
        </button>
        <button
          className="btnSaveWS"
          onClick={reload}
          style={{ marginRight: "-0.025rem" }}
        >
          RELOAD
        </button>
      </div>
      {/* <button onClick={submithandler}></button> */}
    </>
  );
};

export default Blanks;
