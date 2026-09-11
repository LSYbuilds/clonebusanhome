import { Routes, Route } from "react-router-dom";
import Header from "./components/main/MainHeader";
import Footer from "./components/main/MainFooter";
import Mainlayout from "./layout/MainLayout";
import DepartLayout from "./layout/DepartLayout";
import Main from "./pages/main/MainPage";
import "./App.css";
import { Wrap } from "./style/Layout_styled";
import DepartMain from "./pages/depart/DepartMain";

function App() {
  return (
    <Wrap>
      <Routes>
        <Route element={<Mainlayout />}>
          <Route path="/" element={<Main />}></Route>
        </Route>
        <Route element={<DepartLayout />}>
          <Route path="/depart" element={<DepartMain />}></Route>
        </Route>
      </Routes>
    </Wrap>
  );
}

export default App;
