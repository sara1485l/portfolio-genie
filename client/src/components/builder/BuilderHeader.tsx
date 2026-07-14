import { Spinner } from "react-bootstrap";

interface Props {
  saving: boolean;
  onSave: () => void;
  onPreview: () => void;
}

const BuilderHeader = ({
  saving,
  onSave,
  onPreview,
}: Props) => {
  return (
    <div
      className="card border-0 shadow-sm rounded-4 mb-1"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #fbfbff 100%)",
      }}
    >
      <div className="card-body p-3 p-md-4 d-flex flex-wrap justify-content-between align-items-center gap-3">

        <div className="d-flex align-items-center gap-3">
          <div
            className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0 d-none d-sm-flex"
            style={{
              width: "44px",
              height: "44px",
              background:
                "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
            }}
          >
            <i className="bi bi-magic text-white" style={{ fontSize: "1.15rem" }} />
          </div>

          <div>
            <h4 className="fw-bold mb-0" style={{ letterSpacing: "-0.01em" }}>
              Portfolio Builder
            </h4>

            <small className="text-muted">
              Build your professional portfolio
            </small>
          </div>
        </div>

        <div className="d-flex gap-2">

          <button
            className="btn btn-outline-secondary rounded-3 px-3 fw-medium"
            onClick={onPreview}
          >
            <i className="bi bi-eye me-2"></i>
            Preview
          </button>

          <button
            className="btn btn-primary rounded-3 px-4 fw-medium shadow-sm"
            disabled={saving}
            onClick={onSave}
          >
            {saving ? (
              <>
                <Spinner
                  animation="border"
                  size="sm"
                  className="me-2"
                />
                Saving...
              </>
            ) : (
              <>
                <i className="bi bi-floppy me-2"></i>
                Save Portfolio
              </>
            )}
          </button>

        </div>

      </div>
    </div>
  );
};

export default BuilderHeader;