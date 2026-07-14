
import { useAuth } from "../hooks/useAuth";
import { Link, NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/dashboard"
        >
          FolioAI
        </Link>

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbar"
        >

          <ul className="navbar-nav me-auto">

            <li className="nav-item">

              <NavLink
                to="/dashboard"
                className="nav-link"
              >
                Dashboard
              </NavLink>

            </li>

            <li className="nav-item">

              <NavLink
                to="/builder"
                className="nav-link"
              >
                Builder
              </NavLink>

            </li>

            <li className="nav-item">

              <NavLink
                to="/resume-ai"
                className="nav-link"
              >
                Resume AI
              </NavLink>

            </li>

            <li className="nav-item">

              <NavLink
                to="/cover-ai"
                className="nav-link"
              >
                Cover
              </NavLink>

            </li>

            <li className="nav-item">

              <NavLink
                to="/ats"
                className="nav-link"
              >
                ATS
              </NavLink>

            </li>

            <li className="nav-item">

              <NavLink
                to="/improve-ai"
                className="nav-link"
              >
                Improve
              </NavLink>

            </li>

          </ul>

          <button
  className="btn btn-outline-light"
  onClick={() => {
    logout();
    navigate("/login");
  }}
>
  Logout
</button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;