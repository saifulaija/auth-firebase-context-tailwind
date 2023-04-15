import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.log(error);
        })
    }







  return (
    <div className="flex justify-between ">
      <div className="navbar bg-neutral text-neutral-content flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        <div>
        <Link  to='/' className="btn btn-ghost normal-case text-xl">Home</Link>
            <Link to='/login' className="btn btn-ghost normal-case text-xl">Login</Link>
            <Link to='/orders' className="btn btn-ghost normal-case text-xl">Orders</Link>
            <Link to='/register' className="btn btn-ghost normal-case text-xl">Register</Link>
            {
                user? <><span>{user.email}</span> <button className="btn btn-xs" onClick={handleLogOut}>Sign Out</button> </> : <Link to='/login'>Sing In</Link>
            }
        </div>
      </div>

        
       
    </div>
  );
};

export default Header;
