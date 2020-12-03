import { useState } from 'react';

/**
 *
 * Custom hook to create controlled form component.
 *
 * @param {Object} initialState State object with name of each form input as keys and
 * corresponding initial state as values.
 * @return {Array} Array containing values and onChange function respectively.
 */
const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const onChange = (event) => {
    setValues((previousValues) => ({ ...previousValues, [event.target.name]: event.target.value }));
  };

  return [values, onChange];
};

export default useForm;
