interface Props{

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

<>

<h3>

Personal Information

</h3>

<div className="mb-3">

<label>

Full Name

</label>

<input

className="form-control"

name="name"

value={portfolio.name}

onChange={handleChange}

/>

</div>

<div className="mb-3">

<label>

Role

</label>

<input

className="form-control"

name="role"

value={portfolio.role}

onChange={handleChange}

/>

</div>

<div className="mb-3">

<label>

Email

</label>

<input

className="form-control"

name="email"

value={portfolio.email}

onChange={handleChange}

/>

</div>

<div className="mb-3">

<label>

Phone

</label>

<input

className="form-control"

name="phone"

value={portfolio.phone}

onChange={handleChange}

/>

</div>

</>

);

};

export default PersonalInfoForm;