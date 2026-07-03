import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeedProvider } from "./context/FeedProvider";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Articles } from "./pages/Articles";
import { ArticleDetail } from "./pages/ArticleDetail";
import { Subscribe } from "./pages/Subscribe";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <FeedProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articulos" element={<Articles />} />
          <Route path="/articulos/:index" element={<ArticleDetail />} />
          <Route path="/suscribirse" element={<Subscribe />} />
        </Routes>
        <Footer />
      </FeedProvider>
    </BrowserRouter>
  );
}

export default App;
