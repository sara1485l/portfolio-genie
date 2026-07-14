import { useEffect, useState } from "react";
import { getMyPortfolio } from "../services/portfolio.service";
import type { Portfolio } from "../types/portfolio";

const Preview = () => {
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchPortfolio = async () => {
      try {
        const res = await getMyPortfolio();

        if (isMounted) {
          setPortfolio(res.data.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPortfolio();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div
        className="vh-100 d-flex flex-column justify-content-center align-items-center"
        style={{
          background:
            "linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)",
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center rounded-4 mb-4 shadow-sm"
          style={{
            width: "72px",
            height: "72px",
            background:
              "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
          }}
        >
          <div
            className="spinner-border text-white"
            style={{ width: "2rem", height: "2rem" }}
            role="status"
          />
        </div>

        <h5 className="fw-semibold mb-1" style={{ letterSpacing: "-0.01em" }}>
          Loading your preview
        </h5>

        <p className="text-muted small mb-0">
          Rendering your portfolio...
        </p>
      </div>
    );
  }

  if (!portfolio) {
    return (
      <div
        className="vh-100 d-flex flex-column justify-content-center align-items-center text-center px-3"
        style={{ background: "#f8f9fc" }}
      >
        <div
          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
          style={{
            width: "96px",
            height: "96px",
            background:
              "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)",
          }}
        >
          <i
            className="bi bi-file-earmark-x text-primary"
            style={{ fontSize: "2.5rem" }}
          ></i>
        </div>

        <h3 className="fw-bold mb-2">Portfolio not found</h3>

        <p className="text-muted mb-0" style={{ maxWidth: "380px" }}>
          We couldn't find a portfolio to preview yet. Build one in the
          Portfolio Builder to see it here.
        </p>
      </div>
    );
  }

  return (
    <div className="py-4 py-md-5" style={{ background: "#f0f1f7", minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: "900px" }}>

        {/* Browser chrome frame */}
        <div className="rounded-4 shadow-lg overflow-hidden bg-white">

          <div
            className="d-flex align-items-center gap-2 px-3 py-2"
            style={{ background: "#eceef3", borderBottom: "1px solid #e3e5ee" }}
          >
            <span className="rounded-circle" style={{ width: 10, height: 10, background: "#f87171", display: "inline-block" }}></span>
            <span className="rounded-circle" style={{ width: 10, height: 10, background: "#fbbf24", display: "inline-block" }}></span>
            <span className="rounded-circle" style={{ width: 10, height: 10, background: "#34d399", display: "inline-block" }}></span>

            <div
              className="flex-grow-1 d-flex justify-content-center"
            >
              <span
                className="badge rounded-pill bg-white text-muted fw-normal px-3 py-1 d-flex align-items-center gap-2"
                style={{ border: "1px solid #e3e5ee" }}
              >
                <i className="bi bi-lock-fill" style={{ fontSize: "0.65rem" }}></i>
                yourportfolio.app/preview
              </span>
            </div>
          </div>

          {/* Portfolio content */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #4f46e5 0%, #7c3aed 55%, #a855f7 100%)",
              height: "120px",
            }}
          />

          <div className="p-4 p-md-5" style={{ marginTop: "-64px" }}>

            <div className="text-center mb-5">
              <div
                className="rounded-circle border border-4 border-white shadow d-inline-flex align-items-center justify-content-center text-white"
                style={{
                  width: 110,
                  height: 110,
                  fontSize: 38,
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                }}
              >
                <i className="bi bi-person-fill"></i>
              </div>

              <h1 className="fw-bold mt-3 mb-1" style={{ letterSpacing: "-0.02em" }}>
                {portfolio.title}
              </h1>

              <span
                className="badge rounded-pill fw-medium px-3 py-2"
                style={{ background: "#eef2ff", color: "#4338ca" }}
              >
                Portfolio Preview
              </span>
            </div>

            <section className="mb-5">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-person-lines-fill text-primary"></i>
                About
              </h5>

              <p className="text-muted mb-0">{portfolio.about}</p>
            </section>

            <hr className="my-4" />

            <section className="mb-5">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-stars text-primary"></i>
                Skills
              </h5>

              <div>
                {portfolio.skills.length === 0 ? (
                  <p className="text-muted mb-0">No skills added yet.</p>
                ) : (
                  portfolio.skills.map((skill) => (
                    <span
                      key={skill}
                      className="badge rounded-pill me-2 mb-2"
                      style={{
                        background: "#eef2ff",
                        color: "#4338ca",
                        fontWeight: 500,
                        padding: "0.55rem 0.9rem",
                      }}
                    >
                      {skill}
                    </span>
                  ))
                )}
              </div>
            </section>

            <hr className="my-4" />

            <section className="mb-5">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-kanban text-primary"></i>
                Projects
              </h5>

              {portfolio.projects.length === 0 ? (
                <p className="text-muted mb-0">No projects added yet.</p>
              ) : (
                <div className="d-flex flex-column gap-3">
                  {portfolio.projects.map((project, index) => (
                    <div key={index} className="border rounded-4 p-4">
                      <h6 className="fw-bold mb-2">{project.title}</h6>

                      <p className="text-muted mb-3">{project.description}</p>

                      <div className="d-flex gap-2 flex-wrap">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-sm btn-outline-dark rounded-3"
                          >
                            <i className="bi bi-github me-1"></i>
                            GitHub
                          </a>
                        )}

                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
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
                  ))}
                </div>
              )}
            </section>

            <hr className="my-4" />

            <section className="mb-5">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-mortarboard text-primary"></i>
                Education
              </h5>

              {portfolio.education.length === 0 ? (
                <p className="text-muted mb-0">No education added yet.</p>
              ) : (
                <div className="d-flex flex-column gap-3">
                  {portfolio.education.map((edu, index) => (
                    <div key={index} className="d-flex gap-3">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                        style={{ width: 42, height: 42, background: "#eef2ff" }}
                      >
                        <i className="bi bi-mortarboard-fill text-primary"></i>
                      </div>

                      <div>
                        <strong className="d-block">{edu.degree}</strong>
                        <p className="mb-0 text-muted">{edu.university}</p>
                        <small className="text-muted">
                          Graduation Year: {edu.graduationYear}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <hr className="my-4" />

            <section className="mb-5">
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-briefcase text-primary"></i>
                Experience
              </h5>

              {portfolio.experience.length === 0 ? (
                <p className="text-muted mb-0">No experience added yet.</p>
              ) : (
                <div className="d-flex flex-column gap-3">
                  {portfolio.experience.map((exp, index) => (
                    <div key={index} className="d-flex gap-3">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                        style={{ width: 42, height: 42, background: "#e7f9f1" }}
                      >
                        <i className="bi bi-briefcase-fill" style={{ color: "#10b981" }}></i>
                      </div>

                      <div>
                        <strong className="d-block">{exp.role}</strong>
                        <p className="mb-1 text-muted">{exp.company}</p>
                        <small className="text-muted d-block mb-1">
                          {exp.duration}
                        </small>
                        <p className="mb-0 text-muted">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <hr className="my-4" />

            <section>
              <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-share text-primary"></i>
                Social Links
              </h5>

              <div className="d-flex flex-column gap-2 align-items-start">

                {portfolio.socialLinks.github && (
                  <a
                    href={portfolio.socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline-dark rounded-3"
                  >
                    <i className="bi bi-github me-2"></i>
                    GitHub
                  </a>
                )}

                {portfolio.socialLinks.linkedin && (
                  <a
                    href={portfolio.socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm rounded-3"
                    style={{ color: "#0a66c2", border: "1px solid #0a66c2" }}
                  >
                    <i className="bi bi-linkedin me-2"></i>
                    LinkedIn
                  </a>
                )}

                {portfolio.socialLinks.portfolio && (
                  <a
                    href={portfolio.socialLinks.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline-primary rounded-3"
                  >
                    <i className="bi bi-globe2 me-2"></i>
                    Portfolio Website
                  </a>
                )}

              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Preview;