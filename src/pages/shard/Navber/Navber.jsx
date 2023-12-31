import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../../AuthProvider/AuthProvider';
// https://i.ibb.co/vs1fpsM/down.jpg

const Navber = () => {

    const { user, logOut } = useContext(AuthContex)

    const handleLogOut = () => {
        logOut()
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allToys'>All Toys</Link></li>
        <li><Link to='/mytoys'>My Toys</Link></li>
        <li><Link to='/addAtoy'>Add A Toy</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>

        {/* , ,  */}
    </>


    return (
        <div className="navbar bg-base-100 h-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">


                        {navItems}

                    </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='rounded-lg w-16 bg-slate-800' src="https://i.ibb.co/vs1fpsM/down.jpg" alt="" />
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Hot Toys</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="avatar mr-4 online">
                            <div className="w-14 rounded-full ">
                                <img title={user.displayName} src={user.photoURL} />
                            </div>
                        </div>

                        <button className="btn" onClick={handleLogOut}>Log Out</button>
                    </>
                        :
                        <Link to='/login' className="btn">Log in</Link>

                }
            </div>
        </div>
    );
};

export default Navber;  