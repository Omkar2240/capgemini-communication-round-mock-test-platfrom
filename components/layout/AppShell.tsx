import React from "react";
import { AppNavbar } from "./AppNavbar";
import { AppFooter } from "./AppFooter";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F7FB]">
      <AppNavbar />
      <main className="flex-1">{children}</main>
      <AppFooter />
    </div>
  );
}

