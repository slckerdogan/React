import { useReducer } from 'react'
import './App.css'

function reducer(state, action) {
  switch (action.type) {
    case "setNumber1":
      return { ...state, number1: action.payload };
    case "setNumber2":
      return { ...state, number2: action.payload };
    case "addition":
      return { ...state, result: action.payload };
    case "substraction":
      return { ...state, result: action.payload };
    case "multiplication":
      return { ...state, result: action.payload };
    case "division":
      return { ...state, result: action.payload };
      default:
        throw new Error("Invalid action type!");
  }

}

const initialState = {
  number1:"",
  number2: "",
  result:""
}

function App() {


  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumberOneChange = (e) => {
    dispatch({ type: "setNumber1", payload: Number(e.target.value) })
  }

  const handleNumberTwoChange = (e) => {
    dispatch({ type: "setNumber2", payload: Number(e.target.value) })
  }

  const addition = () => {
    dispatch({ type: "addition", payload: state.number1 + state.number2 })
  }

  const substraction = () => {
    dispatch({ type: "substraction", payload: state.number1 - state.number2 })
  }

  const multiplication = () => {
    dispatch({ type: "multiplication", payload: state.number1 * state.number2 })
  }

  const division = () => {
    dispatch({ type: "division", payload: state.number1 / state.number2 })
  }
  return (
    <>
      <h1>Arithmetic Operations</h1>
      <label style={{ fontSize: "20px" }}>First Number: </label><input type="number" onChange={handleNumberOneChange} value={state.number1} style={{ fontSize: "20px" }} />
      <br></br><br></br>
      <label style={{ fontSize: "20px" }}>Second Number: </label><input type="number" onChange={handleNumberTwoChange} value={state.number2} style={{ fontSize: "20px" }} />
      <br></br><br></br>
      <p style={{ fontSize: "20px" }}>Result:{state.result}</p>
      <button style={{ fontSize: "20px" }} onClick={addition}>Addition</button>
      <button style={{ fontSize: "20px" }} onClick={substraction}>Substraction</button>
      <button style={{ fontSize: "20px" }} onClick={multiplication}>Multiplication</button>
      <button style={{ fontSize: "20px" }} onClick={division}>Division</button>
    </>
  )
}

export default App
