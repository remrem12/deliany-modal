import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowModal(true)}>Button</button>
      <Modal {...{ showModal, setShowModal }} />
    </div>
  );
}

export default App;
