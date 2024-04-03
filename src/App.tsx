import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Componentes/NavBar";
import PostData from "./Pages/PostData";
import DeleteData from "./Pages/DeleteData";
import SearchData from "./Pages/SearchResult";
import Footer from "./Componentes/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<SearchData />} />
          <Route path="/Add" element={<PostData />} />
          <Route path="/Delete" element={<DeleteData />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
