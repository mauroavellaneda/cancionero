import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sections from "./components/Sections/Sections";

import { ContextController } from "./context";

function App() {
  return (
    <ContextController>
      <Router>
        <Navbar />
        <Sections />
      </Router>
    </ContextController>
  );
}

export default App;
