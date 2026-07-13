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
    <div className="card shadow border-0 rounded-4">

      <div className="card-body p-4">

        <h3 className="fw-bold mb-4">
          Projects
        </h3>

        <input
          className="form-control mb-3"
          placeholder="Project Title"
          value={project.title}
          onChange={(e) =>
            setProject({
              ...project,
              title: e.target.value,
            })
          }
        />

        <input
          className="form-control mb-3"
          placeholder="Technologies (React,Node,MongoDB)"
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

        <input
          className="form-control mb-3"
          placeholder="Features (JWT,CRUD,Chat)"
          value={project.features}
          onChange={(e) =>
            setProject({
              ...project,
              features:
                e.target.value,
            })
          }
        />

        <textarea
          rows={5}
          className="form-control mb-3"
          placeholder="Description"
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

        <button
          className="btn btn-warning mb-4"
          disabled={loading}
          onClick={
            generateDescription
          }
        >
          {loading
            ? "Generating..."
            : "✨ Generate Description"}
        </button>

        <input
          className="form-control mb-3"
          placeholder="Github URL"
          value={project.github}
          onChange={(e) =>
            setProject({
              ...project,
              github:
                e.target.value,
            })
          }
        />

        <input
          className="form-control mb-4"
          placeholder="Live Demo URL"
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

        <button
          className="btn btn-primary"
          onClick={addProject}
        >
          Add Project
        </button>

        <hr className="my-4" />

        {portfolio.projects.map(
          (item, index) => (
            <div
              key={index}
              className="border rounded-3 p-3 mb-3"
            >
              <div className="d-flex justify-content-between">

                <div>

                  <h5>
                    {item.title}
                  </h5>

                  <p>
                    {
                      item.description
                    }
                  </p>

                  {item.github && (
                    <a
                      href={
                        item.github
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="me-3"
                    >
                      Github
                    </a>
                  )}

                  {item.liveDemo && (
                    <a
                      href={
                        item.liveDemo
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  )}

                </div>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    removeProject(
                      index
                    )
                  }
                >
                  Delete
                </button>

              </div>
            </div>
          )
        )}

      </div>

    </div>
  );
};

export default ProjectsForm;