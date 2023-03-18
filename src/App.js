import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Search from "./pages/Search"
import Results from "./pages/Results"
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
    <div>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
