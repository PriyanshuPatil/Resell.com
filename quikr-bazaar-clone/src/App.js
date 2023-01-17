import logo from './logo.svg';
import './App.css';
import { applyDarkTheme, applyLightTheme } from './redux/theme/theme.actions';
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch=useDispatch();
  const theme=useSelector((store)=>store.Theme.theme)
  return (
    <div >
  {"Unit-5  =>  UNIT-6"}
    </div>
  );
}

export default App;
