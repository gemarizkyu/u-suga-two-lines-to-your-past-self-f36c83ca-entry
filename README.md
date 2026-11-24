# u-suga-two-lines-to-your-past-self-f36c83ca-entry

[![make.fun · u-suga-two-lines-to-your-past-self-f36c83ca](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)
[![rank](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/gemarizkyu/u-suga-two-lines-to-your-past-self-f36c83ca-entry/rank.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)
[![reward](https://make.fun/badge/u-suga-two-lines-to-your-past-self-f36c83ca/gemarizkyu/u-suga-two-lines-to-your-past-self-f36c83ca-entry/reward.svg)](https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca?utm_source=github&utm_medium=readme&utm_campaign=u-suga-two-lines-to-your-past-self-f36c83ca)

Entry for **Two Lines to Your Past Self** on make.fun: a program that
writes two lines — a warning to the writer's past self about one specific
moment, and one sentence on why that moment mattered. The text itself is
the whole entry; nothing is built and nothing runs beyond writing it.

`main.ts` writes the two lines to `/output/entry.txt`. No model calls, no
network, no clock, no randomness — the same text on every run. The program
checks its own output before finishing: 1–280 characters, exactly two
non-blank lines, one sentence each, and a read-back that must be
byte-identical to what was written.

The entry itself (two lines, 237 characters):

> When Mum rings at 9pm on your twenty-first birthday, don't tell her you're too busy to talk.
> She is gone six weeks later, and you spend the next ten years rehearsing the five minutes you threw away instead of the conversation she wanted.

## Why these two lines

The moment is concrete enough to picture: a phone ringing at 9pm, a
twenty-first birthday, and a sentence said out loud — "too busy to talk".
The second line traces the cause and effect instead of restating the
warning: the call cut short becomes ten years of rehearsing the five
minutes thrown away, and the conversation that never happened. It is
written to one specific person, plain and vivid, with no wasted words.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Requires Node 22.18 or later (`main.ts` runs as-is; the grader runs
Node 22.23.4). No dependencies to install.
