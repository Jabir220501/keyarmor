import React from "react";
import Sidebar from "../components/dashboard/sidebar/Sidebar";
import Navbar from "../components/dashboard/navbar/Navbar";

function page() {
  return (
    <div class="d-flex">
      <Sidebar />
      <div className="app-container w-100">
        <Navbar />
        <main></main>
      </div>
    </div>
  );
}

export default page;
