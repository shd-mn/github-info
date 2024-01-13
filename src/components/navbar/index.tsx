import React from "react";
import Logo from "./Logo";
import ProfileInfo from "./ProfileInfo";
import Search from "../Search";
import { useGetRateLimitQuery } from "@/redux/services/githubApi";

export default function Navbar() {
  const { data: rateLimit, refetch } = useGetRateLimitQuery({});
  console.log(rateLimit);
  return (
    <nav className="relative flex w-full items-center justify-between">
      <Logo />
      <Search refetch={refetch} rateLimit={rateLimit} />
      <ProfileInfo rateLimit={rateLimit} />
    </nav>
  );
}
