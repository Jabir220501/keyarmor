import React from "react";

function Search() {
  return (
    <div
      id="kt_header_search"
      class="header-search d-flex align-items-center search-custom w-lg-275px mb-5"
      data-kt-search-keypress="true"
      data-kt-search-min-length="2"
      data-kt-search-enter="enter"
      data-kt-search-layout="menu"
      data-kt-search-responsive="false"
      data-kt-menu-trigger="auto"
      data-kt-menu-permanent="true"
      data-kt-menu-placement="bottom-start"
    >
      <div
        data-kt-search-element="toggle"
        class="search-toggle-mobile d-flex d-lg-none align-items-center"
      >
        <div class="d-flex">
          <i class="ki-duotone ki-magnifier fs-1">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
        </div>
      </div>
      <form
        data-kt-search-element="form"
        class="d-none d-lg-block w-100 position-relative mb-5 mb-lg-0"
        autocomplete="off"
      >
        {/* begin::Hidden input(Added to disable form autocomplete) */}
        <input type="hidden" />
        {/* end::Hidden input */}
        {/* begin::Icon */}
        <i class="ki-duotone ki-magnifier search-icon fs-2 text-gray-500 position-absolute top-50 translate-middle-y ms-5">
          <span class="path1"></span>
          <span class="path2"></span>
        </i>
        {/* end::Icon */}
        {/* begin::Input */}
        <input
          type="text"
          class="search-input form-control form-control-solid ps-13"
          name="search"
          value=""
          placeholder="Search..."
          data-kt-search-element="input"
        />
        {/* end::Input */}
        {/* begin::Spinner */}
        <span
          class="search-spinner position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
          data-kt-search-element="spinner"
        >
          <span class="spinner-border h-15px w-15px align-middle text-gray-500"></span>
        </span>
        {/* end::Spinner */}
        {/* begin::Reset */}
        <span
          class="search-reset btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4"
          data-kt-search-element="clear"
        >
          <i class="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
            <span class="path1"></span>
            <span class="path2"></span>
          </i>
        </span>
        {/* end::Reset */}
      </form>
      {/* end::Form */}
    </div>
  );
}

export default Search;
