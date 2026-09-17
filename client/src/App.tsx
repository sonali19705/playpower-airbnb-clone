import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import ListingPage from "./pages/ListingPage";
import PhotoTourPage from "./pages/PhotoTourPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/photos" element={<PhotoTourPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;