import { useReducer } from "react";
import type { ChangeEvent } from "react";

interface State {
  radio: string; 
  area: number; 
}

const initialState: State = { radio: "", area: 0 };

function reducer(state: State, action: { name: string; value: string }): State {
  if (action.name === "radio") {
    const radio = parseFloat(action.value); 
    const area = isNaN(radio) ? 0 : Math.PI * Math.pow(radio, 2); 
    return { ...state, radio: action.value, area };
  }
  return state;
}

export default function AreaCirculo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ name: e.target.name, value: e.target.value });
  }

  return (
    <form>
      <div>
        <label htmlFor="radio">Radio:</label>
        <input
          id="radio"
          name="radio"
          value={state.radio}
          onChange={handleChange}
          type="number"
          placeholder="Introduce el radio"
        />
      </div>
      <div>
        <p>Área: {state.area.toFixed(2)}</p>
      </div>
    </form>
  );
}