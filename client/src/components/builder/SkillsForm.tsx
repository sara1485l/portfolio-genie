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
    <div className="card shadow border-0 rounded-4">
      <div className="card-body p-4">

        <h3 className="fw-bold mb-4">
          Skills
        </h3>

        <div className="d-flex mb-3">

          <input
            className="form-control me-2"
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
            className="btn btn-primary"
            onClick={addSkill}
          >
            Add
          </button>

        </div>

        <div className="mb-4">

          {portfolio.skills.map(
            (item, index) => (
              <span
                key={index}
                className="badge bg-primary me-2 mb-2 p-2"
                style={{
                  cursor: "pointer",
                  fontSize: "14px",
                }}
                onClick={() =>
                  removeSkill(index)
                }
              >
                {item} ✕
              </span>
            )
          )}

        </div>

        <button
          className="btn btn-warning"
          onClick={suggestSkills}
        >
          ✨ Suggest Skills
        </button>

      </div>
    </div>
  );
};

export default SkillsForm;