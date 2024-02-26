import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import LikedProvider from "./context/Liked";

import Favorites from "./views/Favorites";
import Home from "./views/Home";

// const PHOTO_URL = "/photos.json";

const App = () => {

  return (
    <div>
      <LikedProvider>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favoritos"
            element={<Favorites />}
          />
        </Routes>
      </LikedProvider>
    </div>
  );
};
export default App;
