import { useState, ChangeEvent } from 'react';

/**
 * Form state interface
 */
interface FormState {
  [key: string]: string;
}

/**
 *
 * Custom hook to create controlled form component.
 *
 * @param {Object} initialState State object with name of each form input as keys and
 * corresponding initial state as values.
 * @return {Array} Array containing values and onChange function respectively.
 */
const useForm = (
  initialValues: FormState,
): [FormState, (event: ChangeEvent<HTMLInputElement>) => void] => {
  const [values, setValues] = useState<FormState>(initialValues);

  const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValues((previousValues) => ({ ...previousValues, [event.target.name]: event.target.value }));
  };

  return [values, onChange];
};

export default useForm;
