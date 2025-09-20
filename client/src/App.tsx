import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Upload from "./pages/Upload";
import Profile from "./pages/Profile";
import Menu from "./pages/Menu";
import PostDetail from "./pages/PostDetail";
import NotFound from "./pages/NotFound";
import LoginRequiredPage from "./pages/LoginRequiredPage";

const queryClient = new QueryClient();

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [showLoginAlert, setShowLoginAlert] = useState(false);

  // Show alert once after login
  useEffect(() => {
    if (isAuthenticated) {
      setShowLoginAlert(true);
      const timer = setTimeout(() => setShowLoginAlert(false), 3000); // hide after 3s
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Small login success alert */}
          {showLoginAlert && (
            <div
              style={{
                position: "fixed",
                top: 10,
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#22c55e",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "6px",
                zIndex: 1000,
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              🎉 Congrats for successful login!
            </div>
          )}

          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/menu" element={<Menu />} />

            {/* Protected routes */}
            <Route
              path="/store"
              element={
                isAuthenticated ? <div>Store</div> : <LoginRequiredPage message="Login to go shopping" />
              }
            />
            <Route
              path="/messages"
              element={
                isAuthenticated ? <div>Messages</div> : <LoginRequiredPage message="Login to send messages" />
              }
            />
            <Route
              path="/profile"
              element={
                isAuthenticated ? <Profile /> : <LoginRequiredPage message="Login to show yourself" />
              }
            />
            <Route
              path="/upload"
              element={
                isAuthenticated ? <Upload /> : <LoginRequiredPage message="Login to upload your post" />
              }
            />

            {/* Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
