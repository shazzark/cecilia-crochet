import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages";
import AboutPages from "./pages/AboutPages";
import ContactPages from "./pages/ContactPages";
import ProductPages from "./pages/ProductPages";
import AppLayoutPages from "./pages/AppLayoutPages";
import PageNotFound from "./pages/PageNotFound";
import ShopPages from "./pages/ShopPages";
import ItemdetailsPage from "./pages/ItemdetailsPage";
import { Toaster } from "react-hot-toast";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoutes";
import { AuthProvider } from "./Context/AuthProvider";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Main layout routes */}
            <Route path="/" element={<AppLayoutPages />}>
              <Route index element={<HomePages />} />
              <Route path="about" element={<AboutPages />} />
              <Route path="contact" element={<ContactPages />} />
              <Route path="product" element={<ProductPages />} />
              <Route
                path="admin"
                element={
                  <ProtectedRoute adminOnly={true}>
                    {" "}
                    <AdminPage />
                  </ProtectedRoute>
                }
              />

              {/* Protected Routes */}
              <Route
                path="shop"
                element={
                  <ProtectedRoute>
                    <ShopPages />
                  </ProtectedRoute>
                }
              />
              <Route
                path="profile"
                element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="settings"
                element={
                  <ProtectedRoute>
                    <SettingsPage />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/itemdetails/:id"
                element={
                  <ProtectedRoute>
                    {" "}
                    <ItemdetailsPage />
                  </ProtectedRoute>
                }
              />
              <Route path="payment" element={<Payment />} />
            </Route>

            {/* Auth routes outside layout */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
      </AuthProvider>
    </div>
  );
}
export default App;
