import { Link } from "react-router-dom";

const Landing = () => {
  return (

<section className="container py-5">

<div className="row align-items-center">

<div className="col-lg-6">

<h1 className="display-3 fw-bold">

Create Your Portfolio

with AI

</h1>

<p className="lead my-4">

Build a beautiful portfolio in minutes using artificial intelligence.

</p>

<Link
to="/register"
className="btn btn-primary btn-lg me-3"
>

Start Free

</Link>

<Link
to="/login"
className="btn btn-outline-dark btn-lg"
>

Login

</Link>

</div>

<div className="col-lg-6">

<img

src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"

className="img-fluid rounded"

alt=""

 />

</div>

</div>

</section>

  );
};

export default Landing;