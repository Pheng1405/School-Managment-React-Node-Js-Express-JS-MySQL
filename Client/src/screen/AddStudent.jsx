import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const AddStudent = () =>{

    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState(1);
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const [active, setActive] = useState(true);


    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {first_name, last_name,email,gender,phone,description,active};
        data = JSON.stringify(data);
        data = JSON.parse(data);
        console.log(data);
        axios
        .post("http://localhost:8080/api/student", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
        
    }

    return(
        <div className="container-fluid">
            <div className="container d-flex justify-content-center p-5">
                <div className="col-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="">First Name</label>
                            <input value={first_name} onChange={(e)=>setFirstName(e.target.value)} type="text" className="form-control"/>
                        </div>
                        <div className="form-group  mb-3">
                            <label htmlFor="">Last Name</label>
                            <input value={last_name} onChange={(e)=>setLastName(e.target.value)} type="text" className="form-control"/>
                        </div>
                        <div className="form-group  mb-3">
                            <label htmlFor="">Gender</label>
                            <select value={gender} onChange={(e)=>setGender(Number(e.target.value))} name="" id="" className="form-select">
                                <option value="0">Female</option>
                                <option value="1">Male</option>
                            </select>
                        </div>
                        
                        <div className="form-group  mb-3">
                            <label htmlFor="">Phone</label>
                            <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control"/>
                        </div>

                        <div className="form-group  mb-3">
                            <label htmlFor="">Email</label>
                            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control"/>
                        </div>

                        <div className="form-group  mb-3">
                            <label htmlFor="">Description</label>
                            <textarea name="" value={description} onChange={(e)=>setDescription(e.target.value)} id="" className="form-control"></textarea>
                        </div>

                        <div className="form-group  mb-3">
                            <input type="checkbox" value={active} onChange={(e)=>setActive(e.target.checked)} className="form-check-input" name="" id="" /> 
                            <label htmlFor=""> Active ?</label>
                        </div>

                        <div className="mt-4  mb-3">
                            <button className="btn btn-primary me-2">Submit</button>
                            <Link to='/' className="btn btn-danger">Back</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default AddStudent;