import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import { useInput } from "../hooks/useInput.js";

export default function Login() {
  const {
    value: emailValue,
    handleInputChange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));
  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(emailValue, passwordValue);
  }

  //   // const [enteredEmail, setEnteredEmail] = useState();
  //   // const [enteredPassword, setEnteredPassword] = useState();
  //   const [enteredValue, setEnteredValue] = useState({
  //     email: "",
  //     password: "",
  //   });
  //   const [didEdit, setDidEdit] = useState({
  //     email: false,
  //     password: false,
  //   });

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     // console.log("user email", enteredValue);
  //   }
  //   // function handleEmailChange(event) {
  //   //   setEnteredEmail(event.target.value);
  //   // }
  //   // function handlePasswordChange(event) {
  //   //   setEnteredEmail(event.target.value);
  //   // }
  //   function handleInputChange(identifier, value) {
  //     setEnteredValue((prvVal) => ({ ...prvVal, [identifier]: value }));
  //     setDidEdit((prevEdit) => ({
  //       ...prevEdit,
  //       [identifier]: false,
  //     }));
  //   }
  //   function handleInputBlur(identifier) {
  //     setDidEdit((prevEdit) => ({
  //       ...prevEdit,
  //       [identifier]: true,
  //     }));
  //   }
  //   const emailIsInvalid =
  //     didEdit.email &&
  //     !isEmail(enteredValue.email) &&
  //     !isNotEmpty(enteredValue.email);
  //   const passwordIsInvalid =
  //     didEdit.password && !hasMinLength(enteredValue.password, 6);

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          value={emailValue}
          error={emailHasError && <p>please enter the valid email</p>}
        />
        <Input
          label="password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          value={passwordValue}
          error={passwordHasError && <p>please enter the valid password</p>}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
