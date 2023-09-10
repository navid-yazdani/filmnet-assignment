import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Layout from "./layout";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
