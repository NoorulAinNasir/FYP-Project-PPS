import { useState } from "react";

const useForm = () => {
  const [state, setState] = useState({});

  const handleChangeForInputs = (e) => {
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
    //console.log(e.target.value);
  };

  const clear = () => {
    setState(" ");
  };

  return [state, handleChangeForInputs, clear];
};

export default useForm;
