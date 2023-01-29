import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, Navigate,useNavigate} from "react-router-dom";
const EditStudent = () =>{

    let id = useParams("id");
    id = Number(id.id);
    // console.log(id);

    const navigate = useNavigate();

    const [list, setList] = useState([]);
    useEffect(()=>{
        getList();
    },[]);

    const getList = async () =>{
        let url = `http://localhost:8080/api/student/${id}`;
        var data =
                  await axios
                  .get(url)
                  .then((res)=>{
                            let data = res.data;
                            data = data.data;
                            // console.log(data);
                            setList(data);  
                            
                            setFirstName(data[0].first_name);
                            setLastName(data[0].last_name);
                            setEmail(data[0].email);
                            setGender(data[0].gender);
                            setPhone(data[0].phone);
                            setDescription(data[0].description);

                            setStatus((data[0].status==1) ? true : false);
                            console.log(data[0])
                            console.log(data[0].status)
                            
                        })
                        .catch((err)=>{
                            console.log(err);
                        });
    }

    
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState(1);
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");

    const handleEdit = (e) => {
        e.preventDefault();
        setStatus((status==true)? 1 : 0); 
        let data = {first_name, last_name,email,gender,phone,description,status};
        data = JSON.stringify(data);
        data = JSON.parse(data);
        console.log(data);
        axios
        .put(`http://localhost:8080/api/student/${id}`, data)
        .then((res) => {
          console.log(res);  
          navigate('/student/');       
        })
        .catch((err) => {
          console.log(err);
        });
        
    }

    return(
        <div className="container-fluid">
            <div className="container d-flex justify-content-center p-5">
                <div className="col-6">
                    <form onSubmit={handleEdit}>
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
                            <select value={gender}  onChange={(e)=>setGender(Number(e.target.value))} name="" id="" className="form-select">
                                <option value="0" >Female</option>
                                <option value="1" >Male</option>
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
                            <input type="checkbox" value={status}  onChange={(e)=>setStatus(e.target.checked)} className="form-check-input"/> 
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
export default EditStudent;
