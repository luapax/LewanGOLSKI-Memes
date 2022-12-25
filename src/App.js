import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Hot from "./components/Hot"
import Regular from "./components/Regular"
import Navbar from "./components/Navbar";
import NewMeme from "./components/NewMeme";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hot" element={<Hot />}></Route>
          <Route path="/regular" element={<Regular />}></Route>
          <Route path="/newMeme" element={<NewMeme />}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
