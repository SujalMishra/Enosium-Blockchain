import React from "react";
import SideBar from "./SideBar";
import TableComp from "./TableComp";
import FormBody from "./FormBody";
function AfterLoginBody() {
  return (
    <div class="row">
      <SideBar />
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h2>Section title</h2>
        <div className="container"><TableComp /></div>
        <div className="container"><FormBody /></div>
        
      </main>
    </div>
  );
}

export default AfterLoginBody;
