import "./App.css";
import Footer from "./Components/Footer/Footer";
import Underfooter from "./Components/Footer/Underfooter";
import Navbar from "./Components/Navbar/Navbar";

import AllRoutes from "./Routes/AllRoutes";

function App() {
  return (
    <div>
      {/* navbar  */}
      <Navbar />
      {/* {"Unit-5  =>  UNIT-6"} */}
      {/* ALL-ROUTES COMPONENT  */}
      <AllRoutes />
      {/* <Footer />
      <Underfooter /> */}
    </div>
  );
}

export default App;
