import { Routes, Route } from "react-router-dom";

import Layout from "../layouts/Layout";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Builder from "../pages/Builder";
import Preview from "../pages/Preview";
import PublicPortfolio from "../pages/PublicPortfolio";

import ResumeAI from "../pages/ResumeAI";
import CoverLetterAI from "../pages/CoverLetterAI";
import ATSOptimizer from "../pages/ATSOptimizer";
import ImproveTextAI from "../pages/ImproveTextAI";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Routes with Layout */}
      <Route element={<Layout />}>

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/builder"
          element={<Builder />}
        />

        <Route
          path="/preview"
          element={<Preview />}
        />

        <Route
          path="/resume-ai"
          element={<ResumeAI />}
        />

        <Route
          path="/cover-ai"
          element={<CoverLetterAI />}
        />

        <Route
          path="/ats"
          element={<ATSOptimizer />}
        />

        <Route
          path="/improve-ai"
          element={<ImproveTextAI />}
        />

      </Route>

      {/* Public Portfolio */}
      <Route
        path="/u/:username"
        element={<PublicPortfolio />}
      />

    </Routes>
  );
};

export default AppRoutes;