// Two Lines to Your Past Self — make.fun bounty entry (Node 22, standard
// library only). Writes exactly two lines to /output/entry.txt:
//   line 1 — a warning to the writer's past self about one specific moment,
//            a single sentence;
//   line 2 — one sentence on why that moment mattered and what changed
//            because of it.
// Deterministic: the same fixed text on every run. No model calls, no
// network, no clock, no randomness, no environment secrets. Outside the
// grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY_LINES = [
  // Measured: line 1 is 92 characters, line 2 is 144; with the newline
  // between them the entry is 237 characters, inside the 1-280 gate.
  "When Mum rings at 9pm on your twenty-first birthday, don't tell her you're too busy to talk.",
  'She is gone six weeks later, and you spend the next ten years rehearsing the five minutes you threw away instead of the conversation she wanted.',
];

const ENTRY = ENTRY_LINES.join('\n');

// Gate, mirrored from the kit rules: UTF-8 text, 1 to 280 characters,
// not only white space, exactly two lines, one sentence each.
function isSingleSentence(line: string): boolean {
  const trimmed = line.trim();
  if (!/^[A-Z]/.test(trimmed)) return false;
  if (!/[.!?]$/.test(trimmed)) return false;
  const body = trimmed.slice(0, -1);
  return !/[.!?]/.test(body);
}

if (ENTRY.length < 1 || ENTRY.length > 280) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-280`);
}
if (ENTRY.trim().length === 0) {
  throw new Error('entry is only white space');
}
if (ENTRY_LINES.length !== 2 || ENTRY_LINES.some((l) => l.trim() === '')) {
  throw new Error('entry must be exactly two non-blank lines');
}
if (!ENTRY_LINES.every(isSingleSentence)) {
  throw new Error('each line must be exactly one sentence');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = join(OUTPUT_DIR, 'entry.txt');
writeFileSync(outPath, ENTRY, 'utf8');

// Read back: what lands on disk must be byte-identical to what was written.
const readBack = readFileSync(outPath, 'utf8');
if (readBack !== ENTRY) {
  throw new Error('read-back differs from written entry');
}

console.log(`wrote ${outPath} (${ENTRY.length} characters, 2 lines)`);
