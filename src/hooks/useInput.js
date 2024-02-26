import { useState } from "react";
export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);
  const valueIsValid = validationFn(enteredValue);
  function handleInputChange(event) {
    setEnteredValue(event.target.value);

    setDidEdit(false);
  }
  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
// if (!validEmail) {
//   errors.email = 'Required'
// } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(validEmail)) {
//   errors.email = 'Invalid email address'
// }
