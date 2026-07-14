import { useState } from "react";

import { generateAI } from "../../services/ai.service";
import type { Portfolio } from "../../types/portfolio";

interface Props {
  portfolio: Portfolio;
  setPortfolio: React.Dispatch<
    React.SetStateAction<Portfolio>
  >;
}

const ProjectsForm = ({
  portfolio,
  setPortfolio,
}: Props) => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    github: "",
    liveDemo: "",
    technologies: "",
    features: "",
  });

  const [loading, setLoading] =
    useState(false);

  const addProject = () => {
    if (
      !project.title.trim() ||
      !project.description.trim()
    ) {
      alert(
        "Title and description are required."
      );
      return;
    }

    setPortfolio({
      ...portfolio,
      projects: [
        ...portfolio.projects,
        {
          title: project.title,
          description:
            project.description,
          github: project.github,
          liveDemo: project.liveDemo,
        },
      ],
    });

    setProject({
      title: "",
      description: "",
      github: "",
      liveDemo: "",
      technologies: "",
      features: "",
    });
  };

  const removeProject = (
    index: number
  ) => {
    setPortfolio({
      ...portfolio,
      projects:
        portfolio.projects.filter(
          (_, i) => i !== index
        ),
    });
  };

  async function generateDescription() {
    if (!project.title.trim()) {
      alert("Project title is required.");
      return;
    }

    try {
      setLoading(true);

      const res =
        await generateAI(
          "project",
          {
            title: project.title,
            technologies:
              project.technologies
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean),

            features:
              project.features
                .split(",")
                .map((f) => f.trim())
                .filter(Boolean),
          }
        );

      setProject({
        ...project,
        description:
          res.data.data,
      });
    } catch (err) {
      console.log(err);

      alert(
        "Failed to generate description."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card border-0 shadow-sm rounded-4">

      <div className="card-body p-4 p-md-5">

        <div className="d-flex align-items-center gap-2 mb-1">
          <i className="bi bi-kanban text-primary"></i>
          <span
            className="text-primary text-uppercase fw-semibold small"
            style={{ letterSpacing: "0.05em" }}
          >
            Step 3
          </span>
        </div>

        <h3 className="fw-bold mb-1" style={{ letterSpacing: "-0.01em" }}>
          Projects
        </h3>

        <p className="text-muted mb-4">
          Showcase the work you're most proud of.
        </p>

        <div
          className="p-4 rounded-4 mb-4"
          style={{ background: "#f8f9fc" }}
        >

          <h6 className="fw-semibold text-muted text-uppercase mb-3" style={{ fontSize: "0.72rem", letterSpacing: "0.06em" }}>
            New Project
          </h6>

          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label className="form-label small fw-semibold text-muted">
                Project Title
              </label>

              <input
                className="form-control rounded-3"
                placeholder="E-commerce Platform"
                value={project.title}
                onChange={(e) =>
                  setProject({
                    ...project,
                    title: e.target.value,
                  })
                }
              />
            </div>

            <div className="col-md-6">
              <label className="form-label small fw-semibold text-muted">
                Technologies
              </label>

              <input
                className="form-control rounded-3"
                placeholder="React, Node, MongoDB"
                value={
                  project.technologies
                }
                onChange={(e) =>
                  setProject({
                    ...project,
                    technologies:
                      e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label small fw-semibold text-muted">
              Key Features
            </label>

            <input
              className="form-control rounded-3"
              placeholder="JWT Auth, CRUD, Live Chat"
              value={project.features}
              onChange={(e) =>
                setProject({
                  ...project,
                  features:
                    e.target.value,
                })
              }
            />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-semibold text-muted">
              Description
            </label>

            <textarea
              rows={5}
              className="form-control rounded-3"
              placeholder="Describe what this project does..."
              value={
                project.description
              }
              onChange={(e) =>
                setProject({
                  ...project,
                  description:
                    e.target.value,
                })
              }
            />
          </div>

          <button
            className="btn mb-4 rounded-3 px-4 fw-medium"
            style={{
              background: "#fff8e8",
              color: "#b45309",
              border: "1px solid #fde3a7",
            }}
            disabled={loading}
            onClick={
              generateDescription
            }
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Generating...
              </>
            ) : (
              <>
                <i className="bi bi-stars me-2"></i>
                Generate Description
              </>
            )}
          </button>

          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label className="form-label small fw-semibold text-muted">
                <i className="bi bi-github me-1"></i>
                GitHub URL
              </label>

              <input
                className="form-control rounded-3"
                placeholder="https://github.com/..."
                value={project.github}
                onChange={(e) =>
                  setProject({
                    ...project,
                    github:
                      e.target.value,
                  })
                }
              />
            </div>

            <div className="col-md-6">
              <label className="form-label small fw-semibold text-muted">
                <i className="bi bi-box-arrow-up-right me-1"></i>
                Live Demo URL
              </label>

              <input
                className="form-control rounded-3"
                placeholder="https://..."
                value={
                  project.liveDemo
                }
                onChange={(e) =>
                  setProject({
                    ...project,
                    liveDemo:
                      e.target.value,
                  })
                }
              />
            </div>
          </div>

          <button
            className="btn btn-primary rounded-3 px-4 fw-medium shadow-sm"
            onClick={addProject}
          >
            <i className="bi bi-plus-lg me-2"></i>
            Add Project
          </button>

        </div>

        {portfolio.projects.length > 0 && (
          <h6 className="fw-semibold text-muted text-uppercase mb-3" style={{ fontSize: "0.72rem", letterSpacing: "0.06em" }}>
            Your Projects ({portfolio.projects.length})
          </h6>
        )}

        <div className="d-flex flex-column gap-3">
          {portfolio.projects.map(
            (item, index) => (
              <div
                key={index}
                className="border rounded-4 p-4 project-card"
              >
                <div className="d-flex justify-content-between align-items-start gap-3">

                  <div className="flex-grow-1">

                    <h5 className="fw-bold mb-2">
                      {item.title}
                    </h5>

                    <p className="text-muted mb-3">
                      {
                        item.description
                      }
                    </p>

                    <div className="d-flex gap-2 flex-wrap">
                      {item.github && (
                        <a
                          href={
                            item.github
                          }
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-sm btn-outline-dark rounded-3"
                        >
                          <i className="bi bi-github me-1"></i>
                          GitHub
                        </a>
                      )}

                      {item.liveDemo && (
                        <a
                          href={
                            item.liveDemo
                          }
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-sm btn-outline-primary rounded-3"
                        >
                          <i className="bi bi-box-arrow-up-right me-1"></i>
                          Live Demo
                        </a>
                      )}
                    </div>

                  </div>

                  <button
                    className="btn btn-sm btn-light text-danger rounded-3 flex-shrink-0"
                    onClick={() =>
                      removeProject(
                        index
                      )
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
        .project-card {
          transition: box-shadow 0.15s ease, transform 0.15s ease;
        }
        .project-card:hover {
          box-shadow: 0 0.5rem 1.25rem rgba(17, 24, 39, 0.06);
          transform: translateY(-2px);
        }
      `}</style>

    </div>
  );
};

export default ProjectsForm;