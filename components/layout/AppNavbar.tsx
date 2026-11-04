"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  LayoutDashboard,
  BarChart3,
  Settings,
  Sparkles,
  Award,
} from "lucide-react";

export function AppNavbar() {
  const pathname = usePathname();

  // If in active exam, the exam page renders its own focused ExamHeader
  if (pathname.startsWith("/exam/")) {
    return null;
  }

  const navLinks = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/mock-tests", label: "Mock Tests", icon: BookOpen },
    { href: "/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E2E8F0] bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2457D6] to-[#14264B] text-white shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold text-lg text-[#172033] tracking-tight">
                  CommPrep<span className="text-[#2457D6]">AI</span>
                </span>
                <span className="inline-flex items-center rounded-full bg-[#2457D6]/10 px-2 py-0.5 text-[10px] font-semibold text-[#2457D6]">
                  Simulator
                </span>
              </div>
              <p className="text-[11px] text-[#718096] hidden sm:block">
                Capgemini Communication Assessment Practice
              </p>
            </div>
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#2457D6]/10 text-[#2457D6] font-semibold"
                    : "text-[#718096] hover:text-[#172033] hover:bg-slate-100/80"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Quick CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/mock-tests"
            className="inline-flex items-center gap-2 rounded-lg bg-[#2457D6] px-3.5 py-2 text-xs sm:text-sm font-medium text-white shadow-sm hover:bg-[#1d45ab] transition-all hover:shadow"
          >
            <Award className="h-4 w-4" />
            <span>Practice Now</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

