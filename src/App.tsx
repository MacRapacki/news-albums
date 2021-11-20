import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import News from "./pages/News/News";
import Albums from "./pages/Albums/Albums";
import NewsDetails from "./pages/NewsDetails/NewsDetails";

function App() {
  return (
    <div className="App">
      {" "}
      <NavBar />
      <Routes>
        {" "}
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/albums" element={<Albums />} />
      </Routes>
    </div>
  );
}

export default App;
