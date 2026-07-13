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
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  if (!portfolio) {
    return <h2 className="text-center mt-5">Portfolio not found</h2>;
  }

  return (
    <div className="container py-5">
      <div className="card shadow p-5">
        <h1>{portfolio.title}</h1>

        <hr />

        <p>{portfolio.about}</p>

        <hr />

        <h3>Skills</h3>

        <div className="mb-3">
          {portfolio.skills.map((skill) => (
            <span key={skill} className="badge bg-primary me-2 mb-2">
              {skill}
            </span>
          ))}
        </div>

        <hr />

        <h3>Projects</h3>

        {portfolio.projects.map((project, index) => (
          <div key={index} className="mb-4">
            <h5>{project.title}</h5>

            <p>{project.description}</p>

            {project.github && (
              <p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </p>
            )}

            {project.liveDemo && (
              <p>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </p>
            )}
          </div>
        ))}

        <hr />

        <h3>Education</h3>

        {portfolio.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <strong>{edu.degree}</strong>

            <p>{edu.university}</p>

            <small>Graduation Year: {edu.graduationYear}</small>
          </div>
        ))}

        <hr />

        <h3>Experience</h3>

        {portfolio.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <strong>{exp.role}</strong>

            <p>{exp.company}</p>

            <p>{exp.duration}</p>

            <p>{exp.description}</p>
          </div>
        ))}

        <hr />

        <h3>Social Links</h3>

        {portfolio.socialLinks.github && (
          <p>
            <a
              href={portfolio.socialLinks.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
        )}

        {portfolio.socialLinks.linkedin && (
          <p>
            <a
              href={portfolio.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        )}

        {portfolio.socialLinks.portfolio && (
          <p>
            <a
              href={portfolio.socialLinks.portfolio}
              target="_blank"
              rel="noreferrer"
            >
              Portfolio Website
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default Preview;