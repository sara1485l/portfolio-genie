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
    <div className="card shadow border-0 rounded-4">
      <div className="card-body p-4">

        <h3 className="fw-bold mb-4">
          Experience
        </h3>

        <input
          className="form-control mb-3"
          placeholder="Company"
          value={experience.company}
          onChange={(e) =>
            setExperience({
              ...experience,
              company: e.target.value,
            })
          }
        />

        <input
          className="form-control mb-3"
          placeholder="Role"
          value={experience.role}
          onChange={(e) =>
            setExperience({
              ...experience,
              role: e.target.value,
            })
          }
        />

        <input
          className="form-control mb-3"
          placeholder="Duration"
          value={experience.duration}
          onChange={(e) =>
            setExperience({
              ...experience,
              duration: e.target.value,
            })
          }
        />

        <textarea
          rows={4}
          className="form-control mb-4"
          placeholder="Description"
          value={experience.description}
          onChange={(e) =>
            setExperience({
              ...experience,
              description:
                e.target.value,
            })
          }
        />

        <button
          className="btn btn-primary"
          onClick={addExperience}
        >
          Add Experience
        </button>

        <hr className="my-4" />

        {portfolio.experience.map(
          (item, index) => (
            <div
              key={index}
              className="border rounded-3 p-3 mb-3"
            >
              <div className="d-flex justify-content-between">

                <div>

                  <h5>{item.role}</h5>

                  <p className="mb-1">
                    {item.company}
                  </p>

                  <small>
                    {item.duration}
                  </small>

                  <p className="mt-2 mb-0">
                    {item.description}
                  </p>

                </div>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    removeExperience(index)
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

export default ExperienceForm;