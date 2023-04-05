import Logo from './logo.component';
import { Link, } from "react-router-dom";

function Menu() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div className="sidebar-brand-icon">
                    <Logo />
                </div>
                <div className="sidebar-brand-text mx-3">App</div>
            </a>

            <hr className="sidebar-divider my-0" />

            <Link className="nav-item" to="/dashboard">
                <div className="nav-link" >
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </div>
            </Link>

            <hr className="sidebar-divider" />

            <li className="nav-item">
                <a className="nav-link collapsed" data-toggle="collapse" data-target="#menu1"
                    aria-expanded="true" aria-controls="menu1">
                    <i className="fas fa-fw fa-search"></i>
                    <span>Enquiries</span>
                </a>
                <div id="menu1" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <Link className="collapse-item" to="/test"> Test </Link>
                        <Link className="collapse-item" to="/test2"> Test 2 </Link>
                    </div>
                </div>
            </li>

            <hr className="sidebar-divider" />

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
    );
}

export default Menu;