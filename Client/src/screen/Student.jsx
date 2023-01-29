import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import {loadEditStudent} from './EditStudent';
const Student = () =>{
    const [list, setList] = useState([]);

    useEffect(()=>{
        getList();
    },[]);

    const getList = () =>{
        axios({
            url : "http://localhost:8080/api/student",
            method : "GET",
            data : {},
        })
        .then((res)=>{
            let data = res.data;
            data = data.data;
            console.log(data);
            setList(data);  
        })
        .catch((err)=>{

        });
    console.log(list);
    }

    const handleDelete = id => {
        axios
        .delete(`http://localhost:8080/api/student/${id}`)
        .then((res)=>{
            console.log(res)
            getList();
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    return(
        <div>
            <div className="container-fluid bg-dark">
                <div className="container">
                    <div>
                        <h1 className="text-light">Student</h1>
                        <Link to='/add-student'>
                            <button type="button" className="btn btn-primary m-5">
                                Add
                            </button>
                        </Link>
                    </div>
                    <table className="table table-bordered text-light">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Gender</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                list.map(e =>{
                                    return(
                                        <tr key={e.id}>
                                            <td>{e.id}</td>
                                            <td>{e.first_name}</td>
                                            <td>{e.last_name}</td>
                                            <td>{(e.gender)?"Female":"Male"}</td>
                                            <td>{(e.phone == null) ? "No data" : e.phone}</td>
                                            <td>{(e.email == null) ? "No data" : e.email}</td>
                                            <td>{(e.description==null) ? "No data" : e.description}</td>
                                            <td>{(e.status)?"Active" : "Inactive"}</td>
                                            <td>
                                                
                                                <Link to={"/edit-student/"+e.id}>
                                                    <button className="btn btn-warning">Update</button>
                                                </Link>
                                                <button onClick={()=>handleDelete(e.id)}  className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>

                    </table>

                </div>

            </div>
        </div>


    )
}

export default Student;