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
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-lg-6">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Create Account
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="mb-3">
                <label className="form-label">
                  Name
                </label>

                <input
                  className="form-control"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />

                <small className="text-danger">
                  {errors.name?.message}
                </small>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Username
                </label>

                <input
                  className="form-control"
                  {...register("username", {
                    required: "Username is required",
                  })}
                />

                <small className="text-danger">
                  {errors.username?.message}
                </small>
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />

                <small className="text-danger">
                  {errors.email?.message}
                </small>
              </div>

              <div className="mb-4">
                <label className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  className="form-control"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message:
                        "Password must be at least 8 characters",
                    },
                  })}
                />

                <small className="text-danger">
                  {errors.password?.message}
                </small>
              </div>

              <button
                className="btn btn-primary w-100"
                type="submit"
              >
                Create Account
              </button>

            </form>

            <p className="text-center mt-4">

              Already have an account?

              <Link to="/login" className="ms-2">
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Register;