interface Props {

portfolio:any;

setPortfolio:any;

}

const PersonalInfoForm=({

portfolio,

setPortfolio

}:Props)=>{

const handleChange=(

e:React.ChangeEvent<HTMLInputElement>

)=>{

setPortfolio({

...portfolio,

[e.target.name]:

e.target.value

});

};

return(

<div className="card border-0 shadow-sm rounded-4">

<div className="card-body p-4 p-md-5">

<h3 className="fw-bold mb-1" style={{ letterSpacing: "-0.01em" }}>

Personal Information

</h3>

<p className="text-muted mb-4">

Your basic contact details.

</p>

<div className="mb-4">

<label className="form-label fw-semibold">

Full Name

</label>

<input

className="form-control form-control-lg rounded-3"

placeholder="Jane Doe"

name="name"

value={portfolio.name}

onChange={handleChange}

/>

</div>

<div className="mb-4">

<label className="form-label fw-semibold">

Role

</label>

<input

className="form-control form-control-lg rounded-3"

placeholder="Frontend Developer"

name="role"

value={portfolio.role}

onChange={handleChange}

/>

</div>

<div className="mb-4">

<label className="form-label fw-semibold">

Email

</label>

<div className="input-group input-group-lg">

<span className="input-group-text bg-white border-end-0 rounded-start-3">

<i className="bi bi-envelope"></i>

</span>

<input

className="form-control border-start-0 rounded-end-3"

placeholder="jane@example.com"

name="email"

value={portfolio.email}

onChange={handleChange}

/>

</div>

</div>

<div className="mb-3">

<label className="form-label fw-semibold">

Phone

</label>

<div className="input-group input-group-lg">

<span className="input-group-text bg-white border-end-0 rounded-start-3">

<i className="bi bi-telephone"></i>

</span>

<input

className="form-control border-start-0 rounded-end-3"

placeholder="+1 (555) 000-0000"

name="phone"

value={portfolio.phone}

onChange={handleChange}

/>

</div>

</div>

</div>

</div>

);

};

export default PersonalInfoForm;