import { useState } from "react";
import { Link } from "react-router-dom";
import "./admin.css";

function Adminlogin(props) {

    return (
        <div className="admin">

            <form>
                <h1>Admin Login</h1>
                <div className="formInput" >

                    <input className="mt-2" type="email" placeholder="Email" />


                    <input className="mt-2 " type="passWord" placeholder="Password" />

                    <Link to="/admin/home" className="btn loginbtn">Login</Link>
                </div>
            </form>
        </div>
    );
}
export default Adminlogin;
