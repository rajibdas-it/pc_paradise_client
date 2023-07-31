import Link from "next/link";
import React from "react";

const NavItem = ({ item }) => {
  return (
    <li>
      <Link href={`/product?category=${item?.categoryName}`}>
        {item?.categoryName}
      </Link>
    </li>
  );
};

export default NavItem;
