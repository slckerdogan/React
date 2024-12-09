import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");

  let reload = () => {
    window.location.reload();
  };

  const handleCalculate = () => {

    let weightt = Number(weight);
    let heightt = Number(height);

    let resultt = heightt + weightt;
    console.log(resultt)

    if ((isNaN(weightt) || (weightt === "") || (weightt <= 0)) || (isNaN(heightt) || (heightt === "") || (heightt <= 0))) {
      window.alert("Please enter the correct form of height and weight");
      reload = reload();
    }

    else {
      let result = weightt / ((heightt / 100) * 2);

      if (result.toFixed(1) < 18.5) {
        setResult(result.toFixed(1));
        setMessage("You are weak")
      }

      else if (result.toFixed(1) < 24.9 && result.toFixed(1) >= 18.5) {
        setResult(result.toFixed(1));
        setMessage("You are normal")
      }

      else if (result.toFixed(1) < 29.9 && result.toFixed(1) >= 24.9) {
        setResult(result.toFixed(1));
        setMessage("You are fat")
      }

      else if (result.toFixed(1) < 39.9 && result.toFixed(1) >= 29.9) {
        setResult(result.toFixed(1));
        setMessage("You are obese")
      }

      else {
        setResult(result.toFixed(1));
        setMessage("Morbid Obesity Risk")
      }
    }

  }

  return (
    <div className="container">
      <div style={{ textAlign: "center", backgroundColor: "wheat", border: "5px solid saddlebrown", boxSizing: "border-box", margin: "auto", padding: "15px" }}>
        <label className="font">Please enter your weight (kg)</label>
        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} /><br></br><br></br>
        <label className="font">Please enter your height (cm)</label>
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} /><br></br><br></br>
        <button onClick={handleCalculate}>Calculate</button><br></br><br></br>
        <button onClick={() => reload()}>Delete</button><br></br><br></br>
        <h5><span id="info">Your BMI : {result}</span></h5>
        <h5><span id="info">Your Situation : {message}</span></h5>
      </div>
    </div>

  )
}

export default App;
