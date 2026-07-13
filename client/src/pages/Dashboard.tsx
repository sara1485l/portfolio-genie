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
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">

      <div
        className="spinner-border text-primary mb-3"
        style={{
          width: "3rem",
          height: "3rem",
        }}
      />

      <h5 className="text-muted">
        Loading Dashboard...
      </h5>

    </div>
  );
}
  return (
  <div className="container py-5">
    {/* Header */}
    <div className="card border-0 shadow-lg rounded-4 mb-5">
      <div className="card-body p-5 d-flex flex-column flex-md-row justify-content-between align-items-md-center">
        <div>
          <h2 className="fw-bold mb-2">
            👋 Welcome to your Dashboard
          </h2>

          <p className="text-muted mb-0">
            Manage and customize your professional portfolio.
          </p>
        </div>

        <Link
          to="/builder"
          className="btn btn-primary btn-lg mt-4 mt-md-0 px-4"
        >
          {portfolio ? "Edit Portfolio" : "Create Portfolio"}
        </Link>
      </div>
    </div>

    {!portfolio ? (
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body text-center py-5">

          <div style={{ fontSize: "70px" }}>
            📂
          </div>

          <h3 className="fw-bold mt-3">
            No Portfolio Yet
          </h3>

          <p className="text-muted mb-4">
            Start building your professional portfolio
            in just a few minutes.
          </p>

          <Link
            to="/builder"
            className="btn btn-primary px-5"
          >
            Create Portfolio
          </Link>

        </div>
      </div>
    ) : (
      <>
        {/* Stats */}
        <div className="row g-4 mb-5">

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body text-center p-4">

                <div
                  className="display-5 mb-3"
                >
                  📁
                </div>

                <h6 className="text-muted">
                  Portfolio
                </h6>

                <h3 className="fw-bold">
                  {portfolio.title}
                </h3>

              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body text-center p-4">

                <div className="display-5 mb-3">
                  💡
                </div>

                <h6 className="text-muted">
                  Skills
                </h6>

                <h3 className="fw-bold">
                  {portfolio.skills.length}
                </h3>

              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body text-center p-4">

                <div className="display-5 mb-3">
                  🚀
                </div>

                <h6 className="text-muted">
                  Projects
                </h6>

                <h3 className="fw-bold">
                  {portfolio.projects.length}
                </h3>

              </div>
            </div>
          </div>

        </div>

        {/* Actions */}
        <div className="card border-0 shadow-lg rounded-4">

          <div className="card-body p-4">

            <h4 className="fw-bold mb-4">
              Portfolio Actions
            </h4>

            <div className="d-flex flex-wrap gap-3">

              <Link
                to="/builder"
                className="btn btn-primary"
              >
                ✏️ Edit
              </Link>

              <Link
                to="/preview"
                className="btn btn-outline-primary"
              >
                👁 Preview
              </Link>

              {portfolio.user && (
                <Link
                  to={`/u/${portfolio.user.username}`}
                  className="btn btn-outline-dark"
                >
                  🌍 Public Page
                </Link>
              )}

              <button
                onClick={removePortfolio}
                className="btn btn-danger ms-auto"
              >
                🗑 Delete Portfolio
              </button>

            </div>

          </div>

        </div>
      </>
    )}
  </div>
);
};

export default Dashboard;