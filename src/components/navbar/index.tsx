import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import ProfileInfo from "./ProfileInfo";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between">
      <Logo />
      <Menu />
      <ProfileInfo />
    </nav>
  );
}
