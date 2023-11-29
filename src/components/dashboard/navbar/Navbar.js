import React from "react";
import SearchNavbar from "./SearchNavbar";
import Avatar from "./Avatar";

function Navbar() {
  return (
    <div className="d-flex justify-content-between">
      <SearchNavbar />
      <Avatar />
    </div>
  );
}

export default Navbar;
