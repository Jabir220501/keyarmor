import React from "react";

function SearchNavbar() {
  return (
    <form action="#">
      <div className="card">
        <div className="">
          <div className="d-flex align-items-center">
            <div className="position-relative w-md-400px me-md-2">
              <i className="ki-duotone ki-magnifier fs-3 text-gray-500 position-absolute top-50 translate-middle ms-6">
                <span className="path1"></span>
                <span className="path2"></span>
              </i>
              <input
                type="text"
                className="form-control form-control-solid ps-10"
                name="search"
                value=""
                placeholder="Search"
              />
            </div>

            <div className="d-flex align-items-center">
              <button type="submit" className="btn btn-primary me-5">
                Search
              </button>
              <a
                href="#"
                id="kt_horizontal_search_advanced_link"
                className="btn btn-link collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#kt_advanced_search_form"
                aria-expanded="false"
              >
                Advanced Search
              </a>
            </div>
          </div>

          {/* begin::Advance form */}
          <div
            className="collapse"
            id="kt_advanced_search_form"
            style={{ display: "none" }}
          >
            {/* ... Your advanced form content goes here ... */}
          </div>
          {/* end::Advance form */}
        </div>
      </div>
    </form>
  );
}

export default SearchNavbar;
