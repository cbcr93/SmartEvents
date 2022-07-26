import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes />
    </>
  );
}

export default App;
