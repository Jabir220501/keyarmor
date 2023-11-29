import React from "react";

function Menu(props) {
  return (
    <a href={props.href}>
      <div class="menu-item menu-accordion">
        <span class="menu-link">
          <span class="menu-icon">
          <i className={`ki-outline ${props.icon} fs-2`}>
              {/* <span class="path1"></span>
              <span class="path2"></span> */}
            </i>
          </span>
          <span class="menu-title">{props.menuName}</span>
        </span>
      </div>
    </a>
  );
}

export default Menu;
