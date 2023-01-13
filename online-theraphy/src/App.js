import "./App.css";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./routes/AboutUs";
import Psychologists from "./routes/Psychologists";
import Tests from "./routes/Tests";
import FAQ from "./routes/FAQ";
import LogIn from "./routes/LogIn";
import SignIn from "./routes/SignIn";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/psychologists" element={<Psychologists />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>

      <Nav />
    </div>
  );
};

export default App;
