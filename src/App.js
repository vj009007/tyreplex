import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Error } from "./pages/Error";
import { Breadcrumb } from "./components/breadcrumb";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
