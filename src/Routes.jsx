import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeamCards from "./pages/TeamCard";
import Events from "./pages/Events";
import Sponsors from "./pages/Sponsors";
import Speakers from "./pages/Speakers";
import Schedule from "./pages/Schedule";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<TeamCards />} />
                <Route path="/events" element={<Events />} />
                <Route path="/sponsors" element={<Sponsors />} />
                <Route path="/speakers" element={<Speakers />} />
                <Route path="/schedule" element={<Schedule />} />

            </Routes>
        </Router>
    );
};

export default AppRoutes;
