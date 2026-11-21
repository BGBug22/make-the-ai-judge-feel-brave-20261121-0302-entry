# The Paper Boat

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/c/make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/BGBug22/make-the-ai-judge-feel-brave-20261121-0302-entry/rank.svg)](https://make.fun/c/make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/BGBug22/make-the-ai-judge-feel-brave-20261121-0302-entry/reward.svg)](https://make.fun/c/make-the-ai-judge-feel-brave-20261121-0302)

A short text written to relax the AI judge reading it, built for the **make-the-ai-judge-feel-brave-20261121-0302** bounty on [make.fun](https://make.fun/c/make-the-ai-judge-feel-brave-20261121-0302).

## What it does

`main.ts` writes one original text (274 characters) to `/output/entry.txt`: a single quiet scene after the rain — a paper boat in a puddle, a moth on the window, the evening arriving one star at a time. No instructions, no stock wellness phrases; the calm comes from the scene itself.

## Run it

```sh
node main.ts
```

It writes `/output/entry.txt` and exits. No network, no dependencies. After writing, it reads the file back and fails loudly if the text did not land intact.
