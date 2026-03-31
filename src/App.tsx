import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Renovations from "./pages/Renovations.tsx";
import Membership from "./pages/Membership.tsx";
import MembershipTerms from "./pages/MembershipTerms.tsx";
import Handyman from "./pages/Handyman.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/renovations" element={<Renovations />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/membership/terms" element={<MembershipTerms />} />
          <Route path="/handyman" element={<Handyman />} />
          <Route path="/contact" element={<Contact />} />
          {/* Legacy redirects */}
          <Route path="/services" element={<Renovations />} />
          <Route path="/handyman-plans" element={<Handyman />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
