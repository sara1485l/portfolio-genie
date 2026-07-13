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
    <div className="card border-0 shadow rounded-4">
      <div className="card-body p-4">
        <h3 className="fw-bold mb-4">
          About Portfolio
        </h3>

        <div className="mb-4">
          <label className="form-label fw-semibold">
            Portfolio Title
          </label>

          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Frontend Developer"
            value={portfolio.title}
            onChange={(e) =>
              setPortfolio({
                ...portfolio,
                title: e.target.value,
              })
            }
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">
            About Me
          </label>

          <textarea
            rows={8}
            className="form-control"
            placeholder="Write something about yourself..."
            value={portfolio.about}
            onChange={(e) =>
              setPortfolio({
                ...portfolio,
                about: e.target.value,
              })
            }
          />
        </div>

        <div className="text-end">
          <button
            className="btn btn-primary px-4"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Generating...
              </>
            ) : (
              <>✨ Generate with AI</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutForm;