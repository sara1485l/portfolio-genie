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
    <div
      className="min-vh-100 py-4 py-md-5"
      style={{
        background:
          "radial-gradient(1000px 500px at 15% -10%, rgba(99,102,241,0.08), transparent), radial-gradient(900px 500px at 100% 0%, rgba(168,85,247,0.06), transparent), #f7f8fc",
      }}
    >
      <div className="container" style={{ maxWidth: "820px" }}>

        {/* HERO */}
        <div className="text-center mb-4 mb-md-5">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-4 mb-3 shadow-sm"
            style={{
              width: "60px",
              height: "60px",
              background:
                "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
            }}
          >
            <i className="bi bi-envelope-paper text-white" style={{ fontSize: "1.5rem" }}></i>
          </div>

          <h2 className="fw-bold mb-2" style={{ letterSpacing: "-0.02em" }}>
            AI Cover Letter
          </h2>

          <p className="text-muted mb-0 mx-auto" style={{ maxWidth: "480px" }}>
            Tell us the role you're applying for and let AI draft a
            tailored, professional cover letter in seconds.
          </p>
        </div>

        {/* INPUT CARD */}
        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body p-4 p-md-5">

            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Company
                </label>

                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0 rounded-start-3">
                    <i className="bi bi-building text-muted"></i>
                  </span>
                  <input
                    className="form-control border-start-0 rounded-end-3"
                    placeholder="Acme Inc."
                    value={company}
                    onChange={(e) =>
                      setCompany(e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Job Title
                </label>

                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0 rounded-start-3">
                    <i className="bi bi-briefcase text-muted"></i>
                  </span>
                  <input
                    className="form-control border-start-0 rounded-end-3"
                    placeholder="Frontend Developer"
                    value={title}
                    onChange={(e) =>
                      setTitle(e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">
                Skills
              </label>

              <div className="input-group">
                <span className="input-group-text bg-white border-end-0 rounded-start-3">
                  <i className="bi bi-stars text-muted"></i>
                </span>
                <input
                  className="form-control border-start-0 rounded-end-3"
                  placeholder="React, Node, MongoDB"
                  value={skills}
                  onChange={(e) =>
                    setSkills(e.target.value)
                  }
                />
              </div>
            </div>

            <div className="text-end">
              <button
                className="btn btn-lg px-4 rounded-3 fw-semibold text-white shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)",
                  border: "none",
                }}
                disabled={loading}
                onClick={generateCoverLetter}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Generating...
                  </>
                ) : (
                  <>
                    <i className="bi bi-stars me-2"></i>
                    Generate Cover Letter
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* RESULT PANEL */}
        {result && (
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4 p-md-5">

              <div className="d-flex align-items-center gap-2 mb-3">
                <i className="bi bi-check-circle-fill text-success"></i>
                <h5 className="fw-bold mb-0">Result</h5>
              </div>

              <div
                className="rounded-4 p-3 mb-3"
                style={{
                  background: "#f8f9fc",
                  maxHeight: "420px",
                  overflowY: "auto",
                }}
              >
                <pre
                  className="mb-0"
                  style={{
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    fontFamily: "inherit",
                    fontSize: "0.95rem",
                    color: "#374151",
                  }}
                >
                  {result}
                </pre>
              </div>

              <button
                className="btn btn-outline-success rounded-3 px-4 fw-medium"
                onClick={() =>
                  navigator.clipboard.writeText(result)
                }
              >
                <i className="bi bi-clipboard-check me-2"></i>
                Copy
              </button>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default CoverLetterAI;