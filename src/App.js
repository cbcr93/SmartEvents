import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import { CssBaseline } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 900);
  }, []);

  return (
    <>
      {count < 3 ? (
        <LoadingScreen />
      ) : (
        <>
          <CssBaseline />
          <ToastContainer />
          <Routes />
        </>
      )}
    </>
  );
}

export default App;
