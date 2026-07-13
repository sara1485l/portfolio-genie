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
    <div className="card shadow border-0 rounded-4">
      <div className="card-body p-4">

        <h3 className="fw-bold mb-4">
          Education
        </h3>

        <input
          className="form-control mb-3"
          placeholder="University"
          value={education.university}
          onChange={(e) =>
            setEducation({
              ...education,
              university:
                e.target.value,
            })
          }
        />

        <input
          className="form-control mb-3"
          placeholder="Degree"
          value={education.degree}
          onChange={(e) =>
            setEducation({
              ...education,
              degree: e.target.value,
            })
          }
        />

        <input
          type="number"
          className="form-control mb-4"
          placeholder="Graduation Year"
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

        <button
          className="btn btn-primary"
          onClick={addEducation}
        >
          Add Education
        </button>

        <hr className="my-4" />

        {portfolio.education.map(
          (item, index) => (
            <div
              key={index}
              className="border rounded-3 p-3 mb-3"
            >
              <div className="d-flex justify-content-between">

                <div>

                  <h5>{item.degree}</h5>

                  <p className="mb-1">
                    {item.university}
                  </p>

                  <small>
                    {item.graduationYear}
                  </small>

                </div>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() =>
                    removeEducation(index)
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

export default EducationForm;