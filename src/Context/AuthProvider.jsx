import { useEffect, useState } from "react";
import { supabase } from "../servicies/supabase";
import { AuthContext } from "./authContex";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null); // ✅ NEW

  useEffect(() => {
    // Check initial session
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);

      if (session?.user) {
        await fetchUserRole(session.user.id);
      }

      setLoading(false);
    };

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);

      if (session?.user) {
        fetchUserRole(session.user.id);
      } else {
        setRole(null);
      }
    });

    getSession();

    return () => subscription.unsubscribe();
  }, []);

  // ✅ Function to fetch role from profiles table
  const fetchUserRole = async (userId) => {
    console.log("🔄 Fetching role for user ID:", userId);

    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("role, id") // ← Add id to selection for debugging
        .eq("id", userId)
        .maybeSingle();

      console.log("📊 Supabase response - Data:", data, "Error:", error);

      if (!error && data) {
        console.log("✅ Found profile with role:", data.role);
        setRole(data.role);
      } else {
        console.log("❌ No profile found or error, using default role: user");
        setRole("user");
      }
    } catch (err) {
      console.error("🔥 Error in fetchUserRole:", err);
      setRole("user");
    }
  };
  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      localStorage.clear();
      sessionStorage.clear();

      window.location.href = "/login";
    } catch (error) {
      console.error("Logout error:", error);
      window.location.href = "/login";
    }
  };

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
    role, // ✅ expose role
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
