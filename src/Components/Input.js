import React from 'react'

export default function Input({input}) {
    const [formData, setFormData] = React.useState({
        names:"",
        type:"",
        company:""
        
    })
    const {names,type, company } = formData

    const onChange = e => 
    setFormData({ ...formData,[e.target.name]: e.target.value})

    const onSubmit = async e => {
        e.preventDefault();
        // console.log(formData);
        input(formData)
        
      
        
    }
    
    return (
        <div className="container">
            <form className="login-form" onSubmit={e=> onSubmit(e)} >  
                <div className="row">
                    <div className="col">
                   
                    <input type="text" placeholder="Name" name="names" value={names} onChange={e => onChange(e)} />
                    </div>
                    <div className="col">
                
                    <input type="text" placeholder="Type" name="type" value={type} onChange={e => onChange(e)} />
                    </div>
                    <div className="col">
                    
                    <input type="text" placeholder="Company" name="company" value={company} onChange={e => onChange(e)} />
                    </div>
                    <div className="col">
                    <input type="submit" className="btn btn-success" value="Find" />
                    </div>
                </div>
            </form>
        </div>
    )
}
