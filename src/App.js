import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar1 from "./Components/Navbars/Navbar1";
import Index from './Pages/Index';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Index />} />{" "}
          <Route path="/Navbars/Navbar1" exact element={<Navbar1 />} />{" "}
          <Route render={()=><div>404 : Page Not Found</div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App