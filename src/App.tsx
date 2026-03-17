import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Tokenomics from "./pages/Tokenomics.tsx";
import NotFound from "./pages/NotFound.tsx";
import Layout from "./Layout";


function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/tokenomics"
        element={
          <Layout>
            <Tokenomics />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App
