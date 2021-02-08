import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sections from "./components/Sections/Sections";

function App() {
  return (
    <Router>
      <Navbar />
      <Sections />
    </Router>
  );
}

export default App;
