import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import PrivateRoute from "./pages/auth/privateRoute";
import { AuthProvider } from "./pages/auth/authContext";
import Counter from "./pages/counter";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/counter"
            element={
              <PrivateRoute>
                <Counter />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
