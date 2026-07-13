import { useState } from "react";
import { generateAI } from "../services/ai.service";

const CoverLetterAI = () => {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [skills, setSkills] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  async function generateCoverLetter() {
    if (!company.trim() || !title.trim()) {
      alert("Company and Job Title are required.");
      return;
    }

    try {
      setLoading(true);

      const res = await generateAI("cover", {
        company,
        title,
        skills: skills
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      });

      setResult(res.data.data);
    } catch (err) {
      console.log(err);
      alert("Failed to generate cover letter.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container py-5">

      <div className="card shadow border-0 rounded-4">

        <div className="card-body p-5">

          <h2 className="fw-bold mb-4">
            AI Cover Letter
          </h2>

          <input
            className="form-control mb-3"
            placeholder="Company"
            value={company}
            onChange={(e) =>
              setCompany(e.target.value)
            }
          />

          <input
            className="form-control mb-3"
            placeholder="Job Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
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
            onClick={generateCoverLetter}
          >
            {loading
              ? "Generating..."
              : "✨ Generate Cover Letter"}
          </button>

          {result && (
            <>
              <hr />

              <h4>Result</h4>

              <textarea
                rows={12}
                className="form-control"
                value={result}
                readOnly
              />

              <button
                className="btn btn-success mt-3"
                onClick={() =>
                  navigator.clipboard.writeText(result)
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

export default CoverLetterAI;