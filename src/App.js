import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Search from "./pages/Search"
import Results from "./pages/Results"

function App() {
  return (
    <Router>
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
