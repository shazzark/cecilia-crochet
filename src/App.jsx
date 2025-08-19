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

function App() {
  return (
    <div>
      {/* Wrap your entire app with AuthProvider */}
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayoutPages />}>
              <Route index element={<HomePages />} />
              <Route path="about" element={<AboutPages />} />
              <Route path="contact" element={<ContactPages />} />
              <Route path="product" element={<ProductPages />} />

              {/* Protected Shop Route */}
              <Route
                path="shop"
                element={
                  <ProtectedRoute>
                    <ShopPages />
                  </ProtectedRoute>
                }
              />

              <Route path="/itemdetails/:id" element={<ItemdetailsPage />} />
              <Route path="payment" element={<Payment />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

        {/* Toast Notifications Provider - should be at root level */}
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
