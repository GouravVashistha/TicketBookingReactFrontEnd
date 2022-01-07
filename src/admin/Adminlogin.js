// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./admin.css";

// function Adminlogin(props) {

//     return (
//         <div className="admin">

//             <form>
//                 <h1>Admin Login</h1>
//                 <div className="formInput" >

//                     <input className="mt-2" type="email" placeholder="Email" />

//                     <input className="mt-2 " type="passWord" placeholder="Password" />

//                     <Link to="/admin/home" className="btn loginbtn">Login</Link>
//                 </div>
//             </form>
//         </div>
//     );
// }
// export default Adminlogin;


import "./admin.css";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Adminlogin(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    return (

        <div className="admin">


            <form>
                <h1>Admin Login</h1>
                <div className="formInput">
                    <input className="mt-2" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    <input className="mt-2" type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
                    <button onClick={() => {
                        if (email === "abc@gmail.com" && password === "abc") {
                            localStorage.setItem('email', email)
                            navigate("/admin/home")
                            console.log("login success")
                        }
                        else {
                            alert("WrongCredentials")
                        }
                    }}>Login</button>
                </div>

            </form>


        </div>
    );
}

export default Adminlogin;


