import { HashRouter, Routes, Route, Link } from "react-router-dom";
import HomeCountdown from "./pages/HomeCountdown";
import DonePage from "./pages/DonePage";
import NotFound from "./pages/NotFound";
 
export default function App() {
  return (
<HashRouter>
<nav style={{ padding: 12, display: "flex", gap: 12 }}>
<Link to="/">Home</Link>
<Link to="/done">Done</Link>
</nav>
 
      <Routes>
<Route path="/" element={<HomeCountdown />} />
<Route path="/done" element={<DonePage />} />
<Route path="*" element={<NotFound />} />
</Routes>
</HashRouter>
  );
}