import { useState } from "react";

import { generateAI } from "../services/ai.service";

const ResumeAI = () => {
  const [title, setTitle] = useState("");
  const [experience, setExperience] =
    useState("");

  const [skills, setSkills] = useState("");

  const [result, setResult] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function generateResume() {
    if (!title.trim()) {
      alert("Portfolio title is required");
      return;
    }

    try {
      setLoading(true);

      const res = await generateAI(
        "resume",
        {
          title,
          experience,
          skills: skills
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
        }
      );

      setResult(res.data.data);
    } catch (err) {
      console.log(err);
      alert("Failed to generate.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container py-5">

      <div className="card shadow border-0 rounded-4">

        <div className="card-body p-5">

          <h2 className="fw-bold mb-4">
            AI Resume Summary
          </h2>

          <input
            className="form-control mb-3"
            placeholder="Portfolio Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <textarea
            rows={5}
            className="form-control mb-3"
            placeholder="Experience"
            value={experience}
            onChange={(e) =>
              setExperience(e.target.value)
            }
          />

          <input
            className="form-control mb-4"
            placeholder="Skills (React, Node, MongoDB)"
            value={skills}
            onChange={(e) =>
              setSkills(e.target.value)
            }
          />

          <button
            className="btn btn-primary"
            disabled={loading}
            onClick={generateResume}
          >
            {loading
              ? "Generating..."
              : "✨ Generate Resume"}
          </button>

          {result && (
            <>
              <hr />

              <h4>
                Result
              </h4>

              <textarea
                rows={8}
                className="form-control"
                value={result}
                readOnly
              />

              <button
                className="btn btn-success mt-3"
                onClick={() =>
                  navigator.clipboard.writeText(
                    result
                  )
                }
              >
                Copy
              </button>
            </>
          )}

        </div>

      </div>

    </div>
  );
};

export default ResumeAI;