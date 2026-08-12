import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/MainPage";
import "./App.css";
import { Wrap } from "./style/Layout_styled";

function App() {
  return (
    <Wrap>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </Wrap>
  );
}

export default App;
