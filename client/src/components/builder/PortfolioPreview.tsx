import type { Portfolio } from "../../types/portfolio";

interface Props {
  portfolio: Portfolio;
}

const PortfolioPreview = ({
  portfolio,
}: Props) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">

      <div
        style={{
          height: "140px",
          background:
            "linear-gradient(135deg, #4f46e5 0%, #7c3aed 55%, #a855f7 100%)",
        }}
      />

      <div className="card-body p-4 p-md-5" style={{ marginTop: "-72px" }}>

        <div className="text-center mb-5">

          {portfolio.user?.avatar ? (
            <img
              src={portfolio.user.avatar}
              alt="avatar"
              className="rounded-circle border border-4 border-white shadow"
              width={120}
              height={120}
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div
              className="rounded-circle border border-4 border-white shadow d-inline-flex justify-content-center align-items-center text-white"
              style={{
                width: 120,
                height: 120,
                fontSize: 40,
                background:
                  "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              }}
            >
              <i className="bi bi-person-fill"></i>
            </div>
          )}

          <h2 className="mt-3 fw-bold mb-0" style={{ letterSpacing: "-0.01em" }}>
            {portfolio.user?.name ??
              "Your Name"}
          </h2>

          <p className="text-muted mb-2">
            @{portfolio.user?.username ??
              "username"}
          </p>

          <span className="badge rounded-pill fw-medium px-3 py-2" style={{ background: "#eef2ff", color: "#4338ca" }}>
            {portfolio.title}
          </span>

        </div>

        <section className="mb-5">
          <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
            <i className="bi bi-person-lines-fill text-primary"></i>
            About
          </h5>

          <p className="text-muted mb-0">
            {portfolio.about ||
              "No about section yet."}
          </p>
        </section>

        <hr className="my-4" />

        <section className="mb-5">
          <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
            <i className="bi bi-stars text-primary"></i>
            Skills
          </h5>

          <div>
            {portfolio.skills.length ===
            0 ? (
              <p className="text-muted mb-0">
                No skills.
              </p>
            ) : (
              portfolio.skills.map(
                (skill, index) => (
                  <span
                    key={index}
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
                )
              )
            )}
          </div>
        </section>

        <hr className="my-4" />

        <section className="mb-5">
          <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
            <i className="bi bi-kanban text-primary"></i>
            Projects
          </h5>

          {portfolio.projects.length ===
          0 ? (
            <p className="text-muted mb-0">
              No projects.
            </p>
          ) : (
            <div className="d-flex flex-column gap-3">
              {portfolio.projects.map(
                (project, index) => (
                  <div
                    key={index}
                    className="border rounded-4 p-4"
                  >
                    <h6 className="fw-bold mb-2">
                      {project.title}
                    </h6>

                    <p className="text-muted mb-3">
                      {
                        project.description
                      }
                    </p>

                    <div className="d-flex gap-2 flex-wrap">
                      {project.github && (
                        <a
                          href={
                            project.github
                          }
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
                          href={
                            project.liveDemo
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
                )
              )}
            </div>
          )}
        </section>

        <hr className="my-4" />

        <section className="mb-5">
          <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
            <i className="bi bi-mortarboard text-primary"></i>
            Education
          </h5>

          {portfolio.education.length ===
          0 ? (
            <p className="text-muted mb-0">
              No education.
            </p>
          ) : (
            <div className="d-flex flex-column gap-3">
              {portfolio.education.map(
                (edu, index) => (
                  <div key={index} className="d-flex gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                      style={{
                        width: "42px",
                        height: "42px",
                        background: "#eef2ff",
                      }}
                    >
                      <i className="bi bi-mortarboard-fill text-primary"></i>
                    </div>

                    <div>
                      <strong className="d-block">
                        {edu.degree}
                      </strong>

                      <p className="mb-0 text-muted">
                        {edu.university}
                      </p>

                      <small className="text-muted">
                        {
                          edu.graduationYear
                        }
                      </small>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </section>

        <hr className="my-4" />

        <section className="mb-5">
          <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
            <i className="bi bi-briefcase text-primary"></i>
            Experience
          </h5>

          {portfolio.experience.length ===
          0 ? (
            <p className="text-muted mb-0">
              No experience.
            </p>
          ) : (
            <div className="d-flex flex-column gap-3">
              {portfolio.experience.map(
                (exp, index) => (
                  <div key={index} className="d-flex gap-3">
                    <div
                      className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                      style={{
                        width: "42px",
                        height: "42px",
                        background: "#e7f9f1",
                      }}
                    >
                      <i className="bi bi-briefcase-fill" style={{ color: "#10b981" }}></i>
                    </div>

                    <div>
                      <strong className="d-block">
                        {exp.role}
                      </strong>

                      <p className="mb-1 text-muted">
                        {exp.company}
                      </p>

                      <small className="text-muted d-block mb-1">
                        {
                          exp.duration
                        }
                      </small>

                      <p className="mb-0 text-muted">
                        {
                          exp.description
                        }
                      </p>
                    </div>
                  </div>
                )
              )}
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
                href={
                  portfolio
                    .socialLinks
                    .github
                }
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline-dark rounded-3"
              >
                <i className="bi bi-github me-2"></i>
                GitHub
              </a>
            )}

            {portfolio.socialLinks
              .linkedin && (
              <a
                href={
                  portfolio
                    .socialLinks
                    .linkedin
                }
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm rounded-3"
                style={{ color: "#0a66c2", border: "1px solid #0a66c2" }}
              >
                <i className="bi bi-linkedin me-2"></i>
                LinkedIn
              </a>
            )}

            {portfolio.socialLinks
              .portfolio && (
              <a
                href={
                  portfolio
                    .socialLinks
                    .portfolio
                }
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline-primary rounded-3"
              >
                <i className="bi bi-globe2 me-2"></i>
                Portfolio
              </a>
            )}

          </div>
        </section>

      </div>

    </div>
  );
};

export default PortfolioPreview;