import { useState } from "react";
import type { Portfolio } from "../../types/portfolio";

interface Props {
  portfolio: Portfolio;
  setPortfolio: React.Dispatch<
    React.SetStateAction<Portfolio>
  >;
}

const EducationForm = ({
  portfolio,
  setPortfolio,
}: Props) => {
  const [education, setEducation] = useState({
    university: "",
    degree: "",
    graduationYear: new Date().getFullYear(),
  });

  const addEducation = () => {
    if (
      !education.university.trim() ||
      !education.degree.trim()
    )
      return;

    setPortfolio({
      ...portfolio,
      education: [
        ...portfolio.education,
        education,
      ],
    });

    setEducation({
      university: "",
      degree: "",
      graduationYear:
        new Date().getFullYear(),
    });
  };

  const removeEducation = (
    index: number
  ) => {
    setPortfolio({
      ...portfolio,
      education:
        portfolio.education.filter(
          (_, i) => i !== index
        ),
    });
  };

  return (
    <div className="card border-0 shadow-sm rounded-4">
      <div className="card-body p-4 p-md-5">

        <div className="d-flex align-items-center gap-2 mb-1">
          <i className="bi bi-mortarboard text-primary"></i>
          <span
            className="text-primary text-uppercase fw-semibold small"
            style={{ letterSpacing: "0.05em" }}
          >
            Step 4
          </span>
        </div>

        <h3 className="fw-bold mb-1" style={{ letterSpacing: "-0.01em" }}>
          Education
        </h3>

        <p className="text-muted mb-4">
          Add your academic background.
        </p>

        <div
          className="p-4 rounded-4 mb-4"
          style={{ background: "#f8f9fc" }}
        >
          <div className="row g-3 mb-3">

            <div className="col-md-6">
              <label className="form-label small fw-semibold text-muted">
                University
              </label>

              <input
                className="form-control rounded-3"
                placeholder="Harvard University"
                value={education.university}
                onChange={(e) =>
                  setEducation({
                    ...education,
                    university:
                      e.target.value,
                  })
                }
              />
            </div>

            <div className="col-md-6">
              <label className="form-label small fw-semibold text-muted">
                Degree
              </label>

              <input
                className="form-control rounded-3"
                placeholder="B.Sc. Computer Science"
                value={education.degree}
                onChange={(e) =>
                  setEducation({
                    ...education,
                    degree: e.target.value,
                  })
                }
              />
            </div>

          </div>

          <div className="mb-3" style={{ maxWidth: "220px" }}>
            <label className="form-label small fw-semibold text-muted">
              Graduation Year
            </label>

            <input
              type="number"
              className="form-control rounded-3"
              placeholder="2024"
              value={
                education.graduationYear
              }
              onChange={(e) =>
                setEducation({
                  ...education,
                  graduationYear:
                    Number(e.target.value),
                })
              }
            />
          </div>

          <button
            className="btn btn-primary rounded-3 px-4 fw-medium shadow-sm"
            onClick={addEducation}
          >
            <i className="bi bi-plus-lg me-2"></i>
            Add Education
          </button>
        </div>

        <div className="d-flex flex-column gap-3">
          {portfolio.education.map(
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
                    background: "#eef2ff",
                  }}
                >
                  <i
                    className="bi bi-mortarboard-fill text-primary"
                    style={{ fontSize: "1.25rem" }}
                  ></i>
                </div>

                <div className="flex-grow-1 d-flex justify-content-between align-items-start">

                  <div>
                    <h5 className="fw-bold mb-1">{item.degree}</h5>

                    <p className="mb-1 text-muted">
                      {item.university}
                    </p>

                    <span className="badge rounded-pill bg-light text-secondary border">
                      {item.graduationYear}
                    </span>
                  </div>

                  <button
                    className="btn btn-sm btn-light text-danger rounded-3 flex-shrink-0"
                    onClick={() =>
                      removeEducation(index)
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

export default EducationForm;