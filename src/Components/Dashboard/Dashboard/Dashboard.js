import React from 'react';
import { Button, Nav, Tab } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import './Dashboard.css'
const Dashboard = () => {
    const {logout, admin} = useAuth()
    return (
        <div>
            <div className='dashboard-menu-container'>
                <Tab.Container defaultActiveKey="third">
                <div className='sidebar-container'>
                <Nav variant="pills" className="flex-column dashboard-nav-links">
                  <Nav.Item className=''>
                  

                    <Nav.Link>
                      <Link  to={`/`} className='dashboard-menu' ><span className='logo-style' ></span>Home</Link> 
                    </Nav.Link>
                
                     {admin && <div>
                        <Nav.Link eventKey="first"><Link  to={`/dashboard/addadmin`} className='dashboard-menu' ><span className='logo-style' ></span> Admin</Link>
                    </Nav.Link>
                    
                    <Nav.Link eventKey="second"><Link  to={`/dashboard/adddoctor`} className='dashboard-menu' ><span className='logo-style' ></span>Add-Doctors</Link>
                  </Nav.Link>

                  <Nav.Link eventKey="second"><Link  to={`/dashboard/addservice`} className='dashboard-menu' ><span className='logo-style' ></span>Add-Service</Link>
                  </Nav.Link>
                         </div>}
                         <Nav.Link eventKey="second"><Link  to={`/dashboard/myappointments`} className='dashboard-menu' ><span className='logo-style' ></span>My-Appointments</Link>
                  </Nav.Link>
                         {/* <Nav.Link eventKey="second"><Link  to={`/dashboard/doctorsReview`} className='dashboard-menu' ><span className='logo-style' ></span>Doctor-Review</Link>
                  </Nav.Link> */}
                  </Nav.Item>

                  <Nav.Item>
                   

                    <Button onClick={logout} variant="danger" className="m-3">LogOut</Button>
                  </Nav.Item>
                </Nav>
                </div>
                
              <div className='border'>
                <Outlet></Outlet>
              </div>
                </Tab.Container>
          </div>;
        </div>
    );
};

export default Dashboard;