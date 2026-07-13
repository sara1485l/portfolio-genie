import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BuilderHeader from "../components/builder/BuilderHeader";
import BuilderSidebar from "../components/builder/BuilderSidebar";

import AboutForm from "../components/builder/AboutForm";
import SkillsForm from "../components/builder/SkillsForm";
import ProjectsForm from "../components/builder/ProjectsForm";
import EducationForm from "../components/builder/EducationForm";
import ExperienceForm from "../components/builder/ExperienceForm";
import SocialLinksForm from "../components/builder/SocialLinksForm";

import type { Portfolio } from "../types/portfolio";

import {
  savePortfolio,
  updatePortfolio,
  getMyPortfolio,
} from "../services/portfolio.service";

const Builder = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] =
    useState("about");

  const [loading, setLoading] =
    useState(true);

  const [saving, setSaving] =
    useState(false);

  const [isNew, setIsNew] =
    useState(true);

  const [portfolio, setPortfolio] =
    useState<Portfolio>({
      title: "",
      about: "",
      skills: [],
      projects: [],
      education: [],
      experience: [],
      socialLinks: {
        github: "",
        linkedin: "",
        portfolio: "",
      },
    });

  async function loadPortfolio() {
    try {
      const res = await getMyPortfolio();

      if (res.data.data) {
        setPortfolio(res.data.data);
        setIsNew(false);
      }
    } catch {
      setIsNew(true);
    } finally {
      setLoading(false);
    }
  }

  async function save() {
    try {
      setSaving(true);

      if (isNew) {
        await savePortfolio(portfolio);
        setIsNew(false);
      } else {
        await updatePortfolio(portfolio);
      }

      alert("Portfolio saved successfully.");
    } catch (err) {
      console.error(err);
      alert("Failed to save portfolio.");
    } finally {
      setSaving(false);
    }
  }

  useEffect(() => {
    let ignore = false;

    async function fetchPortfolio() {
      try {
        const res = await getMyPortfolio();

        if (!ignore && res.data.data) {
          setPortfolio(res.data.data);
          setIsNew(false);
        }
      } catch {
        if (!ignore) {
          setIsNew(true);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchPortfolio();

    return () => {
      ignore = true;
    };
  }, []);

  function renderForm() {
    switch (currentStep) {
      case "about":
        return (
          <AboutForm
            portfolio={portfolio}
            setPortfolio={setPortfolio}
          />
        );

      case "skills":
        return (
          <SkillsForm
            portfolio={portfolio}
            setPortfolio={setPortfolio}
          />
        );

      case "projects":
        return (
          <ProjectsForm
            portfolio={portfolio}
            setPortfolio={setPortfolio}
          />
        );

      case "education":
        return (
          <EducationForm
            portfolio={portfolio}
            setPortfolio={setPortfolio}
          />
        );

      case "experience":
        return (
          <ExperienceForm
            portfolio={portfolio}
            setPortfolio={setPortfolio}
          />
        );

      case "social":
        return (
          <SocialLinksForm
            portfolio={portfolio}
            setPortfolio={setPortfolio}
          />
        );

      default:
        return null;
    }
  }

  if (loading) {
    return (
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  return (
    <div
      className="container-fluid py-4"
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      <BuilderHeader
        saving={saving}
        onSave={save}
        onPreview={() => navigate("/preview")}
      />

      <div className="row">

        <div className="col-lg-3 mb-4">
          <BuilderSidebar
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </div>

        <div className="col-lg-9">
          {renderForm()}
        </div>

      </div>
    </div>
  );
};

export default Builder;