import { useEffect, useState } from "react";
import { supabase } from "../servicies/supabase";
import { AuthContext } from "./authContex";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check initial session
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    getSession();

    return () => subscription.unsubscribe();
  }, []);

  // Fixed logout function
  // Fixed logout function in AuthProvider.jsx
  const logout = async () => {
    try {
      // Clear all Supabase sessions
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      // Clear all local storage and session storage
      localStorage.clear();
      sessionStorage.clear();

      // Redirect to login page
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error:", error);
      // Even if there's an error, redirect to login
      window.location.href = "/login";
    }
  };

  // Google login function
  const loginWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
    if (error) throw error;
  };

  const value = {
    user,
    loading,
    logout,
    loginWithGoogle,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
