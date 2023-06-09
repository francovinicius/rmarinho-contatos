import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from './Components/Banner'
import About from './Components/About'
import Links from './Components/Links'
import Footer from "./Components/Rodape";

function App() {
  return (
    <BrowserRouter>

    <Banner />

      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="/About" element={<About />} />
      </Routes>

    <Footer />
    </BrowserRouter>
  );
}

export default App;
