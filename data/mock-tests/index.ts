import { MockTest } from "@/types/exam";

import mock01 from "./mock-01.json";
import mock02 from "./mock-02.json";
import mock03 from "./mock-03.json";
import mock04 from "./mock-04.json";
import mock05 from "./mock-05.json";
import mock06 from "./mock-06.json";
import mock07 from "./mock-07.json";
import mock08 from "./mock-08.json";
import mock09 from "./mock-09.json";
import mock10 from "./mock-10.json";
import mock11 from "./mock-11.json";
import mock12 from "./mock-12.json";
import mock13 from "./mock-13.json";
import mock14 from "./mock-14.json";
import mock15 from "./mock-15.json";

export const ALL_MOCK_TESTS: MockTest[] = [
  mock01 as unknown as MockTest,
  mock02 as unknown as MockTest,
  mock03 as unknown as MockTest,
  mock04 as unknown as MockTest,
  mock05 as unknown as MockTest,
  mock06 as unknown as MockTest,
  mock07 as unknown as MockTest,
  mock08 as unknown as MockTest,
  mock09 as unknown as MockTest,
  mock10 as unknown as MockTest,
  mock11 as unknown as MockTest,
  mock12 as unknown as MockTest,
  mock13 as unknown as MockTest,
  mock14 as unknown as MockTest,
  mock15 as unknown as MockTest,
];

export function getMockTestById(id: string): MockTest | undefined {
  if (!id) return undefined;
  const clean = id.trim().toLowerCase();
  const direct = ALL_MOCK_TESTS.find((t) => t.id.toLowerCase() === clean);
  if (direct) return direct;

  const numPart = clean.replace(/^(mock[-_]?)0*/i, "");
  const num = parseInt(numPart, 10);
  if (!isNaN(num)) {
    return ALL_MOCK_TESTS.find((t) => t.testNumber === num);
  }
  return undefined;
}

export function getMockTestByNumber(num: number): MockTest | undefined {
  return ALL_MOCK_TESTS.find((t) => t.testNumber === num);
}

export function getMockTestsByDifficulty(diff: "Foundation" | "Intermediate" | "Advanced"): MockTest[] {
  return ALL_MOCK_TESTS.filter((t) => t.difficulty === diff);
}
