# Animation timing contract

Animation state is transient and never enters the save schema.

Priority is `death > hurt > attack > jump/fall/land > walk > idle`. State
classes change only on entry/exit; CSS advances atlas frames without React
updates per frame.

## Warden attack

- 0 ms: enter attack and lock the existing attack action.
- 90 ms: sword-whoosh event.
- 155 ms: authoritative existing damage formula, impact SFX, trail window,
  damage number, enemy hurt/death transition.
- 320 ms: recovery ends and locomotion/idle resumes.

## Reactions

- Standard enemy hurt: 190 ms; boss acknowledgement: 120 ms.
- Standard enemy death visual: 620 ms; boss death visual: 1050 ms.
- Warden hurt: 260 ms.
- Warden death: 1250 ms before the existing sanctuary recovery.
- Jump transitions to fall at 260 ms, lands at 500 ms, and releases at 610 ms.

Rewards are marked once when lethal damage is accepted. Visual removal occurs
later and cannot call the reward path again. Night completion also has a
one-shot guard and writes the completed castle reward before autosaving.
