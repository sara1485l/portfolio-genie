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
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  if (!portfolio) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="text-center">
          <i
            className="bi bi-person-x"
            style={{ fontSize: "70px" }}
          ></i>

          <h2 className="mt-3">
            Portfolio Not Found
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div
      className="py-5"
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      <div className="container">

        {/* HERO */}

        <div className="card border-0 shadow-lg rounded-4 mb-4">

          <div className="card-body p-5 text-center">

            {portfolio.user?.avatar ? (
              <img
                src={portfolio.user.avatar}
                alt="avatar"
                className="rounded-circle border border-4 border-primary"
                width={140}
                height={140}
              />
            ) : (
              <div
                className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center"
                style={{
                  width: 140,
                  height: 140,
                  fontSize: 50,
                }}
              >
                👤
              </div>
            )}

            <h2 className="fw-bold mt-4">
              {portfolio.user?.name ?? "Your Name"}
            </h2>

            <p className="text-muted fs-5">
              @{portfolio.user?.username}
            </p>

            <h4 className="text-primary fw-bold">
              {portfolio.title}
            </h4>

          </div>

        </div>

        {/* ABOUT */}

        <div className="card border-0 shadow rounded-4 mb-4">

          <div className="card-body p-4">

            <h3 className="fw-bold mb-3">
              <i className="bi bi-person-lines-fill me-2"></i>
              About Me
            </h3>

            <p
              className="text-secondary"
              style={{
                lineHeight: 1.9,
              }}
            >
              {portfolio.about}
            </p>

          </div>

        </div>

        {/* SKILLS */}

        <div className="card border-0 shadow rounded-4 mb-4">

          <div className="card-body p-4">

            <h3 className="fw-bold mb-4">
              <i className="bi bi-stars me-2"></i>
              Skills
            </h3>

            {portfolio.skills.length === 0 ? (
              <p className="text-muted">
                No Skills Added
              </p>
            ) : (
              portfolio.skills.map((skill) => (
                <span
                  key={skill}
                  className="badge rounded-pill bg-primary fs-6 me-2 mb-2 px-3 py-2"
                >
                  {skill}
                </span>
              ))
            )}

          </div>

        </div>

        {/* PROJECTS */}

        <div className="card border-0 shadow rounded-4 mb-4">

          <div className="card-body p-4">

            <h3 className="fw-bold mb-4">
              <i className="bi bi-code-slash me-2"></i>
              Projects
            </h3>

            {portfolio.projects.length === 0 ? (
              <p className="text-muted">
                No Projects Yet
              </p>
            ) : (
              <div className="row">

                {portfolio.projects.map(
                  (project, index) => (

                    <div
                      className="col-md-6 mb-4"
                      key={index}
                    >
                      <div className="card h-100 border-0 shadow-sm rounded-4">

                        <div className="card-body">

                          <h4 className="fw-bold">
                            {project.title}
                          </h4>

                          <p className="text-secondary">
                            {project.description}
                          </p>

                          <div className="mt-3">

                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-dark me-2"
                              >
                                <i className="bi bi-github me-2"></i>
                                GitHub
                              </a>
                            )}

                            {project.liveDemo && (
                              <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-primary"
                              >
                                <i className="bi bi-box-arrow-up-right me-2"></i>
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

        <div className="card border-0 shadow rounded-4 mb-4">
          <div className="card-body p-4">

            <h3 className="fw-bold mb-4">
              <i className="bi bi-mortarboard-fill me-2"></i>
              Education
            </h3>

            {portfolio.education.length === 0 ? (
              <p className="text-muted">
                No Education Added
              </p>
            ) : (
              <div className="row">

                {portfolio.education.map((edu, index) => (

                  <div
                    key={index}
                    className="col-md-6 mb-3"
                  >
                    <div className="border rounded-4 p-4 h-100">

                      <h5 className="fw-bold">
                        {edu.degree}
                      </h5>

                      <p className="text-secondary mb-1">
                        {edu.university}
                      </p>

                      <span className="badge bg-light text-dark">
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

        <div className="card border-0 shadow rounded-4 mb-4">

          <div className="card-body p-4">

            <h3 className="fw-bold mb-4">
              <i className="bi bi-briefcase-fill me-2"></i>
              Experience
            </h3>

            {portfolio.experience.length === 0 ? (
              <p className="text-muted">
                No Experience Added
              </p>
            ) : (
              portfolio.experience.map((exp, index) => (

                <div
                  key={index}
                  className="border-start border-4 border-primary ps-4 mb-4"
                >

                  <h5 className="fw-bold">
                    {exp.role}
                  </h5>

                  <h6 className="text-primary">
                    {exp.company}
                  </h6>

                  <small className="text-muted">
                    {exp.duration}
                  </small>

                  <p className="mt-2 text-secondary">
                    {exp.description}
                  </p>

                </div>

              ))
            )}

          </div>

        </div>

        {/* SOCIAL LINKS */}

        <div className="card border-0 shadow rounded-4">

          <div className="card-body text-center p-5">

            <h3 className="fw-bold mb-4">
              <i className="bi bi-share-fill me-2"></i>
              Connect With Me
            </h3>

            <div className="d-flex justify-content-center flex-wrap gap-3">

              {portfolio.socialLinks.github && (
                <a
                  href={portfolio.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark btn-lg"
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
                  className="btn btn-primary btn-lg"
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
                  className="btn btn-success btn-lg"
                >
                  <i className="bi bi-globe me-2"></i>
                  Portfolio
                </a>
              )}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default PublicPortfolio;