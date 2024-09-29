import {
  Button,
  Container,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css"

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState(null);


  const calculateBmi = () => {
    const heightInMeter = height / 100;
    const bmiValue = (weight / (heightInMeter * heightInMeter)).toFixed(2);
    setBMI(bmiValue);
  };

  return (
    <div className="mainDivider">
      <Container bgColor="white" border="2px solid grey" borderRadius="18px" padding="40px">
        <Text textAlign="center" fontWeight="600" fontSize="48px">BMI Calculator</Text>
        <VStack marginTop="50px">
          <HStack>
            <Text fontWeight="500">Height (cm)</Text>
            <Input type="number"  placeholder="Enter your height" border="2px solid #b8b8b8" onChange={(e)=>setHeight(e.target.value)}/>
          </HStack>
          <HStack marginTop="20px">
            <Text fontWeight="500">Weight (kg)</Text>
            <Input type="number"  placeholder="Enter your weight"  border="2px solid #b8b8b8" onChange={(e)=>setWeight(e.target.value)}/>
          </HStack>
          <Button marginTop="30px" border="4px solid #b8b8b8" borderRadius="12px" padding="20px" fontWeight="700" onClick={calculateBmi}>Calculate BMI</Button>
          <HStack marginTop="30px">
            <Text fontWeight="600" fontSize="24px">BMI :</Text>
            {bmi && <HStack><Text>Your BMI is</Text><Text fontWeight="700" fontSize="18px" bg="#b3b3b387" padding="1px 5px" borderRadius="7px">{bmi}</Text></HStack>}
          </HStack>
          <HStack marginTop="12px">
            <Text fontWeight="600" fontSize="24px">Result :</Text>
            <Text fontSize="24px">Fat</Text>
          </HStack>
        </VStack>
      </Container>
    </div>
  );
}

export default App;
