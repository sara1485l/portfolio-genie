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
    <div className="card border-0 shadow-sm rounded-4">

      <div className="card-body p-3">

        <h6
          className="text-muted text-uppercase fw-semibold px-2 mb-3"
          style={{ fontSize: "0.72rem", letterSpacing: "0.06em" }}
        >
          Builder Steps
        </h6>

        <div className="d-flex flex-column gap-1">
          {steps.map((step) => {
            const isActive = currentStep === step.id;

            return (
              <button
                key={step.id}
                className={`btn w-100 text-start d-flex align-items-center gap-2 border-0 builder-nav-btn${
                  isActive ? " active" : ""
                }`}
                style={{
                  padding: "0.65rem 0.85rem",
                  borderRadius: "0.85rem",
                  fontWeight: 500,
                  transition: "all 0.15s ease",
                  background: isActive
                    ? "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)"
                    : "transparent",
                  color: isActive ? "#fff" : "#374151",
                  boxShadow: isActive
                    ? "0 4px 12px rgba(79, 70, 229, 0.25)"
                    : "none",
                }}
                onClick={() =>
                  setCurrentStep(step.id)
                }
              >
                <i
                  className={`bi ${step.icon}`}
                  style={{ fontSize: "1rem", width: "1.1rem" }}
                ></i>

                <span>{step.title}</span>

                {isActive && (
                  <i className="bi bi-chevron-right ms-auto small"></i>
                )}
              </button>
            );
          })}
        </div>

      </div>

      <style>{`
        .builder-nav-btn:not(.active):hover {
          background: #f3f4f6 !important;
        }
      `}</style>

    </div>
  );
};

export default BuilderSidebar;