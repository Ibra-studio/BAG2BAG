import React from "react";
import { Link, NavLink } from "react-router";
import Dashboard from "../../pages/Dashboard";

function NavItems({ title, url, icon: Icon }) {
  return (
    <section>
      <NavLink
        to={url}
        end={url === "/admin-dashboard"}
        className={({ isActive }) =>
          `flex gap-5 p-2 rounded-l-lg ${
            isActive ? "border-l-5 border-l-btn-primary" : "border-none"
          } bg-white hover:cursor-pointer hover:bg-gray-100`
        }
      >
        <Icon />
        <h5>{title}</h5>
      </NavLink>
    </section>
  );
}

export default NavItems;
