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
    <div className="container py-5">

      <div className="card shadow border-0 rounded-4">

        <div className="card-body p-5">

          <h2 className="fw-bold mb-4">
            ATS Optimizer
          </h2>

          <textarea
            rows={10}
            className="form-control mb-4"
            placeholder="Paste your resume..."
            value={text}
            onChange={(e) =>
              setText(e.target.value)
            }
          />

          <button
            className="btn btn-primary"
            disabled={loading}
            onClick={optimize}
          >
            {loading
              ? "Optimizing..."
              : "✨ Optimize"}
          </button>

          {result && (
            <>
              <hr />

              <h4>Optimized Resume</h4>

              <textarea
                rows={12}
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

export default ATSOptimizer;