import { useState } from "react";
import { generateAI } from "../services/ai.service";

const ATSOptimizer = () => {
  const [text, setText] = useState("");

  const [result, setResult] = useState("");

  const [loading, setLoading] =
    useState(false);

  async function optimize() {
    if (!text.trim()) {
      alert("Please enter your resume text.");
      return;
    }

    try {
      setLoading(true);

      const res = await generateAI(
        "ats",
        {
          text,
        }
      );

      setResult(res.data.data);
    } catch (err) {
      console.log(err);

      alert("Failed to optimize.");
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
            <i className="bi bi-file-earmark-check text-white" style={{ fontSize: "1.5rem" }}></i>
          </div>

          <h2 className="fw-bold mb-2" style={{ letterSpacing: "-0.02em" }}>
            ATS Optimizer
          </h2>

          <p className="text-muted mb-0 mx-auto" style={{ maxWidth: "480px" }}>
            Paste your resume and let AI rewrite it to pass applicant
            tracking systems and catch a recruiter's eye.
          </p>
        </div>

        {/* INPUT CARD */}
        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body p-4 p-md-5">

            <label className="form-label fw-semibold">
              Your Resume
            </label>

            <textarea
              rows={10}
              className="form-control rounded-3 mb-4"
              placeholder="Paste your resume text here..."
              value={text}
              onChange={(e) =>
                setText(e.target.value)
              }
            />

            <div className="text-end">
              <button
                className="btn btn-lg px-4 rounded-3 fw-semibold text-white shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)",
                  border: "none",
                }}
                disabled={loading}
                onClick={optimize}
              >
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2"></span>
                    Optimizing...
                  </>
                ) : (
                  <>
                    <i className="bi bi-stars me-2"></i>
                    Optimize
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
                <h5 className="fw-bold mb-0">Optimized Resume</h5>
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
                  navigator.clipboard.writeText(
                    result
                  )
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

export default ATSOptimizer;