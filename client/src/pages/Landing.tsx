import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div style={{ background: "#ffffff", overflowX: "hidden" }}>

      {/* NAV */}
      <nav className="container-xxl d-flex justify-content-between align-items-center py-4 px-3 px-md-4">
        <div className="d-flex align-items-center gap-2">
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

        <div className="d-none d-md-flex align-items-center gap-4">
          <a href="#features" className="text-decoration-none text-secondary fw-medium small">
            Features
          </a>
          <a href="#how-it-works" className="text-decoration-none text-secondary fw-medium small">
            How it Works
          </a>
          <a href="#testimonials" className="text-decoration-none text-secondary fw-medium small">
            Testimonials
          </a>
        </div>

        <div className="d-flex align-items-center gap-2">
          <Link
            to="/login"
            className="btn btn-outline-dark rounded-3 fw-medium px-3"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="btn btn-primary rounded-3 fw-medium px-3 shadow-sm"
          >
            Start Free
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="position-relative"
        style={{
          background:
            "radial-gradient(1000px 500px at 15% 0%, rgba(99,102,241,0.10), transparent), radial-gradient(900px 500px at 100% 10%, rgba(168,85,247,0.08), transparent)",
        }}
      >
        <div className="container py-5 py-md-5">
          <div className="row align-items-center g-5 py-4 py-md-5">

            <div className="col-lg-6">

              <span
                className="badge rounded-pill px-3 py-2 mb-4 fw-medium"
                style={{ background: "#eef2ff", color: "#4338ca" }}
              >
                <i className="bi bi-stars me-1"></i>
                AI-Powered Portfolio Builder
              </span>

              <h1
                className="fw-bold mb-4"
                style={{
                  fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}
              >
                Create your{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #4f46e5 0%, #a855f7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  portfolio
                </span>{" "}
                with AI
              </h1>

              <p className="lead text-muted mb-4" style={{ maxWidth: "480px" }}>
                Build a beautiful, professional portfolio in minutes.
                Let AI write your bio, polish your project descriptions,
                and help you stand out.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4">
                <Link
                  to="/register"
                  className="btn btn-primary btn-lg rounded-3 px-4 fw-semibold shadow-sm"
                >
                  <i className="bi bi-rocket-takeoff me-2"></i>
                  Start Free
                </Link>

                <Link
                  to="/login"
                  className="btn btn-outline-dark btn-lg rounded-3 px-4 fw-semibold"
                >
                  Login
                </Link>
              </div>

              <p className="text-muted small mb-0">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                No credit card required
              </p>

            </div>

            <div className="col-lg-6">

              {/* Decorative product mockup (no external image) */}
              <div
                className="rounded-5 shadow-lg p-3 p-md-4 position-relative"
                style={{
                  background:
                    "linear-gradient(160deg, #ffffff 0%, #f8f9ff 100%)",
                  border: "1px solid #eef0f6",
                }}
              >
                <div className="d-flex gap-2 mb-3 px-1">
                  <span className="rounded-circle" style={{ width: 10, height: 10, background: "#f87171", display: "inline-block" }}></span>
                  <span className="rounded-circle" style={{ width: 10, height: 10, background: "#fbbf24", display: "inline-block" }}></span>
                  <span className="rounded-circle" style={{ width: 10, height: 10, background: "#34d399", display: "inline-block" }}></span>
                </div>

                <div className="rounded-4 p-4" style={{ background: "#fff", border: "1px solid #f1f2f7" }}>

                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div
                      className="rounded-circle flex-shrink-0"
                      style={{
                        width: 56,
                        height: 56,
                        background:
                          "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                      }}
                    />
                    <div className="flex-grow-1">
                      <div className="rounded-2 mb-2" style={{ height: 12, width: "60%", background: "#e5e7eb" }}></div>
                      <div className="rounded-2" style={{ height: 10, width: "40%", background: "#eef0f6" }}></div>
                    </div>
                  </div>

                  <div className="d-flex gap-2 mb-4 flex-wrap">
                    {["React", "TypeScript", "Node"].map((t) => (
                      <span
                        key={t}
                        className="badge rounded-pill fw-medium px-3 py-2"
                        style={{ background: "#eef2ff", color: "#4338ca" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="rounded-4 p-3 mb-2" style={{ background: "#f8f9fc" }}>
                    <div className="rounded-2 mb-2" style={{ height: 10, width: "90%", background: "#e5e7eb" }}></div>
                    <div className="rounded-2" style={{ height: 10, width: "70%", background: "#eef0f6" }}></div>
                  </div>

                </div>

                <div
                  className="position-absolute d-none d-md-flex align-items-center gap-2 shadow rounded-4 px-3 py-2"
                  style={{
                    background: "#fff",
                    bottom: "-18px",
                    left: "-18px",
                  }}
                >
                  <i className="bi bi-stars text-warning"></i>
                  <small className="fw-semibold">AI wrote this bio</small>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container py-4 py-md-5">
        <div className="row g-4 text-center">
          {[
            { value: "12K+", label: "Portfolios Created" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "3 min", label: "Average Setup Time" },
            { value: "40+", label: "Countries Reached" },
          ].map((stat) => (
            <div className="col-6 col-md-3" key={stat.label}>
              <h2 className="fw-bold mb-1" style={{ letterSpacing: "-0.02em" }}>
                {stat.value}
              </h2>
              <p className="text-muted small mb-0">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="container py-5">

        <div className="text-center mb-5">
          <span
            className="badge rounded-pill px-3 py-2 mb-3 fw-medium"
            style={{ background: "#eef2ff", color: "#4338ca" }}
          >
            Features
          </span>

          <h2 className="fw-bold mb-2" style={{ letterSpacing: "-0.02em" }}>
            Everything you need, built in
          </h2>

          <p className="text-muted mx-auto" style={{ maxWidth: "520px" }}>
            From your first draft to your public link, every step is
            designed to be fast and effortless.
          </p>
        </div>

        <div className="row g-4">
          {[
            {
              icon: "bi-stars",
              color: "#4f46e5",
              bg: "#eef2ff",
              title: "AI Writing Assistant",
              text: "Generate a polished bio and project descriptions in one click.",
            },
            {
              icon: "bi-kanban",
              color: "#f59e0b",
              bg: "#fef3e2",
              title: "Project Showcase",
              text: "Present your work with clean, elegant project cards.",
            },
            {
              icon: "bi-palette",
              color: "#a855f7",
              bg: "#f5eeff",
              title: "Premium Templates",
              text: "Ship a portfolio that already looks professionally designed.",
            },
            {
              icon: "bi-share",
              color: "#10b981",
              bg: "#e7f9f1",
              title: "One Shareable Link",
              text: "Publish instantly to a clean, public profile URL.",
            },
            {
              icon: "bi-phone",
              color: "#0ea5e9",
              bg: "#e6f6fd",
              title: "Fully Responsive",
              text: "Looks great on desktop, tablet, and mobile automatically.",
            },
            {
              icon: "bi-lightning-charge",
              color: "#ef4444",
              bg: "#fdeaea",
              title: "Fast Setup",
              text: "Go from blank page to published portfolio in minutes.",
            },
          ].map((f) => (
            <div className="col-md-6 col-lg-4" key={f.title}>
              <div className="card border-0 shadow-sm rounded-4 h-100 feature-card">
                <div className="card-body p-4">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 mb-3"
                    style={{ width: 52, height: 52, background: f.bg }}
                  >
                    <i className={`bi ${f.icon}`} style={{ fontSize: "1.4rem", color: f.color }}></i>
                  </div>

                  <h5 className="fw-bold mb-2">{f.title}</h5>
                  <p className="text-muted mb-0">{f.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-5" style={{ background: "#f8f9fc" }}>
        <div className="container py-4">

          <div className="text-center mb-5">
            <span
              className="badge rounded-pill px-3 py-2 mb-3 fw-medium"
              style={{ background: "#fff", color: "#4338ca" }}
            >
              How it Works
            </span>

            <h2 className="fw-bold" style={{ letterSpacing: "-0.02em" }}>
              Live in three simple steps
            </h2>
          </div>

          <div className="row g-4">
            {[
              {
                step: "01",
                icon: "bi-pencil-square",
                title: "Fill in your details",
                text: "Add your skills, projects, education, and experience.",
              },
              {
                step: "02",
                icon: "bi-stars",
                title: "Let AI polish it",
                text: "Generate a professional bio and project write-ups instantly.",
              },
              {
                step: "03",
                icon: "bi-send-check",
                title: "Publish and share",
                text: "Get a public link you can share anywhere, anytime.",
              },
            ].map((s) => (
              <div className="col-md-4" key={s.step}>
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div
                        className="d-flex align-items-center justify-content-center rounded-3"
                        style={{
                          width: 48,
                          height: 48,
                          background:
                            "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                        }}
                      >
                        <i className={`bi ${s.icon} text-white`} style={{ fontSize: "1.2rem" }}></i>
                      </div>

                      <span className="text-muted fw-bold" style={{ fontSize: "1.5rem", opacity: 0.25 }}>
                        {s.step}
                      </span>
                    </div>

                    <h5 className="fw-bold mb-2">{s.title}</h5>
                    <p className="text-muted mb-0">{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="container py-5">

        <div className="text-center mb-5">
          <span
            className="badge rounded-pill px-3 py-2 mb-3 fw-medium"
            style={{ background: "#eef2ff", color: "#4338ca" }}
          >
            Testimonials
          </span>

          <h2 className="fw-bold" style={{ letterSpacing: "-0.02em" }}>
            Loved by developers and designers
          </h2>
        </div>

        <div className="row g-4">
          {[
            {
              name: "Amara N.",
              role: "Frontend Developer",
              text: "I had a polished portfolio live in under ten minutes. The AI bio felt like it actually knew me.",
            },
            {
              name: "Daniel R.",
              role: "Product Designer",
              text: "The project cards look genuinely premium. I stopped tweaking CSS and just focused on my work.",
            },
            {
              name: "Priya S.",
              role: "Full-Stack Engineer",
              text: "Sharing one clean link instead of a messy PDF resume has already gotten me two interviews.",
            },
          ].map((t) => (
            <div className="col-md-4" key={t.name}>
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body p-4">
                  <div className="mb-3 text-warning">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>

                  <p className="mb-4">"{t.text}"</p>

                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center text-white fw-semibold"
                      style={{
                        width: 42,
                        height: 42,
                        background:
                          "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
                      }}
                    >
                      {t.name.charAt(0)}
                    </div>

                    <div>
                      <h6 className="fw-bold mb-0">{t.name}</h6>
                      <small className="text-muted">{t.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* FINAL CTA */}
      <section className="container pb-5">
        <div
          className="rounded-5 shadow-lg text-center p-5 position-relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #4f46e5 0%, #7c3aed 55%, #a855f7 100%)",
          }}
        >
          <div
            className="position-absolute top-0 end-0"
            style={{
              width: "300px",
              height: "300px",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
              transform: "translate(30%, -30%)",
            }}
          />

          <h2 className="fw-bold text-white mb-3" style={{ letterSpacing: "-0.02em" }}>
            Your portfolio, ready today
          </h2>

          <p className="text-white opacity-75 mb-4 mx-auto" style={{ maxWidth: "480px" }}>
            Join thousands of professionals who built their portfolio
            with AI in minutes, not weeks.
          </p>

          <Link
            to="/register"
            className="btn btn-light btn-lg rounded-3 px-5 fw-semibold shadow-sm"
          >
            <i className="bi bi-rocket-takeoff me-2"></i>
            Start Free
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-top py-4">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">

          <div className="d-flex align-items-center gap-2">
            <div
              className="d-flex align-items-center justify-content-center rounded-3"
              style={{
                width: "28px",
                height: "28px",
                background:
                  "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
              }}
            >
              <i className="bi bi-magic text-white small"></i>
            </div>
            <span className="fw-semibold small">
              Folio<span style={{ color: "#7c3aed" }}>AI</span>
            </span>
          </div>

          <small className="text-muted">
            © {new Date().getFullYear()} FolioAI. All rights reserved.
          </small>

        </div>
      </footer>

      <style>{`
        .feature-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 1rem 2rem rgba(17, 24, 39, 0.08) !important;
        }
      `}</style>

    </div>
  );
};

export default Landing;