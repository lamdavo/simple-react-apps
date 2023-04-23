import "./App.css";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { useGlobalContext } from "./context";

function App() {
  return (
    <>
      <Home />
      <Sidebar />
      <Modal />
    </>
  );
}

export default App;
