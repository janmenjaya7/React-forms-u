// import { useState } from "react";

import { useRef, useState } from "react";
import validator from "validator";
import { isEmail } from "validator";
import { isStrongPassword } from "validator";
export default function SetLogin() {
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [PasswordInvalid, setPasswordInvalid] = useState(false);
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    // console.log("user email", enteredValue);
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    // const PasswordInvalid = ;
    // console.log(enteredEmail, enteredPassword);
    // setEnterval({
    //   email: "",
    //   password: "",
    // });
    // email.current.value="",
    const emailIsvalide = enteredEmail.includes("@");
    if (!emailIsvalide) {
      setEmailIsInvalid(true);
      return;
    }
    setEmailIsInvalid(false);
    console.log("sending HTTP request...");
    // const emailIsvalide = validator;
    // if (!validator.isEmail(enteredEmail)) {
    //   setEmailIsInvalid(true);
    // }
    // console.log("enteredEmail==", enteredEmail);
    // if (
    //   !validator.isStrongPassword(enteredPassword, [
    //     {
    //       minLength: 6,
    //       minLowercase: 1,
    //       minUppercase: 1,
    //       minNumbers: 1,
    //       minSymbols: 1,
    //       returnScore: false,
    //       pointsPerUnique: 1,
    //       pointsPerRepeat: 0.5,
    //       pointsForContainingLower: 10,
    //       pointsForContainingUpper: 10,
    //       pointsForContainingNumber: 10,
    //       pointsForContainingSymbol: 10,
    //     },
    //   ])
    // ) {
    //   setPasswordInvalid(true);
    // }
    // console.log("enteredPassword==", enteredPassword);
    // setPasswordInvalid(isStrongPassword(enteredPassword));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} requiredno />
          <div className="control-error">
            {emailIsInvalid && <p>please enter a valid email adress</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
            // minLength={6}
          />
          <div className="control-error">
            {PasswordInvalid && <p>please enter a valid pa</p>}
          </div>
        </div>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button" disabled={!PasswordInvalid}>
          Login
        </button>
      </p>
    </form>
  );
}
