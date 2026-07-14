import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getMyPortfolio,
  deletePortfolio,
} from "../services/portfolio.service";

import type { Portfolio } from "../types/portfolio";

const Dashboard = () => {
  const [portfolio, setPortfolio] =
    useState<Portfolio | null>(null);

  const [loading, setLoading] =
    useState(true);

  async function loadPortfolio() {
    try {
      const res =
        await getMyPortfolio();

      setPortfolio(res.data.data);
    } catch {
      setPortfolio(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPortfolio();
  }, []);

  async function removePortfolio() {
    const confirmDelete =
      window.confirm(
        "Delete portfolio?"
      );

    if (!confirmDelete) return;

    try {
      await deletePortfolio();

      setPortfolio(null);

      alert("Portfolio deleted");
    } catch (err) {
      console.log(err);

      alert("Something went wrong");
    }
  }

if (loading) {
  return (
    <div
      className="vh-100 d-flex flex-column justify-content-center align-items-center"
      style={{
        background:
          "linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%)",
      }}
    >
      <div
        className="d-flex align-items-center justify-content-center rounded-4 mb-4 shadow-sm"
        style={{
          width: "72px",
          height: "72px",
          background:
            "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
        }}
      >
        <div
          className="spinner-border text-white"
          style={{ width: "2rem", height: "2rem" }}
          role="status"
        />
      </div>

      <h5 className="fw-semibold mb-1" style={{ letterSpacing: "-0.01em" }}>
        Loading your dashboard
      </h5>

      <p className="text-muted small mb-0">
        Just a moment while we gather your data...
      </p>
    </div>
  );
}
  return (
  <div style={{ background: "#f7f8fc", minHeight: "100vh" }}>
    <div className="container py-4 py-md-5" style={{ maxWidth: "1100px" }}>

      {/* Hero */}
      <div
        className="rounded-5 shadow-sm mb-4 mb-md-5 position-relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #4f46e5 0%, #7c3aed 55%, #a855f7 100%)",
        }}
      >
        <div
          className="position-absolute top-0 end-0 d-none d-md-block"
          style={{
            width: "260px",
            height: "260px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
            transform: "translate(30%, -30%)",
          }}
        />

        <div className="card-body p-4 p-md-5 d-flex flex-column flex-md-row justify-content-between align-items-md-center position-relative">
          <div className="text-white">
            <span className="badge bg-white bg-opacity-25 text-white fw-medium mb-3 px-3 py-2 rounded-pill">
              <i className="bi bi-stars me-1" />
              Dashboard
            </span>

            <h2 className="fw-bold mb-2" style={{ letterSpacing: "-0.02em" }}>
              Welcome back
            </h2>

            <p className="mb-0 opacity-75" style={{ maxWidth: "420px" }}>
              Manage and customize your professional portfolio from one
              place.
            </p>
          </div>

          <Link
            to="/builder"
            className="btn btn-light btn-lg mt-4 mt-md-0 px-4 fw-semibold rounded-3 shadow-sm flex-shrink-0"
          >
            {portfolio ? (
              <>
                <i className="bi bi-pencil-square me-2" />
                Edit Portfolio
              </>
            ) : (
              <>
                <i className="bi bi-plus-circle me-2" />
                Create Portfolio
              </>
            )}
          </Link>
        </div>
      </div>

      {!portfolio ? (
        <div className="card border-0 shadow-sm rounded-5">
          <div className="card-body text-center py-5 px-4">

            <div
              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
              style={{
                width: "96px",
                height: "96px",
                background:
                  "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)",
              }}
            >
              <i
                className="bi bi-folder2-open text-primary"
                style={{ fontSize: "2.75rem" }}
              />
            </div>

            <h3 className="fw-bold mb-2" style={{ letterSpacing: "-0.01em" }}>
              No portfolio yet
            </h3>

            <p className="text-muted mb-4 mx-auto" style={{ maxWidth: "380px" }}>
              Start building your professional portfolio in just a few
              minutes and share it with the world.
            </p>

            <Link
              to="/builder"
              className="btn btn-primary btn-lg px-5 rounded-3 fw-semibold shadow-sm"
            >
              <i className="bi bi-plus-circle me-2" />
              Create Portfolio
            </Link>

            <p className="text-muted small mt-4 mb-0">
              It only takes a few minutes to get started.
            </p>

          </div>
        </div>
      ) : (
        <>
          {/* Stats */}
          <div className="row g-3 g-md-4 mb-4 mb-md-5">

            <div className="col-12 col-md-4">
              <div className="card border-0 shadow-sm rounded-4 h-100 stat-card">
                <div className="card-body p-4 d-flex align-items-center gap-3">

                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                    style={{
                      width: "56px",
                      height: "56px",
                      background: "#eef2ff",
                    }}
                  >
                    <i
                      className="bi bi-folder-fill text-primary"
                      style={{ fontSize: "1.5rem" }}
                    />
                  </div>

                  <div className="overflow-hidden">
                    <h6 className="text-muted text-uppercase small fw-semibold mb-1" style={{ letterSpacing: "0.04em" }}>
                      Portfolio
                    </h6>

                    <h4 className="fw-bold mb-0 text-truncate">
                      {portfolio.title}
                    </h4>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-6 col-md-4">
              <div className="card border-0 shadow-sm rounded-4 h-100 stat-card">
                <div className="card-body p-4 d-flex align-items-center gap-3">

                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                    style={{
                      width: "56px",
                      height: "56px",
                      background: "#fef3e2",
                    }}
                  >
                    <i
                      className="bi bi-lightbulb-fill"
                      style={{ fontSize: "1.5rem", color: "#f59e0b" }}
                    />
                  </div>

                  <div>
                    <h6 className="text-muted text-uppercase small fw-semibold mb-1" style={{ letterSpacing: "0.04em" }}>
                      Skills
                    </h6>

                    <h3 className="fw-bold mb-0">
                      {portfolio.skills.length}
                    </h3>
                  </div>

                </div>
              </div>
            </div>

            <div className="col-6 col-md-4">
              <div className="card border-0 shadow-sm rounded-4 h-100 stat-card">
                <div className="card-body p-4 d-flex align-items-center gap-3">

                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                    style={{
                      width: "56px",
                      height: "56px",
                      background: "#e7f9f1",
                    }}
                  >
                    <i
                      className="bi bi-rocket-takeoff-fill"
                      style={{ fontSize: "1.5rem", color: "#10b981" }}
                    />
                  </div>

                  <div>
                    <h6 className="text-muted text-uppercase small fw-semibold mb-1" style={{ letterSpacing: "0.04em" }}>
                      Projects
                    </h6>

                    <h3 className="fw-bold mb-0">
                      {portfolio.projects.length}
                    </h3>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Actions */}
          <div className="card border-0 shadow-sm rounded-4">

            <div className="card-body p-4 p-md-4">

              <h5 className="fw-bold mb-4">
                Portfolio actions
              </h5>

              <div className="d-flex flex-wrap gap-2 gap-md-3">

                <Link
                  to="/builder"
                  className="btn btn-primary rounded-3 px-4 fw-medium"
                >
                  <i className="bi bi-pencil-square me-2" />
                  Edit
                </Link>

                <Link
                  to="/preview"
                  className="btn btn-outline-primary rounded-3 px-4 fw-medium"
                >
                  <i className="bi bi-eye me-2" />
                  Preview
                </Link>

                {portfolio.user && (
                  <Link
                    to={`/u/${portfolio.user.username}`}
                    className="btn btn-outline-dark rounded-3 px-4 fw-medium"
                  >
                    <i className="bi bi-globe2 me-2" />
                    Public Page
                  </Link>
                )}

                <button
                  onClick={removePortfolio}
                  className="btn btn-outline-danger rounded-3 px-4 fw-medium ms-md-auto"
                >
                  <i className="bi bi-trash3 me-2" />
                  Delete Portfolio
                </button>

              </div>

            </div>

          </div>
        </>
      )}
    </div>

    <style>{`
      .stat-card {
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .stat-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 0.75rem 1.5rem rgba(17, 24, 39, 0.08) !important;
      }
    `}</style>
  </div>
);
};

export default Dashboard;