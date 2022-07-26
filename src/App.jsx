import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="SignUp" element={<SignUp redirect="SignIn" />} />
          <Route path="SignIn" element={<SignIn redirect="/" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
