import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";
import Category from "./Category";

function Sidebar() {
  return (
    <div
      id="kt_app_sidebar"
      class="app-sidebar flex-column"
      style={{ backgroundColor: "#131313" }}
      data-kt-drawer="true"
      data-kt-drawer-name="app-sidebar"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="250px"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
    >
      <div
        class="app-sidebar-header d-flex flex-column px-10 pt-8"
        id="kt_app_sidebar_header"
      >
        <div class="d-flex flex-stack mb-10 m-auto">
          <Logo />
        </div>
        <Search />
      </div>
      <div class="app-sidebar-navs flex-column-fluid" id="kt_app_sidebar_navs">
        <div
          id="kt_app_sidebar_navs_wrappers"
          class="hover-scroll-y mx-3 my-2"
          data-kt-scroll="true"
          data-kt-scroll-activate="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-dependencies="#kt_app_sidebar_header, #kt_app_sidebar_projects"
          data-kt-scroll-wrappers="#kt_app_sidebar_navs"
          data-kt-scroll-offset="5px"
        >
          <div
            id="#kt_app_sidebar_menu"
            data-kt-menu="true"
            data-kt-menu-expand="false"
            class="menu menu-column menu-rounded menu-sub-indention menu-state-bullet-primary px-4"
          >
            <div class="menu-item">
              <div class="menu-content menu-heading text-uppercase fs-7">
                Pages
              </div>
            </div>
            <Menu menuName="Dashboard" href="/" icon="ki-category" />
            <Menu
              menuName="Passwords"
              href="/passwords"
              icon="ki-password-check"
            />
            <Menu menuName="Credit Cards" href="/cards" icon="ki-credit-cart" />
            <Menu menuName="Files" href="/files" icon="ki-some-files" />
            <Menu menuName="Shared" href="/shared" icon="ki-share" />
            <Menu menuName="Notes" href="/notes" icon="ki-note" />
            <Menu
              menuName="Favorites"
              href="/favorites"
              icon="ki-heart-circle"
            />
            <Menu menuName="Trash" href="/trash" icon="ki-delete-files" />
          </div>
          <div class="separator mx-8"></div>
          <div class="menu menu-rounded menu-column px-4">
            {/* begin::Heading */}
            <div class="menu-item d-flex justify-content-between align-items-center">
              <div class="menu-content menu-heading text-uppercase fs-7">
                Categories
              </div>
              <span class="menu-icon">
                <i class="ki-duotone ki-abstract-26 fs-2">
                  <span class="path1"></span>
                  <span class="path2"></span>
                </i>
              </span>
            </div>
            <Category href="#" categoryName="Important" categoryAmount="5"/>
            <Category href="#" categoryName="Social Media" categoryAmount="10"/>
            <Category href="#" categoryName="Streaming" categoryAmount="64"/>
            <div class="menu-item">
              {/* begin::Toggle */}
              <a
                class="menu-link menu-collapse-toggle toggle collapsible collapsed"
                data-bs-toggle="collapse"
                href="#kt_app_sidebar_menu_projects_collapse"
                data-kt-toggle-text="Show less"
              >
                <span class="menu-icon">
                  <i class="ki-duotone ki-down toggle-off fs-2 me-0"></i>
                  <i class="ki-duotone ki-up toggle-on fs-2 me-0"></i>
                </span>
                {/* begin::Title */}
                <span class="menu-title" data-kt-toggle-text-target="true">
                  Show more
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
