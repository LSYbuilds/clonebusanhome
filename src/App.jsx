import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/Mainpage";
import "./App.css";
import { Wrap } from "./style/Layout_styled";

function App() {
  return (
    <Wrap>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </Wrap>
  );
}

export default App;
