import React from "react";

function Category(props) {
  return (
    <div class="menu-item">
      <a class="menu-link" href={props.href}>
        <span class="menu-icon">
          <span class="bullet bullet-dot h-10px w-10px bg-warning"></span>
        </span>
        <span class="menu-title">{props.categoryName}</span>
        <span class="menu-badge">
          <span class="badge badge-custom">{props.categoryAmount}</span>
        </span>
      </a>
    </div>
  );
}

export default Category;
