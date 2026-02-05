import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import { AuthProvider } from "@/hooks/useAuth";
 import { useMaintenanceMode } from "@/hooks/useMaintenanceMode";
 import Maintenance from "./pages/Maintenance";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DigitalYearbook from "./pages/DigitalYearbook";
import About from "./pages/About";
import AdminAuth from "./pages/AdminAuth";
import AdminYearbooks from "./pages/AdminYearbooks";

const queryClient = new QueryClient();

 const AppRoutes = () => {
   const { isMaintenanceMode, isPathAllowed } = useMaintenanceMode();
   const pathname = window.location.pathname;
 
   // Show maintenance page if maintenance mode is enabled and path is not allowed
   if (isMaintenanceMode && !isPathAllowed(pathname)) {
     return <Maintenance />;
   }
 
   return (
     <Routes>
       <Route path="/" element={<Index />} />
       <Route path="/about" element={<About />} />
       <Route path="/digital-yearbook" element={<DigitalYearbook />} />
       <Route path="/admin" element={<AdminAuth />} />
       <Route path="/admin/yearbooks" element={<AdminYearbooks />} />
       {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
       <Route path="*" element={<NotFound />} />
     </Routes>
   );
 };
 
 const App = () => (
   <QueryClientProvider client={queryClient}>
     <AuthProvider>
       <TooltipProvider>
         <Toaster />
         <Sonner />
         <BrowserRouter>
           <AppRoutes />
         </BrowserRouter>
       </TooltipProvider>
     </AuthProvider>
   </QueryClientProvider>
 );

export default App;
