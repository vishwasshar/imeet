import Link from "next/link";
import React from "react";
import Headroom from "react-headroom";

const Navbar = () => {
  return (
    <Headroom className="">
      <nav className="w-full flex justify-around items-center bg-[#ffffffdd] z-50 py-4 font-semibold">
        <h2 className="text-3xl">iMeet</h2>
        <ul className="w-[30%] flex justify-between items-center">
          <li>
            <Link href={"/"}>Home</Link>
          </li>

          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link href={"https://shorturl.at/qDOUW"}>Join Us</Link>
          </li>
        </ul>
      </nav>
    </Headroom>
  );
};

export default Navbar;
