import React from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleSidebar } from "@/redux/features/mainSlice";
export default function Logo() {
  const { isSidebarOpen } = useSelector((state: RootState) => state.main);
  console.log(isSidebarOpen)
  const dispatch = useDispatch();

  const handleSidebarShow = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className="flex items-center gap-8">
      <Link href="/" className="text-lg">
        GithubInfo
      </Link>
      <button type="button" onClick={handleSidebarShow}>
        <IoMenu size={24} />
      </button>
    </div>
  );
}
