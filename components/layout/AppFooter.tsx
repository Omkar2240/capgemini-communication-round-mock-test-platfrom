import Link from "next/link";
import { ShieldCheck, Info } from "lucide-react";

export function AppFooter() {
  return (
    <footer className="mt-auto border-t border-[#E2E8F0] bg-white py-8 text-[#718096] text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck className="h-4 w-4 text-[#2457D6] shrink-0" />
            <p>
              <strong className="text-[#172033]">CommPrep AI</strong> — Independent Educational Practice Simulator.
              Not affiliated with, endorsed by, or sponsored by Capgemini.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link href="/mock-tests" className="hover:text-[#2457D6] transition-colors">
              15 Full Mock Tests
            </Link>
            <span>•</span>
            <Link href="/analytics" className="hover:text-[#2457D6] transition-colors">
              Performance Analytics
            </Link>
            <span>•</span>
            <Link href="/settings" className="hover:text-[#2457D6] transition-colors">
              Preferences
            </Link>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <div className="flex items-center gap-1.5">
            <Info className="h-3.5 w-3.5 text-slate-400" />
            <span>All mock content, deterministic heuristics, and audio recordings operate entirely in your local browser.</span>
          </div>
          <p>© 2026 CommPrep AI. Built for corporate communication preparation.</p>
        </div>
      </div>
    </footer>
  );
}

