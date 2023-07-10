import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminTemplate from "./pages/AdminTemplate";
import HomeTemplate from "./pages/HomeTemplate";
import HomePage from "./pages/HomeTemplate/HomePage";
import AboutPage from "./pages/HomeTemplate/AboutPage";
import ListMoviePage from "./pages/HomeTemplate/ListMoviePage";
import Dashboard from "./pages/AdminTemplate/Dashboard";
import AddUser from "./pages/AdminTemplate/AddUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HomeTemplate - localhost:3000 */}
        <Route path="" element={<HomeTemplate />}>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="list-movie" element={<ListMoviePage />} />
        </Route>

        {/* Admin Template */}
        <Route path="admin" element={<AdminTemplate />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-user" element={<AddUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
