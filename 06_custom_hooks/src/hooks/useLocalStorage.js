import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const valueStored = localStorage.getItem(key);
    if (valueStored !== null) {
      return JSON.parse(valueStored);
    }

    return initialValue;
  });

  const updateValue = (newValue) =>{
    setValue(newValue)

    localStorage.setItem(
        key ,
        JSON.stringify(newValue)
    )
  }
  return [value , updateValue];

}

export default useLocalStorage