// ─────────────────────────────────────────────────────────────────────────────
// spec/exercises.spec.js
//
// MOB WORKFLOW — rotate after each failing spec is added:
//   Driver writes the next `it(...)` block  →  passes keyboard
//   Next driver makes it green              →  passes keyboard
//   Next driver refactors if needed         →  passes keyboard  →  repeat
// ─────────────────────────────────────────────────────────────────────────────
const { triangle } = require('../src/triangle');

describe('Given A, when B', () => {
  it('then C', () => {
    expect(min(2, 4)).toBe(2);
  });
});
