import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home"
import Hot from "./views/Hot"
import Regular from "./views/Regular"
import Navbar from "./views/Navbar";
import NewMeme from "./views/NewMeme";
import Error from "./views/Error";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route index
            element={<Home />} />
          <Route path="/hot" element={<Hot />} />
          <Route path="/regular" element={<Regular />} />
          <Route path="/new-meme" element={<NewMeme />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
