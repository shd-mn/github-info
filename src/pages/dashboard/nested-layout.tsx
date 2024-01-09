import React, { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/footer";

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid h-full grid-cols-[1fr_5fr] overflow-hidden ">
      <Sidebar />
      <main className="h-full overflow-y-scroll p-8">
        {children}
        <Footer />
      </main>
    </div>
  );
}

export default DashboardLayout;
