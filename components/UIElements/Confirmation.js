import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import ConfirmationModal from "react-modal";
import { useLocalStorage } from "../../LocalStorage/Local";
import "./confirmation.css";

const Confirmation = () => {
  const [Uemail, setEMail] = useState("umayhaani981@gmail.com");
  const [email, setuserEmail] = useLocalStorage("email", "null");
  const history = useHistory();

  const confirmHandler = async () => {
    //  console.log("from confiramation " + demo.UEMAIL);

    try {
      const response = await fetch("http://localhost:5000/confirmEmail", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          Validate: true,
        }),
      });

      const responseData = await response.json();
      console.log(responseData.validated);
      if (responseData) {
        history.push("/");
        //   seterrModal(true);
        //   setError(() => responseData.err);
        // }
      }
    } catch (err) {
      console.log(err);
    }

    // check.current = true;
    // Validate = check.current;
  };
  // console.log(email);
  return (
    <div>
      <ConfirmationModal
        isOpen={true}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            background: "0 0 15 rgba(0,0,0,0.2)",
          },

          content: {
            color: "green",
            width: "350px",
            height: "330px",
            marginLeft: "30rem",

            marginTop: "6rem",
            paddingTop: "10p",
            textAlign: "center",

            fontWeight: "bolder",
            boxShadow: " 5px 5px 10px   rgb(128, 111, 111)",
          },
        }}
      >
        <h2 id="h2">EMAIL VERFICATION DONE</h2>

        <p id="p">please click on</p>

        {/* <NavLink to="/"> */}
        <button onClick={confirmHandler} className="confirmLoginbtn">
          LOGIN
        </button>
        {/* </NavLink> */}
      </ConfirmationModal>
    </div>
  );
};

export default Confirmation;
