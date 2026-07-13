import type { Portfolio } from "../../types/portfolio";

interface Props {
  portfolio: Portfolio;
}

const PortfolioPreview = ({
  portfolio,
}: Props) => {
  return (
    <div className="card shadow border-0 rounded-4">

      <div className="card-body p-5">

        <div className="text-center mb-5">

          {portfolio.user?.avatar ? (
            <img
              src={portfolio.user.avatar}
              alt="avatar"
              className="rounded-circle border"
              width={120}
              height={120}
            />
          ) : (
            <div
              className="rounded-circle bg-secondary text-white d-inline-flex justify-content-center align-items-center"
              style={{
                width: 120,
                height: 120,
                fontSize: 40,
              }}
            >
              👤
            </div>
          )}

          <h2 className="mt-3 fw-bold">
            {portfolio.user?.name ??
              "Your Name"}
          </h2>

          <p className="text-muted">
            @{portfolio.user?.username ??
              "username"}
          </p>

          <h4 className="text-primary mt-3">
            {portfolio.title}
          </h4>

        </div>

        <hr />

        <h4 className="fw-bold">
          About
        </h4>

        <p>
          {portfolio.about ||
            "No about section yet."}
        </p>

        <hr />

        <h4 className="fw-bold">
          Skills
        </h4>

        <div className="mb-4">

          {portfolio.skills.length ===
          0 ? (
            <p className="text-muted">
              No skills.
            </p>
          ) : (
            portfolio.skills.map(
              (skill, index) => (
                <span
                  key={index}
                  className="badge bg-primary me-2 mb-2 p-2"
                >
                  {skill}
                </span>
              )
            )
          )}

        </div>

        <hr />

        <h4 className="fw-bold">
          Projects
        </h4>

        {portfolio.projects.length ===
        0 ? (
          <p className="text-muted">
            No projects.
          </p>
        ) : (
          portfolio.projects.map(
            (project, index) => (
              <div
                key={index}
                className="border rounded-3 p-3 mb-3"
              >
                <h5>
                  {project.title}
                </h5>

                <p>
                  {
                    project.description
                  }
                </p>

                {project.github && (
                  <a
                    href={
                      project.github
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="me-3"
                  >
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
                  >
                    Live Demo
                  </a>
                )}
              </div>
            )
          )
        )}

        <hr />

        <h4 className="fw-bold">
          Education
        </h4>

        {portfolio.education.length ===
        0 ? (
          <p className="text-muted">
            No education.
          </p>
        ) : (
          portfolio.education.map(
            (edu, index) => (
              <div
                key={index}
                className="mb-3"
              >
                <strong>
                  {edu.degree}
                </strong>

                <p>
                  {edu.university}
                </p>

                <small>
                  {
                    edu.graduationYear
                  }
                </small>
              </div>
            )
          )
        )}

        <hr />

        <h4 className="fw-bold">
          Experience
        </h4>

        {portfolio.experience.length ===
        0 ? (
          <p className="text-muted">
            No experience.
          </p>
        ) : (
          portfolio.experience.map(
            (exp, index) => (
              <div
                key={index}
                className="mb-3"
              >
                <strong>
                  {exp.role}
                </strong>

                <p>
                  {exp.company}
                </p>

                <p>
                  {
                    exp.duration
                  }
                </p>

                <p>
                  {
                    exp.description
                  }
                </p>
              </div>
            )
          )
        )}

        <hr />

        <h4 className="fw-bold">
          Social Links
        </h4>

        {portfolio.socialLinks.github && (
          <p>
            <a
              href={
                portfolio
                  .socialLinks
                  .github
              }
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        )}

        {portfolio.socialLinks
          .linkedin && (
          <p>
            <a
              href={
                portfolio
                  .socialLinks
                  .linkedin
              }
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        )}

        {portfolio.socialLinks
          .portfolio && (
          <p>
            <a
              href={
                portfolio
                  .socialLinks
                  .portfolio
              }
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
          </p>
        )}

      </div>

    </div>
  );
};

export default PortfolioPreview;