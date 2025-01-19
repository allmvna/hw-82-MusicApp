import {Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.tsx";
import Artists from "./features/Artists/Artists.tsx";
import Albums from "./features/Albums/Albums.tsx";
import {Alert, Container} from "@mui/material";
import Tracks from "./features/Tracks/Tracks.tsx";
import RegisterUser from "./features/Users/RegisterUser.tsx";
import LoginUser from "./features/Users/LoginUser.tsx";

const App = () => {
  return (
      <>
          <header>
              <Navbar/>
          </header>
          <main>
              <Container>
                  <Routes>
                      <Route path="/" element={<Artists/>}/>
                      <Route path="/users" element={<RegisterUser/>}/>
                      <Route path="/login" element={<LoginUser/>} />
                      <Route path="/artists" element={<Artists/>}/>
                      <Route path="/albums/:artistName" element={<Albums />} />
                      <Route path="/albums/:albumName/tracks" element={<Tracks />} />
                      <Route path="*" element={<Alert severity="error">Not found</Alert>}/>
                  </Routes>
              </Container>
          </main>
      </>
  );
};
export default App;
