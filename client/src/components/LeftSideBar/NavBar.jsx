import React from "react";
import { NavLink } from "react-router-dom";

import LocationNews from "./LocationNews";

export default function NavBar(activeCategory) {
  const categories = [
    ["राजनीति", "politics"],
    ["विश्व", "global"],
    ["विजनेस", "business"],
    ["अर्थ / वाणिज्य", "finance"],
    ["खेलकुद", "sports"],
    ["मनोरञ्जन", "entertainment"],
    // ["स्थान", "Location"],
  ];
  const menuItems = categories.map((eachCat) => {
    return (
      <li key={eachCat[1]}>
        <NavLink
          to={`/category/${eachCat[1]}`}
          className={({ isActive }) => {
            return isActive
              ? "activeSideNav"
              : "hover:font-semibold hover:text-darkblue hover:pl-4 hover:border-l-4 border-l-transparent hover:border-l-rose-700 transition-all duration-300 leading-loose";
          }}
        >
          {eachCat[0]}
        </NavLink>
      </li>
    );
  });
  return (
    <nav className=" pr-10">
      <h2 className="font-bold text-2xl leading-loose">Category</h2>
      <ul className="list-none flex flex-col justify-between gap-2 mt-4 border-r-4 border-r-darkblue ">
        {menuItems}
        <li>
          <LocationNews />
        </li>
      </ul>
    </nav>
  );
}
