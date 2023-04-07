import { useState } from "react";

function useForm(initValues) {
  const [values, setValues] = useState(initValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute("name"), e.target.value);
  }

  function clearForm() {
    setValue(initValues);
  }

  return {
    handleChange,
    values,
    clearForm,
  };
}

export default useForm;
