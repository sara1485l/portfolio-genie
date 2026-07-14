import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPublicPortfolio } from "../services/portfolio.service";
import type { Portfolio } from "../types/portfolio";

const PublicPortfolio = () => {
  const { username } = useParams();

  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      if (!username) return;

      try {
        const res = await getPublicPortfolio(username);
        setPortfolio(res.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [username]);

  if (loading) {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: "100vh",
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
          Loading portfolio
        </h5>

        <p className="text-muted small mb-0">
          Just a moment while we fetch this profile...
        </p>
      </div>
    );
  }

  if (!portfolio) {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center px-3"
        style={{ minHeight: "100vh", background: "#f8f9fc" }}
      >
        <div
          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
          style={{
            width: "100px",
            height: "100px",
            background:
              "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)",
          }}
        >
          <i
            className="bi bi-person-x text-primary"
            style={{ fontSize: "2.75rem" }}
          ></i>
        </div>

        <h2 className="fw-bold mb-2">Portfolio Not Found</h2>

        <p className="text-muted mb-0" style={{ maxWidth: "380px" }}>
          This profile doesn't exist or may have been removed.
        </p>
      </div>
    );
  }

  return (
    <div
      className="pb-5"
      style={{
        background: "#f7f8fc",
        minHeight: "100vh",
      }}
    >

      {/* HERO */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #4f46e5 0%, #7c3aed 55%, #a855f7 100%)",
          height: "220px",
        }}
      />

      <div className="container" style={{ maxWidth: "900px", marginTop: "-110px" }}>

        <div className="card border-0 shadow-lg rounded-5 mb-4">
          <div className="card-body p-4 p-md-5 text-center">

            {portfolio.user?.avatar ? (
              <img
                src={portfolio.user.avatar}
                alt="avatar"
                className="rounded-circle border border-4 border-white shadow"
                width={140}
                height={140}
                style={{ objectFit: "cover", marginTop: "-96px" }}
              />
            ) : (
              <div
                className="rounded-circle border border-4 border-white shadow text-white d-inline-flex justify-content-center align-items-center"
                style={{
                  width: 140,
                  height: 140,
                  fontSize: 50,
                  marginTop: "-96px",
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                }}
              >
                <i className="bi bi-person-fill"></i>
              </div>
            )}

            <h2 className="fw-bold mt-4 mb-1" style={{ letterSpacing: "-0.02em" }}>
              {portfolio.user?.name ?? "Your Name"}
            </h2>

            <p className="text-muted mb-3">
              @{portfolio.user?.username}
            </p>

            <span
              className="badge rounded-pill fw-medium px-3 py-2"
              style={{ background: "#eef2ff", color: "#4338ca" }}
            >
              {portfolio.title}
            </span>

          </div>
        </div>

        {/* ABOUT */}
        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body p-4 p-md-5">

            <h3 className="fw-bold mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-person-lines-fill text-primary"></i>
              About Me
            </h3>

            <p
              className="text-muted mb-0"
              style={{ lineHeight: 1.9 }}
            >
              {portfolio.about}
            </p>

          </div>
        </div>

        {/* SKILLS */}
        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body p-4 p-md-5">

            <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <i className="bi bi-stars text-primary"></i>
              Skills
            </h3>

            {portfolio.skills.length === 0 ? (
              <p className="text-muted mb-0">
                No Skills Added
              </p>
            ) : (
              <div>
                {portfolio.skills.map((skill) => (
                  <span
                    key={skill}
                    className="badge rounded-pill me-2 mb-2 skill-chip"
                    style={{
                      background: "#eef2ff",
                      color: "#4338ca",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                      padding: "0.6rem 1rem",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

          </div>
        </div>

        {/* PROJECTS */}
        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body p-4 p-md-5">

            <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <i className="bi bi-code-slash text-primary"></i>
              Projects
            </h3>

            {portfolio.projects.length === 0 ? (
              <p className="text-muted mb-0">
                No Projects Yet
              </p>
            ) : (
              <div className="row g-3">

                {portfolio.projects.map(
                  (project, index) => (

                    <div
                      className="col-md-6"
                      key={index}
                    >
                      <div className="card h-100 border rounded-4 project-card">

                        <div className="card-body p-4">

                          <h5 className="fw-bold mb-2">
                            {project.title}
                          </h5>

                          <p className="text-muted mb-3">
                            {project.description}
                          </p>

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

                      </div>

                    </div>

                  )
                )}

              </div>
            )}

          </div>
        </div>

        {/* EDUCATION */}
        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body p-4 p-md-5">

            <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <i className="bi bi-mortarboard-fill text-primary"></i>
              Education
            </h3>

            {portfolio.education.length === 0 ? (
              <p className="text-muted mb-0">
                No Education Added
              </p>
            ) : (
              <div className="d-flex flex-column gap-3">

                {portfolio.education.map((edu, index) => (

                  <div
                    key={index}
                    className="d-flex gap-3 border rounded-4 p-3 p-md-4 timeline-card"
                  >
                    <div
                      className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                      style={{ width: 48, height: 48, background: "#eef2ff" }}
                    >
                      <i className="bi bi-mortarboard-fill text-primary" style={{ fontSize: "1.25rem" }}></i>
                    </div>

                    <div>
                      <h5 className="fw-bold mb-1">
                        {edu.degree}
                      </h5>

                      <p className="text-muted mb-2">
                        {edu.university}
                      </p>

                      <span className="badge rounded-pill bg-light text-secondary border">
                        {edu.graduationYear}
                      </span>
                    </div>
                  </div>

                ))}

              </div>
            )}

          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="card border-0 shadow-sm rounded-4 mb-4">

          <div className="card-body p-4 p-md-5">

            <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <i className="bi bi-briefcase-fill text-primary"></i>
              Experience
            </h3>

            {portfolio.experience.length === 0 ? (
              <p className="text-muted mb-0">
                No Experience Added
              </p>
            ) : (
              <div className="d-flex flex-column gap-3">
                {portfolio.experience.map((exp, index) => (

                  <div
                    key={index}
                    className="d-flex gap-3 border rounded-4 p-3 p-md-4 timeline-card"
                  >
                    <div
                      className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                      style={{ width: 48, height: 48, background: "#e7f9f1" }}
                    >
                      <i className="bi bi-briefcase-fill" style={{ fontSize: "1.25rem", color: "#10b981" }}></i>
                    </div>

                    <div>
                      <h5 className="fw-bold mb-1">
                        {exp.role}
                      </h5>

                      <h6 className="mb-1" style={{ color: "#4f46e5" }}>
                        {exp.company}
                      </h6>

                      <small className="text-muted d-block mb-2">
                        {exp.duration}
                      </small>

                      <p className="mb-0 text-muted">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                ))}
              </div>
            )}

          </div>

        </div>

        {/* SOCIAL LINKS */}
        <div className="card border-0 shadow-sm rounded-4">

          <div className="card-body text-center p-4 p-md-5">

            <h3 className="fw-bold mb-4 d-flex align-items-center justify-content-center gap-2">
              <i className="bi bi-share-fill text-primary"></i>
              Connect With Me
            </h3>

            <div className="d-flex justify-content-center flex-wrap gap-3">

              {portfolio.socialLinks.github && (
                <a
                  href={portfolio.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-lg btn-outline-dark rounded-3 fw-medium"
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
                  className="btn btn-lg rounded-3 fw-medium"
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
                  className="btn btn-lg btn-outline-primary rounded-3 fw-medium"
                >
                  <i className="bi bi-globe me-2"></i>
                  Portfolio
                </a>
              )}

            </div>

          </div>

        </div>

      </div>

      <style>{`
        .skill-chip {
          transition: transform 0.15s ease;
        }
        .skill-chip:hover {
          transform: translateY(-1px);
        }
        .project-card, .timeline-card {
          transition: box-shadow 0.15s ease, transform 0.15s ease;
        }
        .project-card:hover, .timeline-card:hover {
          box-shadow: 0 0.5rem 1.25rem rgba(17, 24, 39, 0.06);
          transform: translateY(-2px);
        }
      `}</style>

    </div>
  );
};

export default PublicPortfolio;