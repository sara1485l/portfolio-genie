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
    <div className="container py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 col-lg-5">
          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">
              <h2 className="text-center fw-bold mb-2">
                Welcome Back
              </h2>

              <p className="text-center text-muted mb-4">
                Login to your account
              </p>

              {serverError && (
                <div className="alert alert-danger">
                  {serverError}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email
                  </label>

                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your email"
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

                {/* Password */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Password
                  </label>

                  <input
                    type="password"
                    className={`form-control ${
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

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-100 py-2"
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

              <p className="text-center mt-4 mb-0">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-decoration-none fw-semibold"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;