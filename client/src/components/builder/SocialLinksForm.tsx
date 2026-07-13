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
    <div className="card shadow border-0 rounded-4">
      <div className="card-body p-4">

        <h3 className="fw-bold mb-4">
          Social Links
        </h3>

        <div className="mb-3">
          <label className="form-label">
            GitHub
          </label>

          <input
            type="url"
            className="form-control"
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

        <div className="mb-3">
          <label className="form-label">
            LinkedIn
          </label>

          <input
            type="url"
            className="form-control"
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

        <div>
          <label className="form-label">
            Portfolio Website
          </label>

          <input
            type="url"
            className="form-control"
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
  );
};

export default SocialLinksForm;