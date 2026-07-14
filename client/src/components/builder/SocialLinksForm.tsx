import type { Portfolio } from "../../types/portfolio";

interface Props {
  portfolio: Portfolio;
  setPortfolio: React.Dispatch<
    React.SetStateAction<Portfolio>
  >;
}

const SocialLinksForm = ({
  portfolio,
  setPortfolio,
}: Props) => {
  const handleChange = (
    field: "github" | "linkedin" | "portfolio",
    value: string
  ) => {
    setPortfolio({
      ...portfolio,
      socialLinks: {
        ...portfolio.socialLinks,
        [field]: value,
      },
    });
  };

  return (
    <div className="card border-0 shadow-sm rounded-4">
      <div className="card-body p-4 p-md-5">

        <div className="d-flex align-items-center gap-2 mb-1">
          <i className="bi bi-share text-primary"></i>
          <span
            className="text-primary text-uppercase fw-semibold small"
            style={{ letterSpacing: "0.05em" }}
          >
            Step 6
          </span>
        </div>

        <h3 className="fw-bold mb-1" style={{ letterSpacing: "-0.01em" }}>
          Social Links
        </h3>

        <p className="text-muted mb-4">
          Help people find you elsewhere on the web.
        </p>

        <div className="mb-4">
          <label className="form-label fw-semibold">
            GitHub
          </label>

          <div className="input-group input-group-lg">
            <span
              className="input-group-text bg-white border-end-0 rounded-start-3"
              style={{ color: "#181717" }}
            >
              <i className="bi bi-github"></i>
            </span>

            <input
              type="url"
              className="form-control border-start-0 rounded-end-3"
              placeholder="https://github.com/username"
              value={
                portfolio.socialLinks.github ?? ""
              }
              onChange={(e) =>
                handleChange(
                  "github",
                  e.target.value
                )
              }
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">
            LinkedIn
          </label>

          <div className="input-group input-group-lg">
            <span
              className="input-group-text bg-white border-end-0 rounded-start-3"
              style={{ color: "#0a66c2" }}
            >
              <i className="bi bi-linkedin"></i>
            </span>

            <input
              type="url"
              className="form-control border-start-0 rounded-end-3"
              placeholder="https://linkedin.com/in/username"
              value={
                portfolio.socialLinks.linkedin ?? ""
              }
              onChange={(e) =>
                handleChange(
                  "linkedin",
                  e.target.value
                )
              }
            />
          </div>
        </div>

        <div>
          <label className="form-label fw-semibold">
            Portfolio Website
          </label>

          <div className="input-group input-group-lg">
            <span
              className="input-group-text bg-white border-end-0 rounded-start-3 text-primary"
            >
              <i className="bi bi-globe2"></i>
            </span>

            <input
              type="url"
              className="form-control border-start-0 rounded-end-3"
              placeholder="https://yourportfolio.com"
              value={
                portfolio.socialLinks.portfolio ?? ""
              }
              onChange={(e) =>
                handleChange(
                  "portfolio",
                  e.target.value
                )
              }
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default SocialLinksForm;