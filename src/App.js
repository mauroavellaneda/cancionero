import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sections from "./components/Sections/Sections";

import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <Router>
        <Navbar />
        <Sections />
      </Router>
    </Provider>
  );
}

export default App;
