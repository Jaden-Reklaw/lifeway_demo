
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<HomePage />}/>
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
  
 
}

export default App;
