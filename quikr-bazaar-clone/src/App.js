// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { applyDarkTheme, applyLightTheme } from './redux/theme/theme.actions';
import { useDispatch, useSelector } from "react-redux";
import PostAd from './Components/PostAd/PostAd';
function App() {
  const dispatch=useDispatch();
  const theme=useSelector((store)=>store.Theme.theme)
  return (
    <div >
      {/* navbar  */}
      <Navbar />
      <PostAd/>
  {/* {"Unit-5  =>  UNIT-6"} */}
    </div>
  );
}

export default App;

