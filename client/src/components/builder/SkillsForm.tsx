import { useState } from "react";

import { generateAI } from "../../services/ai.service";
import type { Portfolio } from "../../types/portfolio";

interface Props {
  portfolio: Portfolio;
  setPortfolio: React.Dispatch<
    React.SetStateAction<Portfolio>
  >;
}

const SkillsForm = ({
  portfolio,
  setPortfolio,
}: Props) => {
  const [skill, setSkill] = useState("");

  const addSkill = () => {
    const value = skill.trim();

    if (!value) return;

    if (portfolio.skills.includes(value)) return;

    setPortfolio({
      ...portfolio,
      skills: [...portfolio.skills, value],
    });

    setSkill("");
  };

  const removeSkill = (index: number) => {
    setPortfolio({
      ...portfolio,
      skills: portfolio.skills.filter(
        (_, i) => i !== index
      ),
    });
  };

  const suggestSkills = async () => {
    try {
      const response = await generateAI(
        "skills",
        {
          title: portfolio.title,
          about: portfolio.about,
        }
      );

      const skills = response.data.data
        .split(",")
        .map((s: string) => s.trim())
        .filter(Boolean);

      setPortfolio({
        ...portfolio,
        skills,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card border-0 shadow-sm rounded-4">
      <div className="card-body p-4 p-md-5">

        <div className="d-flex align-items-center gap-2 mb-1">
          <i className="bi bi-stars text-primary"></i>
          <span
            className="text-primary text-uppercase fw-semibold small"
            style={{ letterSpacing: "0.05em" }}
          >
            Step 2
          </span>
        </div>

        <h3 className="fw-bold mb-1" style={{ letterSpacing: "-0.01em" }}>
          Skills
        </h3>

        <p className="text-muted mb-4">
          List the technologies and tools you're proficient with.
        </p>

        <div className="d-flex mb-3 gap-2">

          <input
            className="form-control form-control-lg rounded-3"
            placeholder="Node.js"
            value={skill}
            onChange={(e) =>
              setSkill(e.target.value)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addSkill();
              }
            }}
          />

          <button
            className="btn btn-primary rounded-3 px-4 fw-medium flex-shrink-0"
            onClick={addSkill}
          >
            <i className="bi bi-plus-lg me-1"></i>
            Add
          </button>

        </div>

        <div
          className="p-3 rounded-4 mb-4"
          style={{
            background: "#f8f9fc",
            minHeight: "70px",
          }}
        >
          {portfolio.skills.length === 0 ? (
            <p className="text-muted small mb-0">
              No skills added yet. Add one above or let AI suggest some.
            </p>
          ) : (
            portfolio.skills.map(
              (item, index) => (
                <span
                  key={index}
                  className="badge rounded-pill me-2 mb-2 skill-chip"
                  style={{
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: 500,
                    padding: "0.55rem 0.9rem",
                    background: "#eef2ff",
                    color: "#4338ca",
                  }}
                  onClick={() =>
                    removeSkill(index)
                  }
                >
                  {item}
                  <i className="bi bi-x-lg ms-2" style={{ fontSize: "0.7rem" }}></i>
                </span>
              )
            )
          )}
        </div>

        <button
          className="btn rounded-3 px-4 fw-medium"
          style={{
            background: "#fff8e8",
            color: "#b45309",
            border: "1px solid #fde3a7",
          }}
          onClick={suggestSkills}
        >
          <i className="bi bi-stars me-2"></i>
          Suggest Skills
        </button>

      </div>

      <style>{`
        .skill-chip {
          transition: background 0.15s ease, transform 0.15s ease;
        }
        .skill-chip:hover {
          background: #e0e7ff !important;
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
};

export default SkillsForm;