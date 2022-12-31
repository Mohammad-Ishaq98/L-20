import { useState } from "react";
import MyComponent from "./Components/MyComponent";


function App() {

  const [show, setShow] = useState(true)

  return (
    <div>
      <div className="">{show && <MyComponent></MyComponent>}</div>
      <button type="button" onClick={() => setShow((prevValue) => !prevValue)}>
        {show ? "Hide Post" : "Show Post"}
      </button>
    </div>
  );
}

export default App;
