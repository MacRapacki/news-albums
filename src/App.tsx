import { Routes, Route } from "react-router-dom";

import News from "./pages/News/News";
import Albums from "./pages/Albums/Albums";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      {" "}
      <NavBar />
      <Routes>
        {" "}
        <Route path="/" element={<News />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </div>
  );
}

export default App;
