"use client";
import React from "react";
import { useSidebar } from "@/context/SidebarContext";
import AppHeader from "@/layout/AppHeader";
import AppSidebar from "@/layout/AppSidebar";
import Backdrop from "@/layout/Backdrop";
import { staffNavItems } from "@/constant/staffNav";
import RequireAuth from "@/context/RequireAuth";
import { AllocationProvider } from "@/context/AlokasiContext";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
    ? "lg:ml-[290px]"
    : "lg:ml-[90px]";

  return (
    <RequireAuth allowedRoles={["staff"]}>
      <AllocationProvider>
        <div className="min-h-screen xl:flex">
          <AppSidebar navItems={staffNavItems} />
          <Backdrop />
          <div
            className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
          >
            <AppHeader />
            <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
              {children}
            </div>
          </div>
        </div>
      </AllocationProvider>
    </RequireAuth>
  );
}
