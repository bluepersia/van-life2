import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout/Layout";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Vans from "./components/pages/vans/Vans";
import VanDetail from "./components/pages/van-detail/VanDetail";
import Host from "./components/pages/host/Host";
import Dashboard from "./components/pages/host/Dashboard";
import Income from "./components/pages/host/Income";
import HostVans from "./components/pages/host/Vans";
import Reviews from "./components/pages/host/Reviews";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="host" element={<Host />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
