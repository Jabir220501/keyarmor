import React from "react";

function Avatar() {
  return (
    <div className="d-flex">
      <div class="app-navbar-item">
        <a
          href="#"
          class="btn btn-flex flex-center btn-sm fw-bold btn-dark py-3 w-40px h-40px w-md-auto"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_upgrade_plan"
        >
          <i class="ki-outline ki-verify d-inline-flex d-md-none fs-2 p-0 m-0"></i>{" "}
          <span class="d-none d-md-inline ps-lg-1">Upgrade Plan</span>
        </a>
      </div>
      <div class="">
        <div
          class="d-flex align-items-center"
          data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
          data-kt-menu-overflow="true"
          data-kt-menu-placement="top-start"
        >
          <div class="d-flex flex-center cursor-pointer symbol symbol-custom symbol-40px">
            <img
              src="https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png"
              alt="image"
            />
          </div>
          <a href="#" class="text-white text-hover-primary fs-4 fw-bold ms-3">
            Eugenia
          </a>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
