import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-10">
      <h2 className="text-3xl">iMeet</h2>
      <p className="text-xs my-2">
        An Engineering Plateform for Learning Best Coding Technique.
      </p>
      <ul className="w-[30%] flex justify-between items-center">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>FAQ</Link>
        </li>
        <li>
          <Link href={"/contact"}>Privacy policy</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
