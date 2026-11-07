"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getStoredAttemptById } from "@/lib/storage";
import { getAttemptFromDB } from "@/lib/audio-db";
import { TestAttempt } from "@/types/exam";
import { AppShell } from "@/components/layout/AppShell";
import { ResultsView } from "@/components/results/ResultsView";
import { AlertCircle, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function ResultsPage() {
  const params = useParams();
  const attemptId = params?.attemptId as string;

  const [attempt, setAttempt] = useState<TestAttempt | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!attemptId) return;

    let isMounted = true;

    async function fetchAttempt() {
      // 1. Synchronous check: Memory map, sessionStorage, localStorage
      let data = getStoredAttemptById(attemptId);
      if (data && isMounted) {
        setAttempt(data);
        setLoading(false);
        return;
      }

      // 2. High-capacity IndexedDB check (stores full attempts without quota restrictions)
      data = await getAttemptFromDB(attemptId);
      if (data && isMounted) {
        setAttempt(data);
        setLoading(false);
        return;
      }

      // 3. Brief retry in case of ongoing asynchronous transaction
      const t = setTimeout(async () => {
        if (!isMounted) return;
        const retryData = getStoredAttemptById(attemptId) || (await getAttemptFromDB(attemptId));
        setAttempt(retryData);
        setLoading(false);
      }, 150);

      return () => clearTimeout(t);
    }

    fetchAttempt();

    return () => {
      isMounted = false;
    };
  }, [attemptId]);

  if (loading) {
    return (
      <AppShell>
        <div className="flex min-h-[60vh] items-center justify-center">
          <RefreshCw className="h-8 w-8 animate-spin text-[#2457D6]" />
        </div>
      </AppShell>
    );
  }

  if (!attempt) {
    return (
      <AppShell>
        <div className="mx-auto max-w-xl px-4 py-16 text-center space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
            <AlertCircle className="h-6 w-6" />
          </div>
          <h2 className="text-xl font-bold text-[#172033]">
            Assessment Result Not Found
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            No assessment record was found for ID <code className="font-mono bg-slate-100 px-1 py-0.5 rounded text-xs">{attemptId}</code>. It may have been cleared or performed on another browser session.
          </p>
          <div className="pt-2">
            <Link
              href="/mock-tests"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2457D6] text-white text-xs sm:text-sm font-semibold shadow-xs hover:bg-[#1d45ab]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Browse Mock Tests</span>
            </Link>
          </div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <ResultsView attempt={attempt} />
      </div>
    </AppShell>
  );
}

