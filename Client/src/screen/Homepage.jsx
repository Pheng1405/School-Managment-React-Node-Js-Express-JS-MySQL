import { Link } from "react-router-dom";
const Homepage = () =>{
    return(
        <div>
            <Link to='/student'>Student</Link>
            <Link to='/test'></Link>
        </div>
    )
}

export default Homepage;