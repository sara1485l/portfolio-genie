import { useState } from "react";
import type { Portfolio } from "../../types/portfolio";

interface Props {
  portfolio: Portfolio;
  setPortfolio: React.Dispatch<
    React.SetStateAction<Portfolio>
  >;
}

const ExperienceForm = ({
  portfolio,
  setPortfolio,
}: Props) => {
  const [experience, setExperience] = useState({
    company: "",
    role: "",
    duration: "",
    description: "",
  });

  const addExperience = () => {
    if (
      !experience.company.trim() ||
      !experience.role.trim()
    ) {
      return;
    }

    setPortfolio({
      ...portfolio,
      experience: [
        ...portfolio.experience,
        experience,
      ],
    });

    setExperience({
      company: "",
      role: "",
      duration: "",
      description: "",
    });
  };

  const removeExperience = (
    index: number
  ) => {
    setPortfolio({
      ...portfolio,
      experience:
        portfolio.experience.filter(
          (_, i) => i !== index
        ),
    });
  };

  return (
    <div className="card border-0 shadow-sm rounded-4">
      <div className="card-body p-4 p-md-5">

        <div className="d-flex align-items-center gap-2 mb-1">
          <i className="bi bi-briefcase text-primary"></i>
          <span
            className="text-primary text-uppercase fw-semibold small"
            style={{ letterSpacing: "0.05em" }}
          >
            Step 5
          </span>
        </div>

        <h3 className="fw-bold mb-1" style={{ letterSpacing: "-0.01em" }}>
          Experience
        </h3>

        <p className="text-muted mb-4">
          Add roles that shaped your career.
        </p>

        <div
          className="p-4 rounded-4 mb-4"
          style={{ background: "#f8f9fc" }}
        >
          <div className="row g-3 mb-3">

            <div className="col-md-6">
              <label className="form-label small fw-semibold text-muted">
                Company
              </label>

              <input
                className="form-control rounded-3"
                placeholder="Acme Inc."
                value={experience.company}
                onChange={(e) =>
                  setExperience({
                    ...experience,
                    company: e.target.value,
                  })
                }
              />
            </div>

            <div className="col-md-6">
              <label className="form-label small fw-semibold text-muted">
                Role
              </label>

              <input
                className="form-control rounded-3"
                placeholder="Senior Frontend Engineer"
                value={experience.role}
                onChange={(e) =>
                  setExperience({
                    ...experience,
                    role: e.target.value,
                  })
                }
              />
            </div>

          </div>

          <div className="mb-3" style={{ maxWidth: "320px" }}>
            <label className="form-label small fw-semibold text-muted">
              Duration
            </label>

            <input
              className="form-control rounded-3"
              placeholder="Jan 2022 - Present"
              value={experience.duration}
              onChange={(e) =>
                setExperience({
                  ...experience,
                  duration: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-4">
            <label className="form-label small fw-semibold text-muted">
              Description
            </label>

            <textarea
              rows={4}
              className="form-control rounded-3"
              placeholder="What did you work on?"
              value={experience.description}
              onChange={(e) =>
                setExperience({
                  ...experience,
                  description:
                    e.target.value,
                })
              }
            />
          </div>

          <button
            className="btn btn-primary rounded-3 px-4 fw-medium shadow-sm"
            onClick={addExperience}
          >
            <i className="bi bi-plus-lg me-2"></i>
            Add Experience
          </button>
        </div>

        <div className="d-flex flex-column gap-3">
          {portfolio.experience.map(
            (item, index) => (
              <div
                key={index}
                className="d-flex gap-3 border rounded-4 p-3 p-md-4 timeline-card"
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "#e7f9f1",
                  }}
                >
                  <i
                    className="bi bi-briefcase-fill"
                    style={{ fontSize: "1.25rem", color: "#10b981" }}
                  ></i>
                </div>

                <div className="flex-grow-1 d-flex justify-content-between align-items-start">

                  <div>
                    <h5 className="fw-bold mb-1">{item.role}</h5>

                    <p className="mb-1 text-muted fw-medium">
                      {item.company}
                    </p>

                    <span className="badge rounded-pill bg-light text-secondary border mb-2">
                      {item.duration}
                    </span>

                    <p className="mb-0 mt-2 text-muted">
                      {item.description}
                    </p>
                  </div>

                  <button
                    className="btn btn-sm btn-light text-danger rounded-3 flex-shrink-0"
                    onClick={() =>
                      removeExperience(index)
                    }
                  >
                    <i className="bi bi-trash3"></i>
                  </button>

                </div>
              </div>
            )
          )}
        </div>

      </div>

      <style>{`
        .timeline-card {
          transition: box-shadow 0.15s ease, transform 0.15s ease;
        }
        .timeline-card:hover {
          box-shadow: 0 0.5rem 1.25rem rgba(17, 24, 39, 0.06);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default ExperienceForm;