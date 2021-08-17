import { useState } from "react";

export const useForm = <T extends Object>(initState: T) => {
  const [state, setState] = useState(initState);

  const onChange = (field: keyof T) => (value: string) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  const setFormValue = (form: T) => {
    setState({
      ...state,
      ...form,
    });
  };

  return {
    ...state,
    form: state,
    onChange,
    setFormValue,
  };
};
