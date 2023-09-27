import { useState } from "react";
import { Alert } from "./components/Alert";
import { Buttons } from "./components/Buttons";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div>
      {showAlert && (
        <Alert
          onClose={() => {
            setShowAlert(false);
          }}
        >
          Button Clicked
        </Alert>
      )}
      <Buttons
        color="primary"
        onClick={() => {
          setShowAlert(true);
        }}
      >
        My Button
      </Buttons>
    </div>
  );
}

export default App;
