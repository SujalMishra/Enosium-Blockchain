import React from "react";
import "./SideBar.css"
function SideBar() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse Dropdown"
    >
      <div className="position-sticky pt-3 sidebar-sticky" >
        <ul className="nav flex-column">
          <li className="nav-item"><a class="nav-link" href="#">Dashboard</a></li>
          <li className="nav-item"><a class="nav-link" href="#">Orders</a></li>
          <li className="nav-item"><a class="nav-link" href="#">Products</a></li>
          <li className="nav-item"><a class="nav-link" href="#">Customers</a></li>
          <li className="nav-item"><a class="nav-link" href="#">Reports</a></li>
          <li className="nav-item"><a class="nav-link" href="#">Integrations</a></li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
          <span>Saved reports</span>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item"><a class="nav-link" href="#">Current month</a></li>
          <li className="nav-item"><a class="nav-link" href="#">Last quarter</a></li>
          <li className="nav-item"><a class="nav-link" href="#">Social engagement</a></li>
          <li className="nav-item"><a class="nav-link" href="#">Year-end sale</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;
