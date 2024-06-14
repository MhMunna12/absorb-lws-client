/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-base-200">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-[228px] min-h-full bg-[#D1A054] uppercase">
                        <div className="text-center tracking-wide mb-6 mt-3">
                            <h3 className="text-2xl font-bold uppercase">Vehicle Repair</h3>
                            <p className="font-semibold uppercase tracking-[.20em] ">Service center</p>
                        </div>
                        {/* Sidebar content here */}
                        <div className="font-semibold">
                            <li><Link to=''>Dashboard Home</Link></li>
                            <li><Link to='all-service'>All Service</Link></li>
                            <li><Link to='add-service'>Add Service</Link></li>
                            <li><Link to='payment'>Payment</Link></li>


                            <div className="divider text-white"></div>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='contract'>contact</Link></li>

                        </div>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;