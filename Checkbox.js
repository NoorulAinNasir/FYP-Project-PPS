import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import useForm from "./utils/useForm";

const Checkbox = () => {
  // const [checked1, setChecked1] = useState(() => false);
  // const [checked2, setChecked2] = useState(() => false);
  const [showVAl, setShowVAL] = useState();
  const [myValues, setmyValues] = useState();
  const [checkedArray, setcheckedArray] = useState([]);
  const [inputValue, handleChangeForInputs, checked1, checked2] = useForm();
  let arrray = [];

  // useEffect(() => {
  //   submitHandler();
  // }, [showVAl]);

  useEffect(() => {
    inputChangeHandler();
  }, [checked1, checked2, myValues]);

  // const submitHandler = () => {
  //   if (inputValue.vehicle1) {
  //setChecked1(() => true);
  // setShowVAL(inputValue.vehicle1);
  // setcheckedArray(...checkedArray, checkedArray.push(inputValue.vehicle1));
  // arrray.push(showVAl);

  //   setcheckedArray([...arrray]);

  //   console.log(checkedArray);
  // }
  // if (inputValue.vehicle2) {
  //  setChecked2(() => true);
  // setShowVAL(inputValue.vehicle2);
  // setcheckedArray(...checkedArray, checkedArray.push(inputValue.vehicle1));
  //   arrray.push(showVAl);

  //   setcheckedArray([...arrray]);

  //   console.log(checkedArray.length);
  // }
  // console.log(checked);

  // console.log(inputValue.vehicle1);
  //console.log(inputValue.vehicle2);
  // };

  const inputChangeHandler = (e) => {
    if (checked1) {
      setmyValues(inputValue.vehicle1);
      return setcheckedArray([...checkedArray, { item: myValues }]);
    }
    if (checked2) {
      setmyValues(inputValue.vehicle2);
      return setcheckedArray([...checkedArray, { item: myValues }]);
    }
    if (!checked1) {
      return setmyValues("");
    }
    if (!checked2) {
      return setmyValues("");
    }
    if (checked1 && checked2) {
      setmyValues(inputValue.vehicle1);
      return setcheckedArray([...checkedArray, { item: "" }]);
    }
  };

  return (
    <>
      <div>
        <input
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="i have a BIKE"
          // checked={checked1 || false}
          //  onChange={handleChangeForInputs}
          onChange={
            // setChecked(true);
            handleChangeForInputs
          }
        />
        <label for="vehicle1"> I have a bike</label>
        <br />
        <input
          type="checkbox"
          id="vehicle2"
          name="vehicle2"
          // checked={checked2 || false}
          value="i have a CAR"
          onChange={
            //setChecked(true);
            handleChangeForInputs
          }
        />
        <label for="vehicle2"> I have a car</label>
        <br />
        {/* <input
          type="button"
          id="btn"
          name="btn"
          value="SUBMIT"
          onClick={submitHandler}
        /> */}
      </div>

      {/* {checked1 && <p>im shown</p>}
      {checked2 && <p>im part2</p>} */}

      <input
        type="text"
        value={checkedArray.map((c) => c.item) || " "}
        onChange={inputChangeHandler}
      />

      <p> {checkedArray.map((c) => c.item)}</p>
      <p> sdjfjsh</p>
    </>
  );
};

export default Checkbox;
