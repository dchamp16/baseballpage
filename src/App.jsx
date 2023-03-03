import "./App.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Content";
import ContentBottom from "../components/ContentBottom";
import TopSideBar from "../components/TopSideBar";
import BottomSideBar from "../components/BottomSideBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row sticky-top head">
          <NavBar />
        </div>
        <div className="row">
          <Routes>
            <Route path="/" element={<Content />} />
          </Routes>
          <TopSideBar />
          <ContentBottom />
          <BottomSideBar />
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
