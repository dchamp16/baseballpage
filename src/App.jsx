// import "./App.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Content";
import TopSideBar from "../components/TopSideBar";
import BottomSideBar from "../components/BottomSideBar";

function App() {
  return (
    <div className="App">
      <div className="grid-container">
        {/* navbar */}
        <NavBar />
        {/* main content */}
        <Content />
        {/* sidebar top */}
        <TopSideBar />
        {/* sidebar bottom */}
        <BottomSideBar />
        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
