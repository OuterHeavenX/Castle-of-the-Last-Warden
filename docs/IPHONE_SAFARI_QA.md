# iPhone Safari manual QA

Use a current iPhone in landscape at 844, 852, or 874 CSS-pixel width.

1. Start New Game and confirm `document.documentElement.dataset.audio` becomes
   `running` after the first gesture.
2. Hold movement, slide outside the button, rotate, background Safari, and
   return. Movement must be neutral after pointer loss, blur, or visibility
   change.
3. Hold movement with one thumb while pressing Jump and Attack with the other.
4. Open/close menus and Elara dialogue; gameplay input must remain neutral.
5. Save, refresh, Continue, enter the forest, return, ring the Night Bell, and
   complete the boss.
6. Background and foreground Safari during each music scene. Audio should
   suspend while hidden and resume after return without creating another
   music loop.
7. Rotate to portrait and back. The rotation notice must protect gameplay and
   no held direction may survive.

The implementation uses pointer capture plus `pointercancel`, lost-capture,
window blur, and document visibility cleanup. No progression data is involved.
