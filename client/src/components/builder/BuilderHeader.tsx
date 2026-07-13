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
    <div className="card shadow-sm border-0 mb-4">
      <div className="card-body d-flex justify-content-between align-items-center">

        <div>
          <h3 className="fw-bold mb-0">
            Portfolio Builder
          </h3>

          <small className="text-muted">
            Build your professional portfolio
          </small>
        </div>

        <div>

          <button
            className="btn btn-outline-primary me-2"
            onClick={onPreview}
          >
            <i className="bi bi-eye me-2"></i>
            Preview
          </button>

          <button
            className="btn btn-primary"
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