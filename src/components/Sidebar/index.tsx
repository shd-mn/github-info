import React from "react";
import Link from "next/link";

function Sidebar() {
  return (
    <aside className="h-full bg-slate-900 p-8">
      <Link href="/dashboard" className="text-2xl text-red-500">
        User
      </Link>
      <ul className="ps-5">
        <li>
          <button type="button">Profile</button>
        </li>
        <li>
          <button type="button">Stats</button>
        </li>
      </ul>
      <Link href="/dashboard/repos" className="text-2xl text-red-500">
        Repos
      </Link>
    </aside>
  );
}

export default Sidebar;
