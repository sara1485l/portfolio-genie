import { useState } from "react";
import { generateAI } from "../../services/ai.service";
import type { Portfolio } from "../../types/portfolio";

interface Props {
  portfolio: Portfolio;
  setPortfolio: React.Dispatch<
    React.SetStateAction<Portfolio>
  >;
}

const AboutForm = ({
  portfolio,
  setPortfolio,
}: Props) => {
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);

      const res = await generateAI(
        "about",
        portfolio
      );

      setPortfolio({
        ...portfolio,
        about: res.data.data,
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card border-0 shadow-sm rounded-4">
      <div className="card-body p-4 p-md-5">

        <div className="d-flex align-items-center gap-2 mb-1">
          <i className="bi bi-person-circle text-primary"></i>
          <span
            className="text-primary text-uppercase fw-semibold small"
            style={{ letterSpacing: "0.05em" }}
          >
            Step 1
          </span>
        </div>

        <h3 className="fw-bold mb-1" style={{ letterSpacing: "-0.01em" }}>
          About your portfolio
        </h3>

        <p className="text-muted mb-4">
          This is the first thing visitors will see. Make it count.
        </p>

        <div className="mb-4">
          <label className="form-label fw-semibold">
            Portfolio Title
          </label>

          <input
            type="text"
            className="form-control form-control-lg rounded-3"
            placeholder="Frontend Developer"
            value={portfolio.title}
            onChange={(e) =>
              setPortfolio({
                ...portfolio,
                title: e.target.value,
              })
            }
          />

          <small className="text-muted">
            A short professional title shown at the top of your profile.
          </small>
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">
            About Me
          </label>

          <textarea
            rows={8}
            className="form-control rounded-3"
            placeholder="Write something about yourself..."
            value={portfolio.about}
            onChange={(e) =>
              setPortfolio({
                ...portfolio,
                about: e.target.value,
              })
            }
          />

          <small className="text-muted">
            Share your background, what you do, and what makes you unique.
          </small>
        </div>

        <div className="text-end">
          <button
            className="btn btn-lg px-4 rounded-3 fw-semibold text-white shadow-sm"
            style={{
              background:
                "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)",
              border: "none",
            }}
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Generating...
              </>
            ) : (
              <>
                <i className="bi bi-stars me-2"></i>
                Generate with AI
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default AboutForm;