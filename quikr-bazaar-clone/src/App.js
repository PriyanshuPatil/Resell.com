import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { applyDarkTheme, applyLightTheme } from "./redux/theme/theme.actions";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Components/Login/Login";
import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div>
      {/* navbar  */}
      <Navbar />
      {/* {"Unit-5  =>  UNIT-6"} */}
      {/* ALL-ROUTES COMPONENT  */}
      <AllRoutes />
    </div>
  );
}

export default App;
