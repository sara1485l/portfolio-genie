import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import { login as loginService } from "../services/auth.service";
import { useAuth } from "../hooks/useAuth";

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>();

  const navigate = useNavigate();
  const { login } = useAuth();

  const [serverError, setServerError] = useState("");

  const onSubmit = async (data: LoginForm) => {
    setServerError("");

    try {
      const response = await loginService(data);

      login(
        response.data.data.token,
        response.data.data.user
      );

      navigate("/dashboard");
 } catch (error: unknown) {
  console.error(error);

  setServerError("Invalid email or password.");
}
  };

  return (
    <div className="min-vh-100 d-flex" style={{ background: "#f7f8fc" }}>

      {/* LEFT: FORM */}
      <div className="d-flex flex-column justify-content-center col-12 col-lg-6 px-3 px-sm-4 px-md-5 py-5">

        <div className="mx-auto w-100" style={{ maxWidth: "420px" }}>

          <div className="d-flex align-items-center gap-2 mb-5">
            <div
              className="d-flex align-items-center justify-content-center rounded-3"
              style={{
                width: "36px",
                height: "36px",
                background:
                  "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
              }}
            >
              <i className="bi bi-magic text-white"></i>
            </div>
            <span className="fw-bold fs-5" style={{ letterSpacing: "-0.01em" }}>
              Folio<span style={{ color: "#7c3aed" }}>AI</span>
            </span>
          </div>

          <h2 className="fw-bold mb-1" style={{ letterSpacing: "-0.02em" }}>
            Welcome back
          </h2>

          <p className="text-muted mb-4">
            Log in to continue building your portfolio.
          </p>

          {serverError && (
            <div className="alert alert-danger rounded-3 d-flex align-items-center gap-2">
              <i className="bi bi-exclamation-circle-fill"></i>
              {serverError}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label fw-semibold">
                Email
              </label>

              <div className="input-group input-group-lg">
                <span className="input-group-text bg-white border-end-0 rounded-start-3">
                  <i className="bi bi-envelope text-muted"></i>
                </span>

                <input
                  type="email"
                  className={`form-control border-start-0 rounded-end-3 ${
                    errors.email ? "is-invalid" : ""
                  }`}
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Enter a valid email",
                    },
                  })}
                />

                <div className="invalid-feedback">
                  {errors.email?.message}
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="form-label fw-semibold">
                Password
              </label>

              <div className="input-group input-group-lg">
                <span className="input-group-text bg-white border-end-0 rounded-start-3">
                  <i className="bi bi-lock text-muted"></i>
                </span>

                <input
                  type="password"
                  className={`form-control border-start-0 rounded-end-3 ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message:
                        "Password must be at least 6 characters",
                    },
                  })}
                />

                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-lg w-100 rounded-3 fw-semibold text-white shadow-sm"
              style={{
                background:
                  "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)",
                border: "none",
              }}
            >
              {isSubmitting ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                  ></span>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <p className="text-center mt-4 mb-0 text-muted">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-decoration-none fw-semibold"
              style={{ color: "#4f46e5" }}
            >
              Register
            </Link>
          </p>
        </div>

      </div>

      {/* RIGHT: HERO PANEL */}
      <div
        className="d-none d-lg-flex col-lg-6 align-items-center justify-content-center position-relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #4f46e5 0%, #7c3aed 55%, #a855f7 100%)",
        }}
      >
        <div
          className="position-absolute top-0 end-0"
          style={{
            width: "320px",
            height: "320px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
            transform: "translate(30%, -30%)",
          }}
        />

        <div className="text-center text-white px-5" style={{ maxWidth: "440px" }}>

          <div
            className="d-inline-flex align-items-center justify-content-center rounded-4 mb-4"
            style={{
              width: "72px",
              height: "72px",
              background: "rgba(255,255,255,0.15)",
            }}
          >
            <i className="bi bi-stars" style={{ fontSize: "2rem" }}></i>
          </div>

          <h2 className="fw-bold mb-3" style={{ letterSpacing: "-0.02em" }}>
            Build a portfolio that gets you noticed
          </h2>

          <p className="opacity-75 mb-0">
            AI-powered writing, premium templates, and a shareable link
            that makes your work impossible to ignore.
          </p>

        </div>
      </div>

    </div>
  );
};

export default Login;