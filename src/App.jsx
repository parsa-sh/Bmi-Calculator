import { useState } from "react";

function App() {

  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)
  const [bmi,setBMI] = useState(null)

  const calculateBmi =()=>{
    const heightInMeter = height / 100
    const bmiValue = (weight / (heightInMeter * heightInMeter)).toFixed(2)
    setBMI(bmiValue)
  }

  return(
  <div>
    {/*  */}
  </div>
) ;
}

export default App;
