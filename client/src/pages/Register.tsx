import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import { register as registerService } from "../services/auth.service";

interface RegisterForm {
  name: string;
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const navigate = useNavigate();

  const onSubmit = async (data: RegisterForm) => {
    try {
      await registerService(data);

      alert("Account created successfully!");

      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <div className="min-vh-100 d-flex" style={{ background: "#f7f8fc" }}>

      {/* LEFT: HERO PANEL */}
      <div
        className="d-none d-lg-flex col-lg-6 align-items-center justify-content-center position-relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #4f46e5 0%, #7c3aed 55%, #a855f7 100%)",
        }}
      >
        <div
          className="position-absolute top-0 start-0"
          style={{
            width: "320px",
            height: "320px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
            transform: "translate(-30%, -30%)",
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
            <i className="bi bi-rocket-takeoff" style={{ fontSize: "2rem" }}></i>
          </div>

          <h2 className="fw-bold mb-3" style={{ letterSpacing: "-0.02em" }}>
            Join thousands building with AI
          </h2>

          <p className="opacity-75 mb-0">
            Create your account and have a polished, professional
            portfolio ready in minutes.
          </p>

        </div>
      </div>

      {/* RIGHT: FORM */}
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
            Create your account
          </h2>

          <p className="text-muted mb-4">
            It only takes a minute to get started.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                Name
              </label>

              <div className="input-group input-group-lg">
                <span className="input-group-text bg-white border-end-0 rounded-start-3">
                  <i className="bi bi-person text-muted"></i>
                </span>

                <input
                  className="form-control border-start-0 rounded-end-3"
                  placeholder="Jane Doe"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
              </div>

              <small className="text-danger">
                {errors.name?.message}
              </small>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                Username
              </label>

              <div className="input-group input-group-lg">
                <span className="input-group-text bg-white border-end-0 rounded-start-3">
                  <i className="bi bi-at text-muted"></i>
                </span>

                <input
                  className="form-control border-start-0 rounded-end-3"
                  placeholder="janedoe"
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
              </div>

              <small className="text-danger">
                {errors.username?.message}
              </small>
            </div>

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
                  className="form-control border-start-0 rounded-end-3"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
              </div>

              <small className="text-danger">
                {errors.email?.message}
              </small>
            </div>

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
                  className="form-control border-start-0 rounded-end-3"
                  placeholder="At least 8 characters"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message:
                        "Password must be at least 8 characters",
                    },
                  })}
                />
              </div>

              <small className="text-danger">
                {errors.password?.message}
              </small>
            </div>

            <button
              className="btn btn-lg w-100 rounded-3 fw-semibold text-white shadow-sm"
              style={{
                background:
                  "linear-gradient(135deg, #4f46e5 0%, #8b5cf6 100%)",
                border: "none",
              }}
              type="submit"
            >
              Create Account
            </button>

          </form>

          <p className="text-center mt-4 mb-0 text-muted">
            Already have an account?
            <Link
              to="/login"
              className="ms-2 text-decoration-none fw-semibold"
              style={{ color: "#4f46e5" }}
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;