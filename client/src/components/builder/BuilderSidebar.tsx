interface Props {
  currentStep: string;
  setCurrentStep: (step: string) => void;
}

const steps = [
  {
    id: "about",
    title: "About",
    icon: "bi-person-circle",
  },
  {
    id: "skills",
    title: "Skills",
    icon: "bi-stars",
  },
  {
    id: "projects",
    title: "Projects",
    icon: "bi-kanban",
  },
  {
    id: "education",
    title: "Education",
    icon: "bi-mortarboard",
  },
  {
    id: "experience",
    title: "Experience",
    icon: "bi-briefcase",
  },
  {
    id: "social",
    title: "Social Links",
    icon: "bi-share",
  },
];

const BuilderSidebar = ({
  currentStep,
  setCurrentStep,
}: Props) => {
  return (
    <div className="card shadow-sm border-0">

      <div className="card-body">

        <h5 className="fw-bold mb-4">
          Builder
        </h5>

        {steps.map((step) => (
          <button
            key={step.id}
            className={`btn w-100 text-start mb-2 ${
              currentStep === step.id
                ? "btn-primary"
                : "btn-light"
            }`}
            onClick={() =>
              setCurrentStep(step.id)
            }
          >
            <i
              className={`bi ${step.icon} me-2`}
            ></i>

            {step.title}
          </button>
        ))}

      </div>

    </div>
  );
};

export default BuilderSidebar;