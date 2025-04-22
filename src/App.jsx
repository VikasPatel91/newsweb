import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllNews from "./components/AllNews";
import Headline from "./components/Headline";
import Home from "./components/Home";
import Login from "./components/Login";
import NavigationBar from "./components/NavigationBar";
import Signup from "./components/Signup";
import About from "./components/About";
import Contact from "./components/Contact";
import Vision from "./components/Vision";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headlines" element={<Headline />} />
          <Route path="/all-News" element={<AllNews />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
