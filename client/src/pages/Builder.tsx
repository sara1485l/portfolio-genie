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
      <div
        className="vh-100 d-flex flex-column justify-content-center align-items-center"
        style={{
          background:
            "linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)",
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center rounded-4 mb-4 shadow-sm"
          style={{
            width: "72px",
            height: "72px",
            background:
              "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
          }}
        >
          <div
            className="spinner-border text-white"
            style={{ width: "2rem", height: "2rem" }}
            role="status"
          />
        </div>

        <h5 className="fw-semibold mb-1" style={{ letterSpacing: "-0.01em" }}>
          Loading your builder
        </h5>

        <p className="text-muted small mb-0">
          Fetching your portfolio details...
        </p>
      </div>
    );
  }

  return (
    <div
      className="min-vh-100"
      style={{
        background:
          "radial-gradient(1200px 600px at 10% -10%, rgba(99,102,241,0.08), transparent), radial-gradient(1000px 500px at 100% 0%, rgba(139,92,246,0.06), transparent), #f6f7fb",
      }}
    >
      <div className="container-xxl py-4 py-md-5 px-3 px-md-4">

        <BuilderHeader
          saving={saving}
          onSave={save}
          onPreview={() => navigate("/preview")}
        />

        <div className="row g-3 g-md-4 mt-1">

          <div className="col-lg-3">
            <div
              style={{
                position: "sticky",
                top: "1.5rem",
              }}
            >
              <BuilderSidebar
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
              />
            </div>
          </div>

          <div className="col-lg-9">
            {renderForm()}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Builder;